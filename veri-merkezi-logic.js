// ==============================================================================
// Dosya: veri-merkezi-logic.js
// Amaç: Mobbing verilerini filtrelemek ve TR/EN dil desteğiyle göstermek.
// ==============================================================================

// 1. KAPSAMLI VERİ SETİ (TR / EN Destekli)
const mobbingVerileri = {
    sektor: {
        genel: {
            ozel: {
                oran: '81%', 
                aciklama: {
                    tr: 'Başvuruların büyük çoğunluğu (%81) Özel Sektör çalışanlarından gelmiştir.',
                    en: 'The vast majority of applications (81%) came from Private Sector employees.'
                }, 
                kaynak: '2025 Raporu'
            },
            kamu: {
                oran: '19%', 
                aciklama: {
                    tr: 'Başvuruların %19’u Kamu kurumlarından gelmektedir.',
                    en: '19% of applications come from Public Institutions.'
                }, 
                kaynak: '2025 Raporu'
            }
        },
        ozel_detay: {
            sanayi: {
                oran: '6.24%', 
                aciklama: {
                    tr: 'Özel sektörde en çok başvuru gelen sektör Sanayi (7.478 başvuru) olmuştur.',
                    en: 'The sector with the most applications in the private sector was Industry (7,478 applications).'
                }, 
                kaynak: '2025 Raporu'
            },
            magaza: {
                oran: '5.56%', 
                aciklama: {
                    tr: 'Mağaza, Restoran ve Market sektörleri ikinci sıradadır (6.661 başvuru).',
                    en: 'Store, Restaurant and Market sectors are in second place (6,661 applications).'
                }, 
                kaynak: '2025 Raporu'
            }
        },
        kamu_detay: {
            saglik: {
                oran: '10.82%', 
                aciklama: {
                    tr: 'Kamuda en çok başvuru Sağlık Bakanlığı personelinden (2.982 adet) gelmektedir.',
                    en: 'In the public sector, the most applications come from Ministry of Health personnel (2,982).'
                }, 
                kaynak: '2025 Raporu'
            },
            meb: {
                oran: '5.32%', 
                aciklama: {
                    tr: 'Milli Eğitim Bakanlığı (Öğretmenler) ikinci sıradadır.',
                    en: 'Ministry of National Education (Teachers) is in second place.'
                }, 
                kaynak: '2025 Raporu'
            }
        }
    },
    fail: {
        amir: {
            oran: '61.29%', 
            aciklama: {
                tr: 'Mobbing uygulayanların %61’i doğrudan birinci derece "Amir" statüsündedir.',
                en: '61% of mobbers are in the status of direct first-degree "Manager".'
            }, 
            kaynak: '2025 Raporu'
        },
        arkadas: {
            oran: '3.12%', 
            aciklama: {
                tr: 'Sadece iş arkadaşı (yatay mobbing) oranı %3 civarındadır.',
                en: 'The rate of peer-only (horizontal) mobbing is around 3%.'
            }, 
            kaynak: '2025 Raporu'
        }
    },
    sikayet: {
        sebepler: {
            isyuku: {
                oran: '20.20%', 
                aciklama: {
                    tr: 'Mağdurların %20’si "İş Yükünün Artırılması" nedeniyle şikayetçi olmuştur.',
                    en: '20% of victims complained about "Increased Workload".'
                }, 
                kaynak: '2025 Raporu'
            },
            istifa: {
                oran: '19.95%', 
                aciklama: {
                    tr: 'İstifaya zorlama (Bezdiki) en yaygın ikinci yöntemdir.',
                    en: 'Forcing resignation is the second most common method.'
                }, 
                kaynak: '2025 Raporu'
            }
        },
        saldiri_tipleri: {
            azarlanma: {
                oran: '50.12%', 
                aciklama: {
                    tr: 'İletişim saldırılarında en çok "Azarlanma ve Karalanma" görülür.',
                    en: '"Scolding and Smearing" are seen most in communication attacks.'
                }, 
                kaynak: '2025 Raporu'
            },
            gormezden: {
                oran: '39.39%', 
                aciklama: {
                    tr: 'Sosyal ilişkilerde en çok "Görmezden Gelinme" uygulanır.',
                    en: '"Being Ignored" is applied most in social relations.'
                }, 
                kaynak: '2025 Raporu'
            }
        }
    },
    etki: {
        psikolojik: {
            depresyon: {
                oran: '35.53%', 
                aciklama: {
                    tr: 'Mağdurların %35.53’ünde Depresif Bozukluk teşhis edilmiştir.',
                    en: 'Depressive Disorder was diagnosed in 35.53% of the victims.'
                }, 
                kaynak: '2025 Raporu'
            },
            kaygi: {
                oran: '22.20%', 
                aciklama: {
                    tr: 'Kaygı Bozukluğu (Anksiyete) ikinci sırada yer alır.',
                    en: 'Anxiety Disorder ranks second.'
                }, 
                kaynak: '2025 Raporu'
            }
        },
        tedavi: {
            ilac: {
                oran: '82.59%', 
                aciklama: {
                    tr: 'Mobbing mağdurlarının %82’si ilaç tedavisi görmek zorunda kalmaktadır.',
                    en: '82% of mobbing victims have to undergo drug treatment.'
                }, 
                kaynak: '2025 Raporu'
            }
        }
    }
};

// 2. FİLTRELERİ GÜNCELLEME (Dropdown Seçenekleri)
function updateFiltreler() {
    const kategori = document.getElementById('f_kategori').value;
    const altSelect = document.getElementById('f_alt_kategori');
    const lang = localStorage.getItem('selectedLang') || 'tr'; // Dili al
    
    altSelect.innerHTML = '';

    let options = {};

    if(kategori === 'sektor') {
        options = {
            'genel.ozel': lang === 'en' ? 'Private Sector (General)' : 'Özel Sektör (Genel)',
            'genel.kamu': lang === 'en' ? 'Public Sector (General)' : 'Kamu Sektörü (Genel)',
            'ozel_detay.sanayi': lang === 'en' ? 'Private: Industry' : 'Özel: Sanayi Sektörü',
            'ozel_detay.magaza': lang === 'en' ? 'Private: Retail/Store' : 'Özel: Mağaza/Market',
            'kamu_detay.saglik': lang === 'en' ? 'Public: Ministry of Health' : 'Kamu: Sağlık Bakanlığı',
            'kamu_detay.meb': lang === 'en' ? 'Public: Education (Teachers)' : 'Kamu: MEB (Öğretmen)'
        };
    } else if(kategori === 'fail') {
        options = {
            'fail.amir': lang === 'en' ? 'Direct Manager' : 'Doğrudan Amir',
            'fail.arkadas': lang === 'en' ? 'Colleague' : 'İş Arkadaşı'
        };
    } else if(kategori === 'sikayet') {
        options = {
            'sikayet.sebepler.isyuku': lang === 'en' ? 'Complaint: Increased Workload' : 'Şikayet: İş Yükü Artırma',
            'sikayet.sebepler.istifa': lang === 'en' ? 'Complaint: Forced Resignation' : 'Şikayet: İstifaya Zorlama',
            'sikayet.saldiri_tipleri.azarlanma': lang === 'en' ? 'Attack: Scolding' : 'Saldırı: Azarlanma/Karalanma',
            'sikayet.saldiri_tipleri.gormezden': lang === 'en' ? 'Attack: Ignoring' : 'Saldırı: Görmezden Gelinme'
        };
    } else if(kategori === 'etki') {
        options = {
            'etki.psikolojik.depresyon': lang === 'en' ? 'Effect: Depression' : 'Etki: Depresif Bozukluk',
            'etki.psikolojik.kaygi': lang === 'en' ? 'Effect: Anxiety' : 'Etki: Kaygı Bozukluğu',
            'etki.tedavi.ilac': lang === 'en' ? 'Treatment: Medication' : 'Tedavi: İlaç Kullanımı'
        };
    }

    for (let key in options) {
        let opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = options[key];
        altSelect.appendChild(opt);
    }
}

// 3. SORGULAMA VE SONUÇ GÖSTERME
function detayliSorgula() {
    const path = document.getElementById('f_alt_kategori').value.split('.');
    const kart = document.getElementById('sonucKarti');
    const lang = localStorage.getItem('selectedLang') || 'tr'; // Dili al
    
    // Veriye erişim (Nested object traversal)
    let veri = mobbingVerileri;
    for (let i = 0; i < path.length; i++) {
        veri = veri[path[i]];
    }

    if(veri) {
        // Başlığı seçili option'dan al
        const seciliOption = document.getElementById('f_alt_kategori').options[document.getElementById('f_alt_kategori').selectedIndex].text;
        
        document.querySelector('.sonuc-baslik').innerText = seciliOption;
        document.querySelector('.big-rate').innerText = veri.oran;
        
        // Açıklamayı dile göre seç
        const aciklamaMetni = typeof veri.aciklama === 'object' ? veri.aciklama[lang] : veri.aciklama;
        const kaynakMetni = lang === 'en' ? "2025 Report" : "2025 Raporu";

        document.querySelector('.veri-detay').innerText = aciklamaMetni + " (" + kaynakMetni + ")";
        
        kart.classList.remove('hidden');
        kart.style.display = 'block';
    }
}

// Sayfa yüklenince başlat
window.onload = updateFiltreler;
