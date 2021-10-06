const fetch = require("node-fetch");

const { NETLIFY_ACCESS_TOKEN } = process.env;

exports.handler = function (event, context, callback) {
  console.log(NETLIFY_ACCESS_TOKEN);
};
