const files = require('./utils/files');
const basketball = require('./services/basketBall');
const handball = require('./services/handBall');
const { getMaxInObj } = require('./utils/helper');

const init = async folderPath => {
  let players = {};
  // Reads
  const stats = await files.read(folderPath);
  if (stats && stats.length > 0) {
    stats.forEach(stat => {
      const matchType = stat[0];
      switch (matchType) {
        case 'BASKETBALL':
          console.log(1, matchType);
          basketball.calculate(stat, players);
          break;
        case 'HANDBALL':
          console.log(2, matchType);
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
