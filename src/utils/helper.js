const groupBy = (objArr, key) => {
  return objArr.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

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

module.exports = {
  groupBy,
  getMaxInObj
};
