const expect = require('chai').expect;

// Custom Dependencies
const helper = require('../src/utils/helper');

describe('Helper Methods', () => {
  let testObj = '';
  before(() => {
    testObj = {
      A: 120,
      B: 10,
      C: 320,
      D: 150,
      E: 140,
      F: 130,
      G: 500,
      H: 20
    };
  });

  it('should get the key that has max value in obj', async () => {
    const data = await helper.getMaxInObj(testObj, 'team', 'score');
    expect(data).to.not.equal(null);
    expect(data).to.have.property('team');
    expect(data).to.have.property('score');
    expect(data.team).to.equal('G');
  });
});
