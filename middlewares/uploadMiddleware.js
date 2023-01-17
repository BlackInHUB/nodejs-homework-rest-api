const multer = require('multer');
const path = require('path');

const filesDir = path.resolve('./temp');

const multerConfig = multer.diskStorage({
  destination: filesDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const uploadMwr = multer({storage: multerConfig});

module.exports = {
  uploadMwr
};
