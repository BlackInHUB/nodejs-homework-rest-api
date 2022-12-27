const services = require('../../services/users');
const {httpError} = require('../../helpers/errors');
const {User} = require('../../models/usersModel');

const update = async (req, res) => {
  const {_id} = req.user;
  const user = await User.findById(_id);

  if (!user) {
    throw httpError(401);
  }

  const result = await services.update(_id, req.body);

  res.status(200).json({
    email: result.email,
    subscription: result.subscription
  });
};

module.exports = {
  update
};
