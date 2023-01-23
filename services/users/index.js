const {User} = require('../../models/usersModel');
const jwt = require('jsonwebtoken');

const register = async (email, password, avatarURL, verificationToken) => {
  return await User.create({email, password, avatarURL, verificationToken});
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

const verify = async (userId) => {
  return await User.findByIdAndUpdate(userId,
      {verify: true, verificationToken: null});
};

module.exports = {
  register,
  login,
  logout,
  update,
  verify
};
