/*jshint esversion: 6 */

const $ = require('jquery');

module.exports.displaySettings = (settings) => {
    $('#user-settings').empty();
    let fbKeys = Object.keys(settings);
    fbKeys.forEach((key) => {
        $('#user-settings').append(
            `<li id="${key}" class="get-setting"> ${settings[key].title}</li> 
            <a id="del-${key}" class= "delete-setting" href="#"><i class="icons fa fa-trash" aria-hidden="true"></i></a><br>`
        );
    });
};
