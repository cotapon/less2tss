var fs = require("fs"),
    path = require("path"),
    csstss = require("csstss"),
    less = require("less");

exports.compileString = function(source, file,callback) {
  //reset state
    var parser = new (less.Parser)({
    paths: [path.dirname(file)],
    filename: file
  });
  parser.parse(source, function (e,tree) {
    if (e) {
      callback(e);
    } else {
      var tss = csstss(tree.toCSS());
      callback(e,tss)
    }
  });
};

exports.compileFile = function(file, callback) {
  fs.readFile(file,{encoding: 'utf8'},  function(err, data) {
    exports.compileString(data.toString(), file, callback);
  });
}

exports.writeFile = function(source, target, callback) {
  exports.compileFile(source, function(err,data) {
    fs.writeFileSync(target,data);
    callback(err,target + " written");
  });
}
