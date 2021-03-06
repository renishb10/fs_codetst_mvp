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

// Creates and returns HashTable (Simple implementation)
const createHashTable = (objArr, _key, _valueKey) => {
  const hash = {};
  if (Array.isArray(objArr) && _key && _valueKey) {
    objArr.forEach(o => {
      if (hash[o[_key]]) hash[o[_key]] += o[_valueKey];
      else hash[o[_key]] = o[_valueKey];
    });
  }

  return hash;
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

// TBD - Validation method, that validates input data
const validateMatchObj = matchesObj => {
  // TODO - Validate match type
  // TODO - Validate necessary arguments count
  // TODO - Validate arugments type as well
  //if (!common.SUPPORTEDGAMES.includes(inputData[0].toUpperCase())) {
  //}
};

module.exports = {
  formMatchObj,
  groupBy,
  getMaxInObj,
  validateMatchObj,
  createHashTable
};
