function initMap() {
	L.mapquest.key = "5d62ASK5zEEyESGIbOJZojXkAK7RxbIf";

  var map = L.mapquest.map('map', {
    center: [32.8785248, -117.23808],
    layers: L.mapquest.titleLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.8785248, -117.23808]).addTo(map);
}
