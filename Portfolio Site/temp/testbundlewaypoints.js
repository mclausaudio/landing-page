// var SlideInOnScroll = require('./modules/SlideInOnScroll');
const Waypoint = require('../../node_modules/waypoints/lib/noframework.waypoints.js');

var waypoint =  new Waypoint({
  element: document.getElementById('about-text'),
  handler: function() {
    alert('Basic waypoint triggered');
  }
});


console.log("hi from app js, after var waypoint");   