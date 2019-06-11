// Call getMVP (Param: Folder path, that holds match files)
//const getMVP = require('./src/app');
const app = require('./src/mvp');

console.log(
  '----------------------------------------------------------------------------------'
);
console.log(
  `Filestage - BioShape Championship - MVP (STARTED - ${new Date().toUTCString()})`
);
console.log(
  '----------------------------------------------------------------------------------'
);

//getMVP.init('./src/data/');
app.getMVP('./src/data/');
