// Global variables
var lat, long, coordsArray;

function fail() {
  alert('Geolocation is not supported by this browser.');
}

function storeLocation(position) {
  console.log(position);

  lat = position.coords.latitude;
  long = position.coords.longitude;

  if (!lat || !long) {
    console.log('Retrying location')
    geoTest();
  } else {
    mapLocation(lat, long);
  }
}

// Handles geolocation permissions and operations
function geoTest() {
  // Checks for geolocation fails otherwise get location
  if (navigator || !navigator.geolocation) {
    fail();
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
