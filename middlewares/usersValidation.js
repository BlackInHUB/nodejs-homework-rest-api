const Joi = require('joi');

const usersValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    subscription: Joi.string().valid('starter', 'pro', 'business')
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({
      message: validationResult.error.details[0].message});
  }
  next();
};

const updateValidation = (req, res, next) => {
  const schema = Joi.object({
    subscription: Joi.string()
        .valid('starter', 'pro', 'business')
        .required()
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({
      message: validationResult.error.details[0].message});
  }
  next();
};

const emailValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
        .email()
        .required()
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({
      message: validationResult.error.details[0].message});
  }
  next();
};

module.exports = {
  usersValidation,
  updateValidation,
  emailValidation
};

