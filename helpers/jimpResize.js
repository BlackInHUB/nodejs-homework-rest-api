const Jimp = require('jimp');

const jimpResize = async (path) => {
  const image = await Jimp.read(path);
  await image.resize(250, 250);
  await image.writeAsync(path);
};

module.exports = {
  jimpResize
};
