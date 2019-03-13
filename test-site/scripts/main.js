'use strict';

console.log("inside main.js");

let myImage =document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Junior.jpg'){
    myImage.setAttribute('src', 'images/amex-logo.png'); //new image
  } else {
    myImage.setAttribute('src', 'images/Junior.jpg'); //old image
  }
}

const setUserName = () => {
  let myName = prompt('Enter your name');
  localStorage.setItem('name', myName);
  //sessionStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "Welcome, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}
