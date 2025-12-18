// 2023 ve 2025 Raporlarından Derlenmiş Kapsamlı Veri Seti
const mobbingVerileri = {
    sektor: {
        genel: {
            ozel: {oran: '81%', aciklama: 'Başvuruların büyük çoğunluğu (%81) Özel Sektör çalışanlarından gelmiştir.', kaynak: '2025 Raporu'},
            kamu: {oran: '19%', aciklama: 'Başvuruların %19’u Kamu kurumlarından gelmektedir.', kaynak: '2025 Raporu'}
        },
        ozel_detay: {
            sanayi: {oran: '6.24%', aciklama: 'Özel sektörde en çok başvuru gelen sektör Sanayi (7.478 başvuru) olmuştur.', kaynak: '2025 Raporu'},
            magaza: {oran: '5.56%', aciklama: 'Mağaza, Restoran ve Market sektörleri ikinci sıradadır (6.661 başvuru).', kaynak: '2025 Raporu'},
            hizmet: {oran: '2.14%', aciklama: 'Hizmet sektörü %2.14 ile önemli bir mobbing alanıdır.', kaynak: '2025 Raporu'},
            saglik_ozel: {oran: '1.54%', aciklama: 'Özel Sağlık Kuruluşları başvuruların %1.54’ünü oluşturur.', kaynak: '2025 Raporu'},
            turizm: {oran: '1.27%', aciklama: 'Turizm sektöründe mobbing oranı %1.27’dir.', kaynak: '2025 Raporu'}
        },
        kamu_detay: {
            saglik: {oran: '10.82%', aciklama: 'Kamuda en çok başvuru Sağlık Bakanlığı personelinden (2.982 adet) gelmektedir.', kaynak: '2025 Raporu'},
            meb: {oran: '5.32%', aciklama: 'Milli Eğitim Bakanlığı (Öğretmenler) ikinci sıradadır.', kaynak: '2025 Raporu'},
            belediye: {oran: '5.11%', aciklama: 'Belediyeler ve İktisadi Teşekkülleri mobbingin yoğun olduğu yerlerdir.', kaynak: '2025 Raporu'},
            universite: {oran: '3.20%', aciklama: 'Üniversitelerden gelen başvurular %3.20 oranındadır.', kaynak: '2025 Raporu'}
        }
    },
    fail: {
        amir: {oran: '61.29%', aciklama: 'Mobbing uygulayanların %61’i doğrudan birinci derece "Amir" statüsündedir.', kaynak: '2025 Raporu'},
        ust_amir: {oran: '25.96%', aciklama: 'Mobbing yapanların %25.96’sı daha üst amirlerdir.', kaynak: '2025 Raporu'},
        amir_arkadas: {oran: '7.37%', aciklama: 'Hem amir hem iş arkadaşı tarafından yapılan toplu mobbing oranıdır.', kaynak: '2025 Raporu'},
        arkadas: {oran: '3.12%', aciklama: 'Sadece iş arkadaşı (yatay mobbing) oranı %3 civarındadır.', kaynak: '2025 Raporu'}
    },
    sikayet: {
        sebepler: {
            isyuku: {oran: '20.20%', aciklama: 'Mağdurların %20’si "İş Yükünün Artırılması" nedeniyle şikayetçi olmuştur.', kaynak: '2025 Raporu'},
            istifa: {oran: '19.95%', aciklama: 'İstifaya zorlama (Bezdiki) en yaygın ikinci yöntemdir.', kaynak: '2025 Raporu'},
            tehdit: {oran: '18.27%', aciklama: 'Çalışanların %18’i tehdide maruz kalmaktadır.', kaynak: '2025 Raporu'},
            iletisim: {oran: '16.26%', aciklama: 'İletişimin kesilmesi ve yok sayılma yaygın bir taktiktir.', kaynak: '2025 Raporu'}
        },
        saldiri_tipleri: {
            azarlanma: {oran: '50.12%', aciklama: 'İletişim saldırılarında en çok "Azarlanma ve Karalanma" görülür.', kaynak: '2025 Raporu'},
            gormezden: {oran: '39.39%', aciklama: 'Sosyal ilişkilerde en çok "Görmezden Gelinme" uygulanır.', kaynak: '2025 Raporu'},
            itibar: {oran: '22.71%', aciklama: 'İtibar saldırılarında "Açıkça Kişiliğe Saldırı" öndedir.', kaynak: '2025 Raporu'}
        }
    },
    etki: {
        psikolojik: {
            depresyon: {oran: '35.53%', aciklama: 'Mağdurların %35.53’ünde Depresif Bozukluk teşhis edilmiştir.', kaynak: '2025 Raporu'},
            kaygi: {oran: '22.20%', aciklama: 'Kaygı Bozukluğu (Anksiyete) ikinci sırada yer alır.', kaynak: '2025 Raporu'},
            panik: {oran: '11.32%', aciklama: 'Panik Atak ve Bozukluklar %11 oranında görülür.', kaynak: '2025 Raporu'},
            uyku: {oran: '5.81%', aciklama: 'Uyku bozuklukları sıkça rastlanan bir etkidir.', kaynak: '2025 Raporu'}
        },
        tedavi: {
            ilac: {oran: '82.59%', aciklama: 'Mobbing mağdurlarının %82’si ilaç tedavisi görmek zorunda kalmaktadır.', kaynak: '2025 Raporu'},
            terapi: {oran: '6.04%', aciklama: 'Sadece psikoterapi alanların oranı düşüktür.', kaynak: '2025 Raporu'}
        }
    },
    demografi: {
        cinsiyet: {
            kadin: {oran: '43%', aciklama: 'Başvuruların %43’ü kadın çalışanlardan gelmiştir.', kaynak: '2025 Raporu'},
            erkek: {oran: '57%', aciklama: 'Başvuruların %57’si erkek çalışanlardan gelmiştir.', kaynak: '2025 Raporu'}
        },
        yas: {
            kadin_risk: {oran: '25.22%', aciklama: 'Kadınlarda en riskli yaş grubu 24-28 yaş aralığıdır.', kaynak: '2025 Raporu'},
            erkek_risk: {oran: '25.55%', aciklama: 'Erkeklerde en riskli yaş grubu 29-33 yaş aralığıdır.', kaynak: '2025 Raporu'}
        },
        il: {
            istanbul: {oran: '27.56%', aciklama: 'Özel sektör başvurularının merkezi İstanbul’dur.', kaynak: '2025 Raporu'},
            ankara: {oran: '13.13%', aciklama: 'Başkent Ankara ikinci sırada yer almaktadır.', kaynak: '2025 Raporu'}
        }
    }
};

// FİLTRELERİ GÜNCELLEME (Frontend için)
function updateFiltreler() {
    const kategori = document.getElementById('f_kategori').value;
    const altSelect = document.getElementById('f_alt_kategori');
    altSelect.innerHTML = '';

    let options = {};

    if(kategori === 'sektor') {
        options = {
            'genel.ozel': 'Özel Sektör (Genel)',
            'genel.kamu': 'Kamu Sektörü (Genel)',
            'ozel_detay.sanayi': 'Özel: Sanayi Sektörü',
            'ozel_detay.magaza': 'Özel: Mağaza/Market',
            'kamu_detay.saglik': 'Kamu: Sağlık Bakanlığı',
            'kamu_detay.meb': 'Kamu: MEB (Öğretmen)'
        };
    } else if(kategori === 'fail') {
        options = {
            'fail.amir': 'Doğrudan Amir',
            'fail.ust_amir': 'Üst Amirler',
            'fail.arkadas': 'İş Arkadaşı'
        };
    } else if(kategori === 'sikayet') {
        options = {
            'sikayet.sebepler.isyuku': 'Şikayet: İş Yükü Artırma',
            'sikayet.sebepler.istifa': 'Şikayet: İstifaya Zorlama',
            'sikayet.saldiri_tipleri.azarlanma': 'Saldırı: Azarlanma/Karalanma',
            'sikayet.saldiri_tipleri.gormezden': 'Saldırı: Görmezden Gelinme'
        };
    } else if(kategori === 'etki') {
        options = {
            'etki.psikolojik.depresyon': 'Etki: Depresif Bozukluk',
            'etki.psikolojik.kaygi': 'Etki: Kaygı Bozukluğu',
            'etki.tedavi.ilac': 'Tedavi: İlaç Kullanımı'
        };
    }

    for (let key in options) {
        let opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = options[key];
        altSelect.appendChild(opt);
    }
}

// SORGULAMA VE SONUÇ GÖSTERME
function detayliSorgula() {
    const path = document.getElementById('f_alt_kategori').value.split('.');
    const kart = document.getElementById('sonucKarti');
    
    // Veriye erişim (Nested object traversal)
    let veri = mobbingVerileri;
    for (let i = 0; i < path.length; i++) {
        veri = veri[path[i]];
    }

    if(veri) {
        document.querySelector('.sonuc-baslik').innerText = document.getElementById('f_alt_kategori').options[document.getElementById('f_alt_kategori').selectedIndex].text;
        document.querySelector('.big-rate').innerText = veri.oran;
        document.querySelector('.veri-detay').innerText = veri.aciklama + " (" + veri.kaynak + ")";
        kart.classList.remove('hidden');
        kart.style.display = 'block';
    }
}

window.onload = updateFiltreler;
