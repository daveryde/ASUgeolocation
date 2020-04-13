// Global variables
var lat, long, coordsArray;

function fail(failObj) {
  alert('Geolocation is not supported by this browser.');
  console.log(failObj);
}

function storeLocation(position) {
  // Store coords in global variables
  lat = position.coords.latitude;
  long = position.coords.longitude;

  // Assuming geolocation was successful, map coordinates
  mapLocation(lat, long);
}

// Handles geolocation permissions and operations
function geoTest() {
  // Checks for geolocation fails otherwise get location
  if (!navigator || !navigator.geolocation) {
    alert('Geolocation is not supported by this browser.');
  } else {
    navigator.geolocation.getCurrentPosition(storeLocation, fail, {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0,
    });
  }
}

// Takes user geolocation and maps it using MapTiler
function mapLocation(lat, long) {
  // Set coordinates to geolocation lat and long
  coordsArray = [lat, long];

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

window.addEventListener('load', geoTest, false);
