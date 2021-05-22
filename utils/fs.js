const fs = require('fs');

const exists = (path) => {
  try {
    const isExisted = fs.existsSync(path);
    return isExisted; 
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  exists
};

