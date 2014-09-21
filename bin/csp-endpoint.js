#!/usr/bin/env node

'use strict';

var endpoint = require('../index');
var express = require('express');
var app = express();
app.use(endpoint.parser);

var opts = require('nomnom')
  .option('time', {
    abbr: 't',
    default: true,
    help: 'Include time in the reports'
  })
  .option('headers', {
    abbr: 'h',
    default: true,
    help: 'Include client headers in the reports'
  })
  .option('ip', {
    abbr: 'i',
    default: true,
    help: 'include client ip address in the reports',
  })

  .option('console', {
    abbr: 'c',
    default: true,
    help: 'Print reports to the console'
  })

  .option('path', {
    default: '/',
    help: 'The path of the endpoint to collect reports on'
  })
  .option('port', {
    default: '3000',
    help: 'The port of the endpoint to collect reports on'
  })
  .parse();

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

app.listen(opts.port);
