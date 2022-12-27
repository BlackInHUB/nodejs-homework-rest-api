const services = require('../../services/contacts');

const get = async (req, res) => {
  const owner = req.user._id;
  const {page = 1, limit = 10} = req.query;
  const skip = (page - 1) * limit;
  const {favorite} = req.query;

  const result = await services.get(owner, skip, limit, favorite);
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      contacts: result,
    },
  });
};

module.exports = {get};
