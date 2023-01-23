const {authValidation} = require('./authValidation');
const {contactValidation} = require('./contactsValidation');
const {uploadMwr} = require('./uploadMiddleware');
const {
  usersValidation,
  updateValidation,
  emailValidation} = require('./usersValidation');

module.exports = {
  authValidation,
  contactValidation,
  uploadMwr,
  usersValidation,
  updateValidation,
  emailValidation
};
