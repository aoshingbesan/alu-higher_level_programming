#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const result = {};

request.get(url, (err, resp, body) => {
  if (err) {
    throw err;
