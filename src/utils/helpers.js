// Dependencies
const { common } = require('../utils/constants');

// Gets the key in an object that holds the maximum value
// Caution: Tested with numbers (Didnt handle type validation)
const getMaxInObj = (obj, _key = 'key', _val = 'value') => {
  let max = Object.keys(obj)[0];
  for (let key in obj) {
    if (obj[key] > obj[max]) {
      max = key;
    }
  }

  return {
    [_key]: max,
    [_val]: obj[max]
  };
};

// Custom function for grouping objects in given key (not used)
const groupBy = (objArr, key) => {
  return objArr.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

// Forms a Matches Object
const formMatchObj = inputData => {
  if (!Array.isArray(inputData) && inputData.length < 2)
    throw new Error('Error: Invalid file content');

  const type = inputData[0];
  const statistics = [];
  try {
    for (let i = 1; i < inputData.length; i++) {
      statistics.push(inputData[i].split(';'));
    }
  } catch (error) {
    throw new Error('Error: Problem in parsing input');
  }

  return {
    type,
    statistics
  };
};

const validateMatchObj = matchesObj => {
  //if (!common.SUPPORTEDGAMES.includes(inputData[0].toUpperCase())) {
  //}
};

module.exports = {
  formMatchObj,
  groupBy,
  getMaxInObj,
  validateMatchObj
};
