const PlayerFactory = require('./services2/PlayerFactory');
const files = require('./utils/files');

const getMVP = async folderPath => {
  // Read files from specific folder
  let matchesObj = await files.read(folderPath);

  if (Array.isArray(matchesObj)) {
    matchesObj.forEach(match => {
      if (Array.isArray(match.statistics)) {
        match.statistics.forEach(stat => {
          const player = PlayerFactory.generate(match.type, ...stat);
          console.log(player.getRating());
        });
      }
    });
  }
  return;
};

module.exports = {
  getMVP
};
