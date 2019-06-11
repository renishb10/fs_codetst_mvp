'use strict';

const Player = require('./Player');
const Rules = require('../models/basketBallRules');

class BasketballPlayer extends Player {
  constructor(
    playerName,
    nickname,
    playerNumber,
    team,
    position,
    score,
    rebounds,
    assists
  ) {
    super(playerName, nickname, playerNumber, team, position);

    this.score = score;
    this.rebounds = rebounds;
    this.assists = assists;
  }

  getRating() {
    const postionRule = Rules[this.position];
    const playerRating =
      this.score * postionRule.scoredPoint +
      this.rebounds * postionRule.rebound +
      this.assists * postionRule.assist;

    return playerRating;
  }
}

module.exports = BasketballPlayer;
