const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoicGlxbmZpa3ljIiwiYSI6ImNqOTRoOXllZjQ4N3Eyd3FxN2d1NzB3bDQifQ.VNZWG9g6aoju3TeBNDNSTw';
let map = new mapboxgl.Map({
container: document.getElementById('container'),
style: 'mapbox://styles/mapbox/streets-v10'
});