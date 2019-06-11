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

module.exports = handBallRules;
