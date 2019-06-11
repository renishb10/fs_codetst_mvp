// Dependencies
const { match } = require('../utils/constants');

class Player {
  constructor(playerName, nickname, playerNumber, team, position) {
    this.playerName = playerName;
    this.nickname = nickname;
    this.playerNumber = playerNumber;
    this.team = team;
    this.position = position;

    this.BONUSPOINT = match.BONUSPOINTS; // From config (eg: 10)
  }

  getRating(args) {
    throw new Error(
      'Error: Not Implemented, You are calling super class method'
    );
  }

  setBonusForWonTeam(playersList, team) {
    if (
      Array.isArray(playersList) &&
      (typeof team === 'string' || team instanceof String)
    ) {
      playersList.forEach(player => {
        if (player.team == team) players[player.nickName] += this.BONUSPOINT;
        return;
      });
    } else {
      throw new Error('Error: setBonusForWonTeam - Invalid data');
    }
  }
}

module.exports = Player;
