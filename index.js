// Call getMVP (Param: Folder path, that holds match files)
const getMVP = require('./src/app');

console.log(
  '----------------------------------------------------------------------------------'
);
console.log(
  `Filestage - BioShape Championship - MVP (STARTED - ${new Date().toUTCString()})`
);
console.log(
  '----------------------------------------------------------------------------------'
);

getMVP.init('./src/data/');
