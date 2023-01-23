const {httpError} = require('../../helpers/errors');
const {User} = require('../../models/usersModel');
const services = require('../../services/users');

const verify = async (req, res) => {
  const {verificationToken} = req.params;

  const user = await User.findOne({verificationToken});

  if (!user) {
    throw httpError(404, 'User not found');
  };

  await services.verify(user._id);

  res.json({
    message: 'Verification successful'
  });
};

module.exports = {
  verify
};
