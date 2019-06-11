const expect = require('chai').expect;

// Custom Dependencies
const files = require('../src/utils/files');

describe('Read Files', () => {
  it('should be able to read files', async () => {
    const data = await files.read('./src/data/');
    expect(data).to.not.be.null;
  });

  it('should be throw error if invalid file', async () => {
    try {
      const data = await files.read('./test/data/');
    } catch (error) {
      expect(error.message).to.equal('Invalid Format: Empty file found!');
    }
  });
});
