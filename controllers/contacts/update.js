const {httpError} = require('../../helpers/errors');
const services = require('../../services/contacts');

const update = async (req, res) => {
  const {contactId} = req.params;
  const {body} = req;
  const result = await services.update(contactId, body);

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

module.exports = {update};
