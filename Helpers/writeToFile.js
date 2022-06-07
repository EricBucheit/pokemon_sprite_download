const fs = require('fs');
function writeToFile(file, content, verbose=false) {
    try {
      const data = fs.writeFileSync(file, content)
      if (verbose) {
        console.log(`Wrote File: ${file}`);
      }
      //file written successfully
    } catch (err) {
      console.error(err)
    }
}

module.exports = writeToFile;