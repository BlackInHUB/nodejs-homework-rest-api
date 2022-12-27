const {User} = require('../../models/usersModel');
const services = require('../../services/users');
const {httpError} = require('../../helpers/errors');

const logout = async (req, res) =>{
  const {_id} = req.user;
  const user = await User.findById(_id);

  if (!user) {
    throw httpError(401);
  };

  await services.logout(_id);

  res.status(204).json({message: 'Logaut success'});
};

module.exports = {
  logout
};
