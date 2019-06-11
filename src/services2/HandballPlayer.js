'use strict';

const Player = require('./Player');
const Rules = require('../models/handBallRules');

class HandballPlayer extends Player {
  constructor(
    playerName,
    nickname,
    playerNumber,
    team,
    position,
    goalsMade,
    goalsReceived
  ) {
    super(playerName, nickname, playerNumber, team, position);

    this.goalsMade = goalsMade;
    this.goalsReceived = goalsReceived;
  }

  getRating() {
    const postionRule = Rules[this.position];
    const playerRating =
      postionRule.initialPoint +
      this.goalsMade * postionRule.goalMade -
      this.goalsReceived * postionRule.goalReceived;

    return playerRating;
  }
}

module.exports = HandballPlayer;
