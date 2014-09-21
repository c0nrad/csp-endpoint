# csp-endpoint

Endpoint for collecting CSP violation reports.

## Usage

```
$ csp-endpoint
[+] CSP-endppoint listening on port 7777
{ ts: new Date(), report-data: { document-uri: "", ..... }}
{ ts...}
```

```
$ csp-endpoint --help

Usage: csp-endpoint [options] [transports?]

Options:
  -t, --time    include timestamp
  -h, --headers include client headers
  -i, --ip      include client ip address

Transports:
  --file <file> write report to file
  --console     print report to console
  --mongodb     store entry into mongodb

Documentation can be found at Https://github.com/c0nrad/csp-endpoint
```

## Installation

```
npm install -g csp-endpoint
```

## Express middleware


## Contact
Stuart Larsen c0nrad.io <c0nrad@c0nrad.io>
