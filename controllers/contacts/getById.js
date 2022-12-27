const {httpError} = require('../../helpers/errors');
const services = require('../../services/contacts');

const getById = async (req, res) => {
  const {contactId} = req.params;
  const result = await services.getById(contactId);

  if (!result) {
    throw httpError(404, `Not found contact with id: ${contactId}`);
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      contact: result,
    },
  });
};

module.exports = {getById};
