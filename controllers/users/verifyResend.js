const {User} = require('../../models/usersModel');
const {sendEmail} = require('../../helpers/sendEmail');
const {httpError} = require('../../helpers/errors');

const {BASE_URL} = process.env;

const verifyResend = async (req, res) => {
  const {email} = req.body;

  const user = await User.findOne({email});

  if (!user) {
    throw httpError(404, 'User not found, or invalid verification link');
  };

  if (user.verify) {
    throw httpError(400, 'Verification has already been passed');
  };

  const verifyEmail = {
    to: email,
    subject: 'Resend email verification',
    html: `<a target="_blank" 
    href="${BASE_URL}/api/users/verify/${user.verificationToken}">
    Click to verify your email</a>`
  };

  await sendEmail(verifyEmail);

  res.status(200).json({
    message: 'Verification has already been passed'
  });
};

module.exports = {
  verifyResend
};
