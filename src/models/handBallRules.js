'use strict';

const handBallRules = {
  G: {
    name: 'Goalkeeper',
    initialPoint: 50,
    goalMade: 5,
    goalReceived: 2
  },
  F: {
    name: 'Field Player',
    initialPoint: 20,
    goalMade: 1,
    goalReceived: 1
  }
};

// Making the object freeze, so that we cannot modify the props later anywhere
Object.freeze(handBallRules);

module.exports = handBallRules;
