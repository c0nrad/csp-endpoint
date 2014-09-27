# csp-endpoint

Endpoint for collecting CSP violation reports.

## Usage

```
$ csp-endpoint --port 3000 --path '/'
Listening on http://host:3000/
{"csp-report":{"document-uri":"https://catfactspammer.com/","referrer":"",...}
{"csp-report":{"document-uri":"https://catfactspammer.com/","referrer":"",...}
{"csp-report":{"document-uri":"https://catfactspammer.com/","referrer":"",...}
```

Options:
```
➜  csp-endpoint git:(master) ✗ csp-endpoint --help

Usage: node csp-endpoint.js [options]

Options:
   --path   The path of the endpoint to collect reports on  [/]
   --port   The port of the endpoint to collect reports on  [3000]

Documentation can be found at Https://github.com/c0nrad/csp-endpoint
```

## Installation

```
npm install -g csp-endpoint
```

## Express middleware

Express doesn't parse applicaiton/csp-report, so to help express use this middleware:
```javascript
var csp = require('csp-endpoint');
var express = require('express');
var app = express();
app.use(csp.parser);
...
```

## Future
- classification

## Contact
Stuart Larsen c0nrad.io <c0nrad@c0nrad.io>
