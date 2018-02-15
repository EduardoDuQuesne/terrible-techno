/*jshint esversion: 6 */

const $ = require('jquery');

module.exports.displaySettings = (settings) => {
    $('#user-settings').empty();
    let fbKeys = Object.keys(settings);
    fbKeys.forEach((key) => {
        $('#user-settings').append(
            `<div class="setting-flex">
                <a href="#">
                    <li id="${key}" class="get-setting"> ${settings[key].title}</li> 
                </a>
                <a id="del-${key}" class= "delete-setting" href="#"><i class="fas fa-times"></i></a>
                </div>`
        );
    });
};