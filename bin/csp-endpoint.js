#!/usr/bin/env node

'use strict';

var endpoint = require('../index');
var express = require('express');
var app = express();
app.use(endpoint.parser);

var opts = require('nomnom')
  .option('path', {
    default: '/',
    help: 'The path of the endpoint to collect reports on'
  })
  .option('port', {
    default: '3000',
    help: 'The port of the endpoint to collect reports on'
  }).parse();

app.post(opts.path, function(req, res){
  var report = JSON.parse(req.report);

  if (opts.time) {
    report.ts = new Date();
  }

  if (opts.headers) {
    report.headers = JSON.stringify(req.headers);
  }

  if (opts.ip) {
    report.ip = req.ip;
  }

  console.log(JSON.stringify(report));
  res.send('Thanks!');
});

console.log('Listening on http://host:' + opts.port + opts.path);
app.listen(opts.port);
