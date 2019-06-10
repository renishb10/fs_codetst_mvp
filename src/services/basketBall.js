'use strict';

const Rules = require('../models/basketBallRules');
const { getMaxInObj } = require('../utils/helper');

const bb = [];
const calculate = (stats, players) => {
  if (stats.length > 1) {
    for (let i = 1; i < stats.length; i++) {
      const args = stats[i].split(';');

      if (args.length !== 8) {
        throw new Error('Invalid format');
      }

      const bbObj = mapBasketballObject(args);
      bb.push(getPlayerRating(bbObj, players));
    }

    const winnerTeam = getWinnerTeam();
    console.log(winnerTeam);

    // Assign extra points for players of winning team
    reCalculatePlayersRating(winnerTeam, players);
  }
};

const getPlayerRating = (bbObj, players) => {
  const postionRule = Rules[bbObj.position];
  const playerRating =
    bbObj.score * postionRule.scoredPoint +
    bbObj.rebounds * postionRule.rebound +
    bbObj.assists * postionRule.assist;

  //Check for key and assign accordingly in Players Hashtable
  players[bbObj.nickName] =
    typeof players[bbObj.nickName] !== 'undefined'
      ? (players[bbObj.nickName] += playerRating)
      : playerRating;
  bbObj.rating = playerRating;
  return bbObj;
};

const getWinnerTeam = () => {
  const teamScore = {};
  bb.forEach(r => {
    teamScore[r.team] =
      typeof teamScore[r.team] === 'undefined' ? 0 : teamScore[r.team];
    teamScore[r.team] += r.rating;
  });

  // TODO: What happens if the match tie up?
  let maxTeam = getMaxInObj(teamScore);

  return maxTeam;
};

const reCalculatePlayersRating = (winnerTeam, players) => {
  bb.forEach(record => {
    if (record.team == winnerTeam.team) players[record.nickName] += 10;
  });
};

// TODO: Array to Objects if any?
const mapBasketballObject = args => {
  return {
    playerName: args[0],
    nickName: args[1],
    number: args[2],
    team: args[3],
    position: args[4],
    score: args[5],
    rebounds: args[6],
    assists: args[7],
    rating: 0
  };
};

module.exports = {
  calculate
};
