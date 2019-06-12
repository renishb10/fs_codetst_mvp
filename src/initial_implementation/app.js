const files = require('../utils/files');
const basketball = require('./basketBall');
const handball = require('./handBall');
const { getMaxInObj } = require('../utils/helpers');

const init = async folderPath => {
  let players = {};
  // Reads
  const stats = await files.read(folderPath);
  if (stats && stats.length > 0) {
    stats.forEach(stat => {
      const matchType = stat[0];
      switch (matchType) {
        case 'BASKETBALL':
          basketball.calculate(stat, players);
          break;
        case 'HANDBALL':
          handball.calculate(stat, players);
          break;
        default:
          console.log(`${matchType}, not supported`);
          break;
      }
    });
  }
  console.log(players);
  console.log(getMaxInObj(players, 'player', 'rating'));
};

module.exports = {
  init
};
