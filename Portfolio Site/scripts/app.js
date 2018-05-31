// var SlideInOnScroll = require('./modules/SlideInOnScroll');
require('../node_modules/waypoints/lib/noframework.waypoints.js');
var waypoint = require('./modules/Waypoint');
// const $ = require("jquery");

waypoint('about-text', ()=>{alert("about")})

console.log("hi from app js, after var waypoint");   