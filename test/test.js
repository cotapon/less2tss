var less2tss = require("../less2tss/less2tss"),
    fs   = require("fs"),
    assert = require("assert");

describe("variables test", function() {
  it("should parse", function(done) {
    less2tss.compileFile('./test/variables.less',function(err,data) {
      assert.equal(data, fs.readFileSync('./test/variables.tss').toString());
      done();
    });
  });
});
describe("mixins test", function() {
  it("should parse", function(done) {
    less2tss.compileFile('./test/mixin.less',function(err,data) {
      assert.equal(data, fs.readFileSync('./test/mixin.tss').toString());
      done();
    });
  });
});

describe("include test", function() {
  it("should parse", function(done) {
    less2tss.compileFile('./test/include.less',function(err,data) {
      assert.equal(data, fs.readFileSync('./test/include.tss').toString());
      done();
    });
  });
});

describe("combined test", function() {
  it("should parse", function(done) {
    less2tss.compileFile('./test/test.less',function(err,data) {
      assert.equal(data, fs.readFileSync('./test/test.tss').toString());
      done();
    });
  });
});

describe("many variables test", function() {
  it("should parse", function(done) {
    less2tss.compileFile('./test/manyVariables.less',function(err,data) {
      assert.equal(data, fs.readFileSync('./test/manyVariables.tss').toString());
      done();
    });
  });
});
