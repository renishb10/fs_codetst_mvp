'use strict';

const basketBallRules = {
  G: {
    name: 'Guard',
    scoredPoint: 2,
    rebound: 3,
    assist: 1
  },
  F: {
    name: 'Forward',
    scoredPoint: 2,
    rebound: 2,
    assist: 2
  },
  C: {
    name: 'Center',
    scoredPoint: 2,
    rebound: 1,
    assist: 3
  }
};

// Making the object freeze, so that we cannot modify the props later anywhere
Object.freeze(basketBallRules);

module.exports = basketBallRules;
