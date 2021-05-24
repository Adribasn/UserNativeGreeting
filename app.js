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
            greeting.style.opacity = 0;
            greeting.innerHTML = '<mark class="purple">' + jsondata.hello + '</mark>' + '<pre> </pre>' + '<mark class="purple">' + userName.value + '</mark>' + ", You have succesfully logged in!";
            window.setTimeout(function() {
                greeting.style.opacity = 1;
            }, 1000);
        });
    })
});


