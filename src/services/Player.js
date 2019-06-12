// Dependencies
const { match } = require('../utils/constants');
const { getMaxInObj } = require('../utils/helpers');

// Base class
class Player {
  constructor(playerName, nickname, playerNumber, team, position) {
    this.playerName = playerName;
    this.nickname = nickname;
    this.playerNumber = playerNumber;
    this.team = team;
    this.position = position;

    this.BONUSPOINT = 10; // From config (eg: 10)
  }

  getRating(args) {
    throw new Error(
      'Error: Not Implemented, You are calling super class method'
    );
  }

  getWinnerTeam(playerList) {
    const teamScore = {};
    playerList.forEach(r => {
      teamScore[r.team] =
        typeof teamScore[r.team] === 'undefined' ? 0 : teamScore[r.team];
      teamScore[r.team] += r.rating;
    });

    // TODO: What happens if the match tie up?
    let maxTeam = getMaxInObj(teamScore, 'team', 'score');

    //return Object.setPrototypeOf(playerList, maxTeam);
    playerList.winnerTeam = maxTeam;
    return playerList;
  }

  setBonusForWonTeam(playersList, team) {
    if (
      Array.isArray(playersList) &&
      (typeof team === 'string' || team instanceof String)
    ) {
      playersList.forEach(player => {
        if (player.team == team) player.rating += this.BONUSPOINT;
      });
    } else {
      throw new Error('Error: setBonusForWonTeam - Invalid data');
    }

    return playersList;
  }

  mapPlayerObject(rating, parentObj) {
    //delete parentObj['BONUSPOINT'];
    return Object.assign({ rating }, parentObj);
  }
}

module.exports = Player;
