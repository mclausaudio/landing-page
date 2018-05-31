// var SlideInOnScroll = require('./modules/SlideInOnScroll');
require('../node_modules/waypoints/lib/noframework.waypoints.js');
var waypoint = require('./modules/Waypoint');
// const $ = require("jquery");

waypoint('about-text', ()=>{
  document.getElementById('about-text').classList.add('slideInFromScroll__visible');
  console.log('hit about text');
}, '60%')

console.log("hi from app js, after var waypoint");   