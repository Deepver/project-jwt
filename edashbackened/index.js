const express = require('express');
const mongoose = require('mongoose');  
const cors = require('cors');
const User = require('./models/User')
const app = express();
const {createToken,verify} = require('./utilities/authentication')
const {generateHash ,compareText} = require('./utilities/common')


 //connect to database

mongoose.connect('mongodb://localhost:27017/test')
.then(() => { console.log('connect success db'); });


//middleware
app.use(express.json());
app.use(cors());


app.post("/api/register", async (req, res) => {
   console.log("Body" , req.body)
   // var password = bcrypt.hashSync(req.body.password, 10);

   let password= await generateHash(req.body.password)
   let email = await  User.find({email : req.body.email})
   if(email.email){
     return res.send("already exits")
   }
   try {
      let data = new User({
        name: req.body.name,
        email: req.body.email,
        password
      });
      data = await data.save();
      //jwt token
     const token =  createToken(data) 
      res.status(200).send({data,auth:token});
      
   } catch (e) {
      console.log(e)
     return res.send({ result: e.message });
   }
}); 


app.post("/api/login", async (req, res) => {
   try {
     if (req.body.password && req.body.email) {
      
       let user = await User.findOne({email :req.body.email})

       if(!user) throw new Error('User Not Found')
       console.log(user)
       const isPassMatch =await compareText(req.body.password ,user.password )
       if(!isPassMatch) throw new Error('User Unauthorised')

       //jwt token 
       const token =  createToken(user) 
      return res.status(200).send({user ,message:"User Found",auth:token});
     } else  {
      throw new Error('Password or email Not Found')
     }
   } catch (e) {
      console.log(e)
     return res.send({ result: e});
   }
  
});


app.get('/', async(req, res)=>{
   const data = await product.find({});
   console.log(data);
   res.status(200).send(data);   
});


app.listen(2000,() => { console.log('listening  on port  2000'); })