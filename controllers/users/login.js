const {User} = require('../../models/usersModel');
const bcrypt = require('bcrypt');
const services = require('../../services/users');
const {httpError} = require('../../helpers/errors');

const login = async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});

  if (!user || !await bcrypt.compareSync(password, user.password)) {
    throw httpError(401, 'Wrong email or password');
  };

  if (!user.verify) {
    throw httpError(403, 'You need to verify email');
  };

  const token = await services.login(user);

  await User.findOneAndUpdate(user._id, {token});

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      token,
      user: {
        email: user.email,
        subscription: user.subscription
      }
    }
  });
};

module.exports = {
  login
};
