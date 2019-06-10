const fs = require('fs');
const os = require('os');

const read = async folder => {
  return new Promise((resolve, reject) => {
    const content = [];
    try {
      fs.readdirSync(folder).forEach(file => {
        var data = fs.readFileSync(folder + file, 'utf-8');
        content.push(data.split(os.EOL));
      });
      resolve(content);
    } catch (error) {
      console.log(error.message);
      return reject(error);
    }
  });
};

const readFolderAsync = folder => {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (err, files) => {
      if (err) return reject(err);
      return resolve(files);
    });
  });
};

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
