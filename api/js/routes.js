/**
 * routes.js
 * Created by dcorns on 12/30/14.
 */
'use strict';
var express = require('express');
var fs = require('fs');
module.exports = function(server){
  //server.app = express server, server.dir = server root
  server.app.use(express.static(server.dir + (process.env.STATIC_DIR || '/build')));
  server.app.get('/',function(req, res){
    res.status(200);
    res.sendFile(server.dir + '/build/index.html');
  });

  server.app.get('/newPictures', function(req, res){
    fs.readdir('Pictures/new', function(err, data){
      if(err){
        res.status(500);
        res.send();
      }
      var result = {fileNames: data};
      res.status(200);
      res.json(result);
      res.send();
    });

  });

  server.app.get('/newAudio', function(req, res){
    res.status(200);
    res.send();
  });

  server.app.get('/newVideo', function(req, res){
    res.status(200);
    res.send();
  });
};