/*jshint esversion: 6 */

const firebase = require("./config/fbConfig");

module.exports.logIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(provider);
};

module.exports.logOut = () => {
  return firebase.auth().signOut();
};