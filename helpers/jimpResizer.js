const Jimp = require('jimp');

const jimpResizer = async (path, a, b) => {
  const image = await Jimp.read(path);
  await image.resize(a, b);
  await image.writeAsync(path);
};

module.exports = {
  jimpResizer
};
