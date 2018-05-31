require('../../node_modules/waypoints/lib/noframework.waypoints.min.js');

function waypoint(ID, handlerCallback, offset) {
  new Waypoint({
    element: document.getElementById(ID),
    handler: handlerCallback,
    offset: offset
  })
}

module.exports = waypoint;