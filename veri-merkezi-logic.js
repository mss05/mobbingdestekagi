// ==============================================================================
// Dosya Adı: veri-merkezi-logic.js
// Amacı: Bilgi Merkezi sayfasındaki filtreleme mantığını ve veri eşleştirmeyi yönetir.
// ==============================================================================

// 1. STATİK MOBBING VERİLERİ (RAPORLARDAN ALINAN KRİTİK VERİLER)
const mobbingVerileri = {
    sektor: {
        genel_ozel: {oran: '81%', aciklama: 'Başvuruların büyük çoğunluğu (%81) Özel Sektör çalışanlarından gelmiştir.', kaynak: '2025 Raporu'},
        sanayi: {oran: '6.24%', aciklama: 'Özel sektörde en çok başvuru gelen sektör: Sanayi Sektörü (Adet: 7.478)', kaynak: '2025 Raporu'},
        saglik_kamu: {oran: '10.82%', aciklama: 'Kamu sektöründe en çok başvuru gelen kurum: Sağlık Bakanlığı', kaynak: '2025 Raporu'},
        is_il_istanbul: {oran: '27.56%', aciklama: 'Özel sektör başvurularının %27.56’sı İstanbul’dan gelmiştir.', kaynak: '2025 Raporu'},
    },
    sikayet: {
        is_yuku: {oran: '20.20%', aciklama: 'Mobbing şikayetlerinin şikayete dönüşme sebebi İş Yükünün Artırılmasıdır.', kaynak: '2025 Raporu'},
        istifaya_zorlama: {oran: '19.95%', aciklama: 'Mobbing başvurularında en çok rastlanan şikayet konusu İstifaya Zorlama olup, bu oran %19.95’tir.', kaynak: '2025 Raporu'},
        azarlanma: {oran: '50.12%', aciklama: 'İletişime yönelik saldırılarda birinci sırada %50.12 oran ile Azarlanır, Karalanır saldırı tipi bulunmaktadır.', kaynak: '2025 Raporu'},
    },
    fail: {
        amir: {oran: '61.29%', aciklama: 'Mobbing yapanların %61,29 oran ile Amiri tarafından yapılmaktadır.', kaynak: '2025 Raporu'},
        amir_ve_arkadas: {oran: '7.37%', aciklama: 'Mobbing yapanların %7.37’si Amirleri ve İş Arkadaşları tarafından yapılmaktadır.', kaynak: '2025 Raporu'},
    },
    etki: {
        depresif: {oran: '35.53%', aciklama: 'Mobbingin psikolojik etkilerinde birinci sırada Depresif Bozukluk bulunmaktadır.', kaynak: '2025 Raporu'},
        ilac_tedavisi: {oran: '82.59%', aciklama: 'Mobbing mağdurlarının %82,59 oran ile İlaç Tedavisi almaktadır.', kaynak: '2025 Raporu'},
        yas_kadin: {oran: '25.22%', aciklama: 'Mobbing başvurusu yapan kadın çalışanlar en çok 24-28 yaş aralığındadır.', kaynak: '2025 Raporu'},
    },
};

// 2. FİLTRELEME KUTULARINI GÜNCELLEME
function updateFiltreler() {
    const kategori = document.getElementById('f_kategori').value;
    const altKategoriSelect = document.getElementById('f_alt_kategori');
    altKategoriSelect.innerHTML = ''; 

    let secenekler = {};
    if (kategori === 'sektor') {
        secenekler = {
            genel_ozel: 'Genel: Özel Sektör Başvuruları (%)',
            sanayi: 'Özel Sektör: Sanayi Sektörü Başvuruları (%)',
            magaza: 'Özel Sektör: Mağaza/Restoran Başvuruları (%)',
            saglik_kamu: 'Kamu Sektörü: Sağlık Bakanlığı Başvuruları (%)',
        };
    } else if (kategori === 'sikayet') {
        secenekler = {
            is_yuku: 'Şikayet Sebebi: İş Yükü Artırılması (%)',
            istifaya_zorlama: 'Şikayet Konusu: İstifaya Zorlama (%)',
            azarlanma: 'Saldırı Tipi: Azarlanma/Karalanma (%)',
        };
    } else if (kategori === 'fail') {
        secenekler = {
            amir: 'Fail Statüsü: Amir (%)',
            amir_ve_arkadas: 'Fail Statüsü: Amir ve İş Arkadaşları (%)',
        };
    } else if (kategori === 'etki') {
        secenekler = {
            depresif: 'Psikolojik Etki: Depresif Bozukluk Tanısı (%)',
            ilac_tedavisi: 'Tedavi Şekli: İlaç Tedavisi Kullanımı (%)',
            yas_kadin: 'Yaş Dağılımı: Kadın En Yoğun Yaş Aralığı (%)',
        };
    }

    for (const [key, value] of Object.entries(secenekler)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = value;
        altKategoriSelect.appendChild(option);
    }
}

// 3. SORGULAMA İŞLEMİ (Ana Fonksiyon)
function detayliSorgula() {
    const kategori = document.getElementById('f_kategori').value;
    const altKategori = document.getElementById('f_alt_kategori').value;
    const il = document.getElementById('f_il').value; // İl verisi
    
    const sonucKarti = document.getElementById('sonucKarti');
    const defaultMessage = document.getElementById('default-message');
    
    let veriObjesi = mobbingVerileri[kategori] ? mobbingVerileri[kategori][altKategori] : null;

    if (!veriObjesi) {
        sonucKarti.classList.add('hidden');
        defaultMessage.textContent = 'Üzgünüz, seçilen kombinasyona ait detaylı veri bulunamadı.';
        defaultMessage.classList.remove('hidden');
        return;
    }

    // İl Filtresi Özelleştirmesi (Sadece istanbul verisini kullandık)
    if (il === 'Istanbul' && kategori === 'sektor' && altKategori === 'genel_ozel') {
        veriObjesi = mobbingVerileri.sektor.is_il_istanbul;
    }


    // Sonuçları Ekrana Bas
    document.querySelector('#sonucKarti .sonuc-baslik').textContent = document.getElementById('f_alt_kategori').options[document.getElementById('f_alt_kategori').selectedIndex].text + (il !== 'genel' ? ` (${il})` : '');
    document.querySelector('#sonucKarti .big-rate').textContent = veriObjesi.oran;
    document.querySelector('#sonucKarti .veri-detay').textContent = veriObjesi.aciklama + ` (Kaynak: ${veriObjesi.kaynak})`;
    
    sonucKarti.classList.remove('hidden');
    defaultMessage.classList.add('hidden');
}

// Sayfa yüklendiğinde başlat
window.addEventListener('load', updateFiltreler);
