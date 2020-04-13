// Global variables
var long, lat, coordsArray;

// Grabs the location from the user and calls showPosition
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      coordsArray = [lat, long];
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}
//   //This array is for the lattitude and longitude of the desired display location
//   //Hard coded to Paris France
//   // var coordsArrayParis = [48.8566969, 2.3514616];
//   // var coordsArrayLiberty = [40.689253199999996, -74.04454817144321];
//   if (lat === undefined || long === undefined) {
//     coordsArray = [40.689253199999996, -74.04454817144321];
//   }

//   //Creates the map object with the intended coordinates and sets zoom level to 14
//   var map = L.map('map').setView(coordsArray, 14);

//   //Creates the required WebGL metadata and chains it to the map object
//   var gl = L.mapboxGL({
//     attribution:
//       '<a href="https://www.maptiler.com/license/maps/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
//     accessToken: 'not-needed',
//     style:
//       'https://api.maptiler.com/maps/topo/style.json?key=Uiet7SP6IpzRp4hquEiM',
//   }).addTo(map);

//   //Creates the marker for the intended coordinates and chains it to the map object
//   var marker = L.marker(coordsArray).addTo(map);
// }

window.addEventListener('load', getLocation, false);
