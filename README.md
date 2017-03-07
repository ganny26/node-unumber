# node-unumber [![Build Status](https://travis-ci.org/ganny26/node-unumber.svg?branch=master)](https://travis-ci.org/ganny26/node-unumber) [![Coverage Status](https://coveralls.io/repos/github/ganny26/node-unumber/badge.svg?branch=master)](https://coveralls.io/github/ganny26/node-unumber?branch=master)

Simple, fast generation of random number

Features:

* Generate random unique pattern
* Runs in node.js and browsers


## Quickstart - CommonJS (Recommended)

```shell
npm install node-unumber
```

```javascript
// Generate a 5 digit pattern (random)
const cid = require('c1');
cid.generatePattern(10,'0');  //6545633436
cid.generatePattern(20,"a"); //ffeckzhgastisvtzuvcc
cid.generatePattern(20,"A"); //TZBUJIZNSSSBDSLBXRHI

```
