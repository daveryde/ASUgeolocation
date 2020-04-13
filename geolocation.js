var long, lat, position;

function mapTiler() {
  //This array is for the lattitude and longitude of the desired display location
  //Hard coded to Paris France
  // var coordsArrayParis = [48.8566969, 2.3514616];
  // var coordsArrayLiberty = [40.689253199999996, -74.04454817144321];
  var coordsArrayPhoenix = [33.4484367, -112.0741417];

  //Creates the map object with the intended coordinates and sets zoom level to 14
  var map = L.map('map').setView(coordsArrayPhoenix, 14);

  //Creates the required WebGL metadata and chains it to the map object
  var gl = L.mapboxGL({
    attribution:
      '<a href="https://www.maptiler.com/license/maps/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
    accessToken: 'not-needed',
    style:
      'https://api.maptiler.com/maps/topo/style.json?key=Uiet7SP6IpzRp4hquEiM',
  }).addTo(map);

  //Creates the marker for the intended coordinates and chains it to the map object
  var marker = L.marker(coordsArrayPhoenix).addTo(map);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Geolocation is not supported by this browser.');
  }

  mapTiler();
}

function showPosition(position) {
  lat = position.coords.latitude; 
  long = position.coords.longitude;

  

  console.log(lat, long);
}

window.addEventListener('load', getLocation, false);
