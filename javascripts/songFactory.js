/*jshint esversion: 6 */


const $ = require('jquery');
let firebaseUrl = "https://terrible-techno.firebaseio.com";

module.exports.storeSettings = (songSettings) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${firebaseUrl}/settings.json`,   
            method: "POST",
            data: JSON.stringify(songSettings)
        }).done((data) => {
            resolve(data);
    
        }).fail((error) => {
            reject(error);
        });
    });
};
module.exports.getAllSettings = (uid) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${firebaseUrl}/settings.json?orderBy="uid"&equalTo="${uid}"`,   
            method: "GET"
        }).done((data) => {
            resolve(data);    
        }).fail((error) => {
            reject(error);
        });
    });
};
module.exports.getSetting = (fbId) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${firebaseUrl}/settings/${fbId}.json`,   
            method: "GET"
        }).done((data) => {
            resolve(data);    
        }).fail((error) => {
            reject(error);
        });
    });
};
module.exports.deleteSetting = (fbId) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${firebaseUrl}/settings/${fbId}.json`,   
            method: "DELETE"
        }).done((data) => {
            resolve(data);    
        }).fail((error) => {
            reject(error);
        });
    });
};