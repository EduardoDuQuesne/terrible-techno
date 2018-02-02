/*jshint esversion: 6 */
const fbCreds = require("./fbCreds");

const firebase = require("firebase/app");
require("firebase/auth");

const config = {
  apiKey: fbCreds.apiKey,
  authDomain: fbCreds.authDomain
};

firebase.initializeApp(config);

module.exports = firebase;