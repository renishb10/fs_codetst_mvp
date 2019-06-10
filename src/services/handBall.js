'use strict';

const Rules = require('../models/handBallRules');
const { getMaxInObj } = require('../utils/helper');

const hb = [];
const calculate = (stats, players) => {
  if (stats.length > 1) {
    for (let i = 1; i < stats.length; i++) {
      const args = stats[i].split(';');

      if (args.length !== 7) {
        throw new Error('Invalid format');
      }

      const hbObj = mapHandballObject(args);
      hb.push(getPlayerRating(hbObj, players));
    }

    const winnerTeam = getWinnerTeam();
    console.log(winnerTeam);

    // Assign extra points for players of winning team
    reCalculatePlayersRating(winnerTeam, players);
  }
};

const getPlayerRating = (hbObj, players) => {
  const postionRule = Rules[hbObj.position];
  const playerRating =
    postionRule.initialPoint +
    hbObj.goalsMade * postionRule.goalMade -
    hbObj.goalsReceived * postionRule.goalReceived;

  players[hbObj.nickName] =
    typeof players[hbObj.nickName] !== 'undefined'
      ? (players[hbObj.nickName] += playerRating)
      : playerRating;

  hbObj.rating = playerRating;

  return hbObj;
};

const getWinnerTeam = () => {
  const teamScore = {};
  hb.forEach(r => {
    teamScore[r.team] =
      typeof teamScore[r.team] === 'undefined' ? 0 : teamScore[r.team];
    teamScore[r.team] += r.rating;
  });

  // TODO: What happens if the match tie up?
  let maxTeam = getMaxInObj(teamScore);

  return maxTeam;
};

const reCalculatePlayersRating = (winnerTeam, players) => {
  hb.forEach(record => {
    if (record.team == winnerTeam.team) players[record.nickName] += 10;
  });
};

// TODO: Array to Objects if any?
const mapHandballObject = args => {
  return {
    playerName: args[0],
    nickName: args[1],
    number: args[2],
    team: args[3],
    position: args[4],
    goalsMade: args[5],
    goalsReceived: args[6],
    rating: 0
  };
};

module.exports = {
  calculate
};
