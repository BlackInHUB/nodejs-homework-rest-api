const {User} = require('../../models/usersModel');
const jwt = require('jsonwebtoken');

const register = async (email, password) => {
  return await User.create({email, password});
};

const login = async (user) => {
  const payload = {
    id: user._id,
    email: user.email
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});
};

const logout = async (userId) => {
  return await User.findByIdAndUpdate(userId, {token: ''});
};

const update = async (userId, body) => {
  return await User.findByIdAndUpdate(userId, body, {new: true});
};

module.exports = {
  register,
  login,
  logout,
  update
};
