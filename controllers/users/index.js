const {register} = require('./registrer');
const {login} = require('./login');
const {logout} = require('./logout');
const {current} = require('./current');
const {update} = require('./update');
const {updateAvatar} = require('./updateAvatar');
const {verify} = require('./verify');
const {verifyResend} = require('./verifyResend');

module.exports = {
  register,
  login,
  logout,
  current,
  update,
  updateAvatar,
  verify,
  verifyResend
};
