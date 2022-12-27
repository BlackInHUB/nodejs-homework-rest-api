const {httpError} = require('../../helpers/errors');
const services = require('../../services/contacts');

const updateStatus = async (req, res) => {
  const {contactId} = req.params;
  const {favorite} = req.body;

  const result = await services.update(contactId, {favorite});

  if (!result) {
    throw httpError(404, `Not found contact with id: ${contactId}`);
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      updated: result,
    },
  });
};

module.exports = {updateStatus};

