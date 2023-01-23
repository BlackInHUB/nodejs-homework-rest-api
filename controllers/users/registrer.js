const {User} = require('../../models/usersModel');
const services = require('../../services/users');
const {httpError} = require('../../helpers/errors');
const gravatar = require('gravatar');
const {sendEmail} = require('../../helpers/sendEmail');
const {v4: uuid} = require('uuid');

const {BASE_URL} = process.env;

const register = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  const user = await User.findOne({email});

  if (user) {
    throw httpError(409, 'Email in use');
  };

  const verificationToken = uuid();

  const avatarURL = gravatar.url(email);

  const result = await services.register(
      email,
      password,
      avatarURL,
      verificationToken
  );

  const verifyEmail = {
    to: email,
    subject: 'Email verification',
    html: `<a target="_blank" 
    href="${BASE_URL}/api/users/verify/${verificationToken}">
    Click to verify your email</a>`
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      email: result.email,
      subscription: result.subscription
    }
  });
};

module.exports = {
  register
};
