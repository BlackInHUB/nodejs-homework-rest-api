const {User} = require('../../models/usersModel');
const services = require('../../services/users');
const {httpError} = require('../../helpers/errors');

const register = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  const user = await User.findOne({email});

  if (user) {
    throw httpError(409, 'Email in use');
  };

  const result = await services.register(email, password);

  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      email: result.email,
      subscription: result.subscription
    }
  });
};

module.exports = {
  register
};
