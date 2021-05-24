"use strict"

const userName = document.getElementById('username-login');
const userPassword = document.getElementById('password-login');
const submit = document.getElementById('submit-button');
const greeting = document.getElementById('greeting-text');

$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
    let userIp = data.ip;

    fetch(`https://fourtonfish.com/hellosalut/?ip=${userIp}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsondata) {
        submit.addEventListener('click', function() { 
            if (userName.value.length == 0) {
                userName.style.border = "1px solid #DD0000";
                userName.style.color = "#DD0000";
            } else {
                userName.style.border = "1px solid #ddd";
                userName.style.color = "#000";
            }

            if (userPassword.value.length == 0) {
                userPassword.style.border = "1px solid #DD0000";
                userPassword.style.color =  "#DD0000";
            } else {
                userPassword.style.border = "1px solid #ddd";
                userPassword.style.color = "#000";
            }
                
            if (userName.value.length > 0 && userPassword.value.length > 0) {
                greeting.style.opacity = 0;
                greeting.innerHTML = '<mark class="purple">' + jsondata.hello + '</mark>' + '<pre> </pre>' + '<mark class="purple">' + userName.value + '</mark>' + ", You have succesfully logged in!";
                window.setTimeout(function() {
                    greeting.style.opacity = 1;
                }, 1000);
                
                userName.style.border = "1px solid #ddd";
                userName.style.color = "#000";

                userPassword.style.border = "1px solid #ddd";
                userPassword.style.color = "#000";
            }
        });
    })
});



