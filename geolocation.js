// Global variables
var lat, long, coordsArray;

function fail() {
  alert('Geolocation is not supported by this browser.');
}

function storeLocation(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;

  if (!lat || !long) {
    geoTest();
  } else {
    mapLocation(lat, long);
  }
}

function geoTest() {
  if (navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(storeLocation, fail, {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0,
    });
  } else {
    // Fallback for no geolocation
    fail();
  }
}

// Grabs the location from the user and calls showPosition
function mapLocation(lat, long) {
  // If unable to get location then set hard coded lat and long
  if ((!lat && !long) || (lat === undefined && long === undefined)) {
    coordsArray = [40.689253199999996, -74.04454817144321];
  } else {
    coordsArray = [lat, long];
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

window.addEventListener('load', geoTest, false);
