(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{146:function(e,t,o){"use strict";o.r(t);var n=document.querySelector("html");function d(e){return n.classList.toggle("dark-mode")}t.default=function(){console.log("Dark Mode (is the best)!"),"true"===window.localStorage.getItem("darkModeSetting")&&n.classList.add("dark-mode"),"/settings/"===window.location.pathname&&document.getElementById("darkModeButton").addEventListener("click",d)}}}]);