'use strict';

exports.parser = function(req, res, next) {
    if (req.get('Content-Type') === 'application/csp-report') {
        var data='';
        req.setEncoding('utf8');
        req.on('data', function(chunk) {
           data += chunk;
        });

        req.on('end', function() {
            req.report = data;
            next();
        });
    } else {
        next();
    }
};

exports.classify = function() {
  //return inline, evil, mixed-content, blocked-host etc
};

exports.sanitize = function() {
  // query strings, paths, etc
};
