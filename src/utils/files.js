// Dependencies
const fs = require('fs');
const os = require('os');

//Custom Dependencies
const { formMatchObj } = require('./helpers');

// Reads all the files under the given directory
const read = async folder => {
  return new Promise(async (resolve, reject) => {
    const content = [];
    try {
      fs.readdirSync(folder).forEach(file => {
        var data = fs.readFileSync(folder + file, 'utf-8');
        if (!data) throw new Error('Error: Invalid Format - Empty file found!');

        content.push(data.split(os.EOL));
      });

      const parsedObjects = [];
      content.forEach(data => {
        parsedObjects.push(formMatchObj(data));
      });

      resolve(parsedObjects);
    } catch (error) {
      console.log(error.message);
      return reject(error);
    }
  });
};

// Returns filenames under the given directory (Async func)
// Promisified version
const readFolderAsync = folder => {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (err, files) => {
      if (err) return reject(err);
      return resolve(files);
    });
  });
};

// Returns file content (Async func)
// Promisified version
const readFileAsync = (folder, file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(folder + file, 'utf-8', (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

module.exports = {
  read
};
