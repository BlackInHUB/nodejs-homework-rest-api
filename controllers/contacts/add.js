const services = require('../../services/contacts');

const add = async (req, res) => {
  const {body} = req;
  const owner = req.user._id;
  const result = await services.add({...body, owner});
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      newContact: result,
    },
  });
};

module.exports = {add};
