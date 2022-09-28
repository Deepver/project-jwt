var jwt = require('jsonwebtoken');
const secretKey = "deepak"
const createToken = ({name ,password})=>{
   let token = jwt.sign({ name ,password }, secretKey,{expiresIn : "2h"},);
    return token;
}


const verify = (token) => {
  jwt.verify(token, secretKey, (err, decoded) => {
    if(err) throw new Error(err);

  });
};

module.exports = {createToken ,verify }