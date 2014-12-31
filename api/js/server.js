/**
 * Created by dcorns on 12/28/14.
 */
'use strict';
module.exports = function(page, useport, rt){
  var express = require('express');
  var bodyparser = require('body-parser');
  var http = require('http');
  var app = express();
  app.use(bodyparser.json());
  var serv = {app: app, dir:rt};
  var routes = require('./routes')(serv);

  var server = http.createServer(app);
  server.listen(process.env.PORT || useport, function () {
    console.log('server running on port ' + useport);
  });
};
