require('../../node_modules/waypoints/lib/noframework.waypoints.min.js');
console.log("slideinonscroll js hello!")

function waypoint(id, handlerCallback) {
  new Waypoint({
    element: document.getElementById(id),
    handler: handlerCallback
  })
}

module.exports = waypoint;