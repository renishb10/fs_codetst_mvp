const { match } = require('../utils/constants');
const BasketballPlayer = require('../services2/BasketballPlayer');
const HandballPlayer = require('../services2/HandballPlayer');

class PlayerFactory {
  constructor() {}

  static generate(type, ...params) {
    try {
      switch (type.toUpperCase()) {
        case match.basketball.NAME:
          return new BasketballPlayer(...params);

        case match.handball.NAME:
          return new HandballPlayer(...params);

        default:
          throw new Error(
            `Error: PlayerFactory - couldn't create class for ${type}`
          );
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PlayerFactory;
