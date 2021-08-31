const {
    models: { User },
  } = require("../db");
  
  //intercepts token from axios call and spits out the user obj
  const requireToken = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const user = await User.findByToken(token);
      req.user = user;
      // console.log("MIDDLEWARE",token, user )
      next();
    } catch (e) {
      next(e);
    }
  };
  
  module.exports = {
    requireToken,
  };
  