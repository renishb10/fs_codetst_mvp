const files = require('./utils/files');

const init = async folderPath => {
  // Reads
  const stats = await files.read(folderPath);
  if (stats && stats.length > 0) {
    stats.forEach(stat => {
      const matchType = stat[0];
      switch (matchType) {
        case 'BASKETBALL':
          console.log(1, matchType);
          console.log(stat);
          break;
        case 'HANDBALL':
          console.log(2, matchType);
          console.log(stat);
          break;
        default:
          console.log(`${matchType}, not supported`);
          break;
      }
    });
  }
};

module.exports = {
  init
};
