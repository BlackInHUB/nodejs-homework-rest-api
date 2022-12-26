const {httpError} = require('../../helpers/errors');
const {User} = require('../../models/usersModel');

const current = async (req, res) => {
  const {_id} = req.user;
  const user = await User.findById(_id);

  if (!user) {
    throw httpError(401);
  }

  res.json({
    email: user.email,
    subsctiption: user.subscription
  });
};

module.exports = {
  current
};
