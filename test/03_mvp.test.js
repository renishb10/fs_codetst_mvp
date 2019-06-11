const expect = require('chai').expect;

//////////////////////////////////////////////////////////
// Basketball object unit testing
//////////////////////////////////////////////////////////

// Custom Dependencies
const basketBall = require('../src/services/basketBall');

describe('BasketBall', () => {
  let players = {};
  let sampleRecord = [];
  before(() => {
    sampleRecord = [
      'BASKETBALL',
      'player 1;nick1;4;Team A;G;10;2;7',
      'player 2;nick2;8;Team A;F;0;10;0',
      'player 3;nick3;15;Team A;C;15;10;4',
      'player 4;nick4;16;Team B;G;20;0;0',
      'player 5;nick5;23;Team B;F;4;7;7',
      'player 6;nick6;42;Team B;C;8;10;0'
    ];
  });

  it('should calculate player score (BasketBall)', async () => {
    await basketBall.calculate(sampleRecord, players);
    expect(players).to.have.property('nick1');
    expect(players).to.have.property('nick2');
    expect(players).to.have.property('nick3');
    expect(players).to.have.property('nick4');
    expect(players).to.have.property('nick5');
    expect(players).to.have.property('nick6');
    expect(players.nick3).to.eql(62);
    console.log('BB', players);
  });
});

//////////////////////////////////////////////////////////
// Handball object unit testing
//////////////////////////////////////////////////////////

// Custom Dependencies
const handBall = require('../src/services/handBall');

describe('HandBall', () => {
  let players = {};
  let sampleRecord = [];
  before(() => {
    sampleRecord = [
      'HANDBALL',
      'player 1;nick1;4;Team A;G;0;20',
      'player 2;nick2;8;Team A;F;15;20',
      'player 3;nick3;15;Team A;F;10;20',
      'player 4;nick4;16;Team B;G;1;25',
      'player 5;nick5;23;Team B;F;12;25',
      'player 6;nick6;42;Team B;F;8;25'
    ];
  });

  it('should calculate player score (HandBall)', async () => {
    await handBall.calculate(sampleRecord, players);
    expect(players).to.have.property('nick1');
    expect(players).to.have.property('nick2');
    expect(players).to.have.property('nick3');
    expect(players).to.have.property('nick4');
    expect(players).to.have.property('nick5');
    expect(players).to.have.property('nick6');
    expect(players.nick3).to.equal(20);
    console.log('HB', players);
  });
});

//////////////////////////////////////////////////////////
// Get MVP object unit testing
//////////////////////////////////////////////////////////

// Custom Dependencies
const helper = require('../src/utils/helper');

// TODO: Get the players object as a resultant of above matches as of now hardcoding it
describe('Get MVP', () => {
  it('should pick mvp from players (MVP)', async () => {
    let players = {
      nick1: 63,
      nick2: 55,
      nick3: 82,
      nick4: 45,
      nick5: 43,
      nick6: 29
    };
    const data = await helper.getMaxInObj(players, 'player', 'rating');
    expect(data).to.not.equal(null);
    expect(data).to.have.property('player');
    expect(data).to.have.property('rating');
    expect(data.player).to.equal('nick3');
    expect(data.rating).to.equal(82);
  });
});
