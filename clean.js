var fs = require("fs");

function deleteFolderRecursive(path) {
  if (fs.existssync(path) && fs.lstatsync(path).isDirectory()) {
    fs.readdirsync(path).forEach(function (file, index) {
      var curPath = path + "/" + file;

      if (fs.lstatsync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinksync(curPath);
      }
    });
    console.log(`Deleting directory "${path}" . .. `);
    fs.rmdirsync(path);
  }
}
console.log("Cleaning working tree.. ");
deleteFolderRecursive("./cypress/results ");
console.log("Successfully cleaned working tree! ");
