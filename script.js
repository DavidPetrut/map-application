const token =
  "pk.eyJ1IjoiZGF2aWRwZXRydXQxMTIiLCJhIjoiY2xva2V5dHdvMjl1YjJscGxvMXlxbmJpZSJ9.7pSXiCr-ovI-Q0T2gzzlwA";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([44.43, 26.10])
}

function setupMap(center){
    mapboxgl.accessToken = token;
    var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 14
});
const nav = new mapboxgl.NavigationControl();
map.addControl(nav);
var directions = new MapboxDirections({
    accessToken: token,
  });
  
  
  map.addControl(directions, 'top-left');
}

