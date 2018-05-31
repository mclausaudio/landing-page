// var SlideInOnScroll = require('./modules/SlideInOnScroll');
require('../node_modules/waypoints/lib/noframework.waypoints.js');
var waypoint = require('./modules/Waypoint');
// const $ = require("jquery");

waypoint('about-text', ()=>{
  document.getElementById('about-text').classList.add('slideInFromScroll-left__visible');
}, '60%')

waypoint('portfolio-grid-1', ()=>{
  document.getElementById('portfolio-grid-1').classList.add('slideInFromScroll-left__visible');
}, '60%')

waypoint('portfolio-grid-2', ()=>{
  document.getElementById('portfolio-grid-2').classList.add('slideInFromScroll-right__visible');
}, '80%')

waypoint('music-frame-left', ()=>{
  document.getElementById('music-frame-left').classList.add('slideInFromScroll-left__visible');
}, '60%')

waypoint('music-frame-center', ()=>{
  document.getElementById('music-frame-center').classList.add('slideInFromScroll-up__visible');
}, '60%')

waypoint('music-frame-right', ()=>{
  document.getElementById('music-frame-right').classList.add('slideInFromScroll-right__visible');
}, '60%')


console.log("hi from app js, after var waypoint");   