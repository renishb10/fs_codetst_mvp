// Dependencies
const expect = require('chai').expect;

//////////////////////////////////////////////////////////
// Basketball object unit testing
//////////////////////////////////////////////////////////

// Custom Dependencies
const BasketBall = require('../src/services/BasketballPlayer');

describe('BasketBall', () => {
  let players = {};
  let sampleRecord = [];
  let basketBall = {};
  before(() => {
    sampleRecord = ['BASKETBALL', 'player 1;nick1;4;Team A;G;10;2;7'];
    basketBall = new BasketBall(...sampleRecord[1].split(';'));
  });

  it('should calculate player score (BasketBall)', async () => {
    const player = basketBall.getRating();
    expect(player).to.have.property('nickname');
    expect(player).to.have.property('rating');
    expect(player).to.have.property('score');
    expect(player).to.have.property('rebounds');
    expect(player).to.have.property('assists');
    expect(player).to.have.property('team');
    expect(player).to.have.property('position');
    expect(player.rating).to.equal(33);
  });
});

//////////////////////////////////////////////////////////
// Handball object unit testing
//////////////////////////////////////////////////////////

// Custom Dependencies
const HandBall = require('../src/services/HandballPlayer');

describe('HandBall', () => {
  let players = {};
  let sampleRecord = [];
  before(() => {
    sampleRecord = ['HANDBALL', 'player 1;nick1;4;Team A;G;0;20'];
    handBall = new HandBall(...sampleRecord[1].split(';'));
  });

  it('should calculate player score (HandBall)', async () => {
    const player = handBall.getRating();
    expect(player).to.have.property('nickname');
    expect(player).to.have.property('rating');
    expect(player).to.have.property('goalsMade');
    expect(player).to.have.property('goalsReceived');
    expect(player).to.have.property('playerName');
    expect(player).to.have.property('team');
    expect(player).to.have.property('position');
    expect(player.rating).to.equal(10);
  });
});

//////////////////////////////////////////////////////////
// Get MVP object unit testing
//////////////////////////////////////////////////////////

// YTD
