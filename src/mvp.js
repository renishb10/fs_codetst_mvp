// Custom Dependencies
const PlayerFactory = require('./services/PlayerFactory');
const files = require('./utils/files');
const { getMaxInObj, createHashTable } = require('./utils/helpers');

// Core method that prints statistics and MVP.
const getMVP = async folderPath => {
  // Read files from specific folder
  let matchesObj = await files.read(folderPath);
  const allPlayers = [];

  // Loop and pass each player statistics to Factory class
  if (Array.isArray(matchesObj)) {
    matchesObj.forEach(match => {
      let aPlayerObj = {};
      const singleMatchResult = [];

      if (Array.isArray(match.statistics)) {
        match.statistics.forEach(stat => {
          aPlayerObj = PlayerFactory.generate(match.type, ...stat);
          singleMatchResult.push(aPlayerObj.getRating());
        });
      }

      // Based on match players result set, getting winner team & then bonus
      // We can implement a Higher Order Function here and Chain up
      // But for better readability implemented in this way
      const matchWithWonTeam = aPlayerObj.getWinnerTeam(singleMatchResult);
      const matchWithBonus = aPlayerObj.setBonusForWonTeam(
        matchWithWonTeam,
        matchWithWonTeam.winnerTeam.team
      );

      // Push it to the master array
      console.log(match.type);
      console.table(matchWithBonus);
      allPlayers.push(...matchWithBonus);
    });
  }

  // Group values using Hashing
  const consolidatedList = createHashTable(allPlayers, 'nickname', 'rating');
  console.log('Consolidated List');
  console.table(consolidatedList);

  // And the winner is....
  const MVP = getMaxInObj(consolidatedList, 'player', 'score');
  console.log('And the MVP is....');
  console.table(MVP);
  return;
};

module.exports = {
  getMVP
};
