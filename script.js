// Inisialisasi peta
let map;

function initMap() {
    // Peta default lokasi Jakarta
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -6.200000, lng: 106.816666 },
        zoom: 12
    });
}

// Fungsi untuk mengubah lokasi peta
function setMapLocation(lat, lng) {
    const location = { lat, lng };
    map.setCenter(location);
    map.setZoom(12);
    new google.maps.Marker({
        position: location,
        map: map,
        title: 'Lokasi Baru'
    });
}