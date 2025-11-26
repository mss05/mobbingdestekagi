// Haritayı Başlatma Fonksiyonu
function initMap() {
    // 1. Harita Merkez Koordinatı (Ankara - Türkiye Geneli için ideal)
    const merkez = { lat: 39.925054, lng: 32.836944 }; // Anıtkabir civarı merkez

    // 2. Haritayı Oluştur
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6, // Türkiye geneli görünümü için zoom seviyesi
        center: merkez,
        styles: [ // Opsiyonel: Haritayı biraz daha kurumsal/soluk yapmak için stil
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "poi",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{ "visibility": "off" }]
            }
        ]
    });

    // 3. İşaretçiler (Marker) Listesi
    const lokasyonlar = [
        {
            baslik: "Mobbing ile Mücadele Derneği",
            konum: { lat: 39.9263, lng: 32.8539 }, // Sıhhiye tahmini
            tur: "Dernek"
        },
        {
            baslik: "TİHEK (İnsan Hakları Kurumu)",
            konum: { lat: 39.9199, lng: 32.8543 }, // Kızılay tahmini
            tur: "Resmi Kurum"
        },
        {
            baslik: "Çalışma ve Sosyal Güvenlik Bakanlığı",
            konum: { lat: 39.9127, lng: 32.8095 }, // Emek
            tur: "Bakanlık"
        }
    ];

    // 4. İşaretçileri Haritaya Ekleme Döngüsü
    lokasyonlar.forEach((yer) => {
        const marker = new google.maps.Marker({
            position: yer.konum,
            map: map,
            title: yer.baslik,
            animation: google.maps.Animation.DROP
        });

        // Tıklayınca İsim Gösteren Pencere
        const infowindow = new google.maps.InfoWindow({
            content: `
                <div style="padding:10px; color:#333;">
                    <h3 style="margin:0 0 5px 0; font-size:16px;">${yer.baslik}</h3>
                    <span style="background:#eee; padding:2px 6px; border-radius:4px; font-size:12px;">${yer.tur}</span>
                </div>
            `
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    });
}

// Fonksiyonu global hale getir (Google API'nin erişebilmesi için)
window.initMap = initMap;
