var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");


describe("Testing /movie/my Method", function(err){
it("should respond", function(done){
url
    .post("/movie/favmovie")
    .send({'Title' :'nanban2','Year':'2012','imdbID':'tt2180477'})
    .expect(200)
    .end(function(err,res){
      res.text.should.be.equal("movie added");
      done();
    });

});
});

describe("Testing /movie/fav Method ", function(err){
it("should respond", function(done){
url
    .get("/movie/Fav")
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err,res){
      var myObj = JSON.parse(res.text);
      console.log(myObj);
      myObj[0].Title.should.be.equal("nanban2");
      done();
    });

});
});
describe("Testing /movie/update Method ", function(err){
it("should resopnd", function(done){
url
    .put("/movie/update")
    .expect(200)
    .end(function(err,res){
      res.text.should.be.equal("movie updated");
      done();
    });
});
});

describe("Testing /movie/delet Method ", function(err){
it("should resopnd", function(done){
  url
      .delete("/movie/unfav")
      .expect(200)
      .end(function(err,res){
        res.text.should.be.equal("movie deleted");
        done();
      });
});
});
