const sgm = require('@sendgrid/mail');

const {SG_KEY} = process.env;

sgm.setApiKey(SG_KEY);

const sendEmail = async (data) => {
  const email = {...data, from: 'andrij.kulyk@gmail.com'};

  await sgm.send(email);

  return true;
};

module.exports = {
  sendEmail
};
