// Haritada gösterilecek destek merkezlerinin listesi (Veri Kaynağı)
const supportCenters = [
    { name: "Mobbing ile Mücadele Derneği - ANKARA", 
      address: "Sağlık Mah. Ataç1 Sok. Selam Apt. No:1/14, Sıhhiye-ANKARA",
      details: "Dernek genel merkezi ve hukuki danışmanlık."
    },
    { name: "TİHEK (Türkiye İnsan Hakları ve Eşitlik Kurumu)", 
      address: "Mithatpaşa Cad. No: 52, Kızılay-ANKARA",
      details: "Mobbing ihlalleri için resmi başvuru kurumu."
    },
    // Daha fazla il ve kurum buraya eklenecektir. (İSTANBUL Temsilciliği, İZMİR Barosu vb.)
];

let map;
let geocoder; // Adresi koordinata çevirmek için

// Haritayı Başlatan Fonksiyon (Google Maps callback)
function initMap() {
    geocoder = new google.maps.Geocoder();
    
    // Haritayı Türkiye merkezine odakla
    map = new google.maps.Map(document.getElementById('mobbingMap'), {
        zoom: 6,
        center: { lat: 39.9334, lng: 32.8597 } // Ankara
    });

    // Her merkezi haritada işaretle
    supportCenters.forEach(center => {
        addMarker(center);
    });
}

// Marker Ekleme Fonksiyonu
function addMarker(center) {
    // 1. Adresi koordinata çevir (Geocoding)
    geocoder.geocode({ 'address': center.address }, (results, status) => {
        if (status === 'OK') {
            const position = results[0].geometry.location;

            // 2. İşaretleyici (Marker) Oluştur
            const marker = new google.maps.Marker({
                map: map,
                position: position,
                title: center.name
            });

            // 3. Bilgi Penceresi (Info Window) Ekle
            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <strong>${center.name}</strong>
                    <p>${center.details}</p>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(center.address)}" target="_blank">Yol Tarifi Al</a>
                `
            });

            // 4. Tıklama Olayı Ekle
            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });
            
            // Harita üzerindeki listede de göster
            updateLocationList(center, center.address);

        } else {
            console.error('Geocoding hatası: ' + status + ' Adres: ' + center.address);
        }
    });
}

// HTML listesini güncelleyen fonksiyon
function updateLocationList(center, resolvedAddress) {
    const list = document.getElementById('locationList');
    const item = document.createElement('div');
    item.className = 'location-item';
    item.innerHTML = `
        <h3>${center.name}</h3>
        <p><i class="fas fa-map-marker-alt"></i> ${resolvedAddress}</p>
        <p>${center.details}</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(center.address)}" target="_blank" class="btn-sm">Rota Çiz</a>
    `;
    list.appendChild(item);
}
