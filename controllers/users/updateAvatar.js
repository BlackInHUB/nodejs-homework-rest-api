const path = require('path');
const fs = require('fs/promises');
const {jimpResize} = require('../../helpers/jimpResize');
const services = require('../../services/users');

const avatarsDir = path.resolve('./public/avatars');

const updateAvatar = async (req, res) => {
  const {path: tempDir, originalname} = req.file;
  const {_id} = req.user;
  const newFilename = `${_id}_${originalname}`;
  const uploadDir = path.join(avatarsDir, newFilename);
  const avatarURL = path.join('avatars', newFilename);

  await jimpResize(tempDir);

  await fs.rename(tempDir, uploadDir);

  await services.update(_id, {avatarURL});

  res.status(200).json({
    status: 'avatar updated successfully',
    code: 200,
    data: {
      avatarURL
    }
  });
};

module.exports = {
  updateAvatar
};
