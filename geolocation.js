// Global variables
var long, lat, coordsArray;

function fail() {
  alert('Geolocation is not supported by this browser.');
}

function createDirections(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
  coordsArray = [lat, long];
}

function geoTest() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(createDirections, fail, {
      timeout: 10000,
    });
  } else {
    fail();
  }
}

// Grabs the location from the user and calls showPosition
function getLocation() {
  // Get gep location data from user
 geoTest();

  //This array is for the lattitude and longitude of the desired display location
  //Hard coded to Paris France
  // var coordsArrayParis = [48.8566969, 2.3514616];
  // var coordsArrayLiberty = [40.689253199999996, -74.04454817144321];

  // If unable to get location then set hard coded lat and long
  if (!lat || !long) {
    coordsArray = [40.689253199999996, -74.04454817144321];
  }

  //Creates the map object with the intended coordinates and sets zoom level to 14
  var map = L.map('map').setView(coordsArray, 14);

  //Creates the required WebGL metadata and chains it to the map object
  var gl = L.mapboxGL({
    attribution:
      '<a href="https://www.maptiler.com/license/maps/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
    accessToken: 'not-needed',
    style:
      'https://api.maptiler.com/maps/topo/style.json?key=Uiet7SP6IpzRp4hquEiM',
  }).addTo(map);

  //Creates the marker for the intended coordinates and chains it to the map object
  var marker = L.marker(coordsArray).addTo(map);
}

window.addEventListener('load', getLocation, false);
