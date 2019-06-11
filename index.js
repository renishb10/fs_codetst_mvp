// Call getMVP (Param: Folder path, that holds match files)
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

// Initializing the app here
// We can also get it as command line arguments if needed
app
  .getMVP('./src/data/')
  .then(() => {
    console.log(
      '----------------------------------------------------------------------------------'
    );
    console.log(`End: Thank you`);
    console.log(
      '----------------------------------------------------------------------------------'
    );
  })
  .catch(e => console.log('Error: Something went wrong', e.message));
