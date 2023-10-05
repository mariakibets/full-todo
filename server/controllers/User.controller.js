 const {User} = require('../models')

module.exports.registrationUser = async (req, res, nex) => {
    try{
       const {body} = req;
       const createdUser = await User.create(body);
       return res.status(201).send(createdUser);
    }catch(error){
      next(error);
    }
}

module.exports.loginUser = async (req, res, next) => {

}