var fs = require('fs');

function mkdir(dir, verbose=false) {
    if (verbose) {
        console.log(`Creating directory ${dir}`);
    }

    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true})
      }

    } catch (err) {
      console.error(err)
    }

}

module.exports = mkdir;