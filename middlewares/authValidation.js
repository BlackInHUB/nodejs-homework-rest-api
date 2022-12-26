const jwt = require('jsonwebtoken');
const {User} = require('../models/usersModel');
const {httpError} = require('../helpers/errors');

const authValidation = async (req, res, next) => {
  const {authorization = ''} = req.headers;
  const [tokenType, token] = authorization.split(' ');

  if (tokenType !== 'Bearer') {
    next(httpError(401));
  }

  try {
    const {id} = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(id);

    if (!user || !user.token) {
      next(httpError(401));
    };

    req.user = user;
    next();
  } catch (error) {
    next(httpError(401));
  }
};

module.exports = {
  authValidation
};
