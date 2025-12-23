// ==============================================================================
// Dosya: map-integration.js
// Amaç: Google Haritalar entegrasyonu ve TR/EN dil desteği ile marker yönetimi
// ==============================================================================

function initMap() {
    // 1. Dil Tercihini Al (Varsayılan: tr)
    const lang = localStorage.getItem('selectedLang') || 'tr';

    // 2. Harita Merkez Koordinatı (Ankara)
    const merkez = { lat: 39.925054, lng: 32.836944 };

    // 3. Haritayı Oluştur
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: merkez,
        styles: [ 
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

    // 4. Lokasyon Verisi (Hem TR hem EN destekli yapı)
    const lokasyonlar = [
        {
            konum: { lat: 39.9263, lng: 32.8539 }, // Sıhhiye
            baslik: {
                tr: "Mobbing ile Mücadele Derneği",
                en: "Association for Combating Mobbing"
            },
            tur: {
                tr: "Dernek Genel Merkezi",
                en: "Association HQ"
            }
        },
        {
            konum: { lat: 39.9199, lng: 32.8543 }, // Kızılay
            baslik: {
                tr: "TİHEK (İnsan Hakları Kurumu)",
                en: "HREIT (Human Rights Institution)"
            },
            tur: {
                tr: "Resmi Kurum",
                en: "Official Institution"
            }
        },
        {
            konum: { lat: 39.9127, lng: 32.8095 }, // Emek
            baslik: {
                tr: "Çalışma ve Sosyal Güvenlik Bakanlığı",
                en: "Ministry of Labor and Social Security"
            },
            tur: {
                tr: "Bakanlık",
                en: "Ministry"
            }
        }
    ];

    // 5. İşaretçileri Ekleme
    lokasyonlar.forEach((yer) => {
        // Seçili dile göre metinleri belirle
        const currentTitle = yer.baslik[lang];
        const currentType = yer.tur[lang];

        const marker = new google.maps.Marker({
            position: yer.konum,
            map: map,
            title: currentTitle,
            animation: google.maps.Animation.DROP
        });

        // Bilgi Penceresi (InfoWindow) İçeriği
        const infowindow = new google.maps.InfoWindow({
            content: `
                <div style="padding:10px; color:#333; min-width:150px;">
                    <h3 style="margin:0 0 5px 0; font-size:15px; font-weight:bold;">${currentTitle}</h3>
                    <span style="background:#eee; padding:3px 8px; border-radius:4px; font-size:12px; color:#555;">
                        ${currentType}
                    </span>
                </div>
            `
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    });
}

// Global Erişim
window.initMap = initMap;
