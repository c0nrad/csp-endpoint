# csp-endpoint

Endpoint for collecting CSP violation reports.

## Usage

```json
$ csp-endpoint --port 3000 --path '/'
{"csp-report":{"document-uri":"https://catfactspammer.com/","referrer":"",...}
{"csp-report":{"document-uri":"https://catfactspammer.com/","referrer":"",...}
{"csp-report":{"document-uri":"https://catfactspammer.com/","referrer":"",...}
```

Usage:
```
Usage: node csp-endpoint.js [options]

Options:
   -t, --time      Include time in the reports  [true]
   -h, --headers   Include client headers in the reports  [true]
   -i, --ip        include client ip address in the reports  [true]
   -c, --console   Print reports to the console  [true]
   --path          The path of the endpoint to collect reports on  [/]
   --port          The port of the endpoint to collect reports on  [3000]

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

- mongodb support
- classification
- sanitization

## Contact
Stuart Larsen c0nrad.io <c0nrad@c0nrad.io>
