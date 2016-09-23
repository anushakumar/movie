var express = require('express');
var app = express.Router();
var Movie2=require('../model/movie');
/* GET home page. */

app.post('/favmovie',function(req,res)
{
  console.log(req.body);
  var Mov=new Movie2();
  Mov.Title=req.body.Title;
  Mov.Year=req.body.Year;
  Mov.Poster=req.body.Poster;
  Mov.imdbID=req.body.imdbID;
  Mov.save(function(err){
    if(err){
      res.send(err);
    }
    else
      {
        res.send('movie added');

      }

  });
});

app.get('/Fav',function(req,res,next)
{
  Movie2.find({},function(err,docs){
    res.json(docs);
  });
});


app.delete('/unfav',function(req,res,next)
{
Movie2.findOneAndRemove({ imdbID: req.body.imdbID }, function(err) {
  if(err){
    res.send(err);
  }
  else
    {
      res.send('movie deleted');

    }

});
});


app.put('/update',function(req,res,next)
{
  console.log('Inside put');
console.log(req.body);
Movie2.findOneAndUpdate({imdbID: req.body.imdbID }, { Title: req.body.t}, function(err, user) {
  if(err){
    res.send(err);
  }
  else
    {
      res.send('movie updated');

    }

});
});


module.exports = app;
