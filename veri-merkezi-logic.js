// ==============================================================================
// 1. STATİK MOBBING VERİLERİ (RAPORLARDAN ALINAN KRİTİK VERİLER)
// Bu kısım, tüm veri tabanınızı temsil eder ve JSON dosyasından çekilmelidir.
// Basitlik adına burada JS objesi olarak tanımlanmıştır.
// ==============================================================================
const mobbingVerileri = {
    // Ana Kategori: SEKTÖR VE KURUM DAĞILIMI
    sektor: {
        [cite_start]genel_ozel: {oran: '81%', aciklama: 'Başvuruların büyük çoğunluğu, %81 oranla Özel Sektör çalışanlarından gelmiştir.' [cite: 667]},
        [cite_start]sanayi: {oran: '6.24%', aciklama: 'Özel sektörde en çok başvuru gelen sektör: Sanayi Sektörü (Adet: 7.478)' [cite: 678]},
        [cite_start]magaza: {oran: '5.56%', aciklama: 'Özel sektörde ikinci sırada: Mağaza, Restoran ve Market Sektörleri (Adet: 6.661)' [cite: 678]},
        [cite_start]saglik_kamu: {oran: '10.82%', aciklama: 'Kamu sektöründe en çok başvuru gelen kurum: Sağlık Bakanlığı' [cite: 681]},
        [cite_start]meb: {oran: '5.32%', aciklama: 'Kamu sektöründe ikinci sırada: Milli Eğitim Bakanlığı (MEB)' [cite: 681]},
        [cite_start]is_il_istanbul: {oran: '27.56%', aciklama: 'Özel sektör başvurularının en çok geldiği il İstanbul’dur.' [cite: 928]},
    },
    // Ana Kategori: ŞİKAYET VE SALDIRI TİPLERİ
    sikayet: {
        [cite_start]is_yuku: {oran: '20.20%', aciklama: 'Mobbing şikayetlerinin şikayete dönüşme sebebi İş Yükünün Artırılmasıdır.' [cite: 644]},
        [cite_start]istifaya_zorlama: {oran: '19.95%', aciklama: 'Mobbing başvurularında en çok rastlanan şikayet konusu İstifaya Zorlama olup, bu oran %19.95’tir.' [cite: 617]},
        [cite_start]azarlanma: {oran: '50.12%', aciklama: 'İletişime yönelik saldırılarda birinci sırada %50.12 oran ile Azarlanır, Karalanır saldırı tipi bulunmaktadır.' [cite: 763]},
        [cite_start]gormezden_gelme: {oran: '39.39%', aciklama: 'Sosyal ilişkilere yönelik saldırılarda: Görmezden Gelinir, Saygı Gösterilmez.' [cite: 785]},
    },
    // Ana Kategori: MOBBING YAPANIN STATÜSÜ
    fail: {
        [cite_start]amir: {oran: '61.29%', aciklama: 'Mobbing yapanların %61,29 oran ile Amiri tarafından yapılmaktadır.' [cite: 909]},
        [cite_start]amir_ve_arkadas: {oran: '7.37%', aciklama: 'Mobbing yapanların %7.37’si Amirleri ve İş Arkadaşları tarafından yapılmaktadır.' [cite: 917]},
    },
    // Ana Kategori: MAĞDURUN SAĞLIK/YAŞ ETKİLERİ
    etki: {
        [cite_start]depresif: {oran: '35.53%', aciklama: 'Mobbingin psikolojik etkilerinde birinci sırada Depresif Bozukluk bulunmaktadır.' [cite: 865]},
        [cite_start]kaygi: {oran: '22.20%', aciklama: 'İkinci sırada Kaygı Bozukluğu (%22.20) yer almaktadır.' [cite: 869]},
        [cite_start]ilac_tedavisi: {oran: '82.59%', aciklama: 'Mobbing mağdurlarının %82,59 oran ile İlaç Tedavisi almaktadır.' [cite: 900]},
        [cite_start]yas_kadin: {oran: '25.22%', aciklama: 'Kadın çalışanlar en çok 24-28 yaş aralığındadır.' [cite: 686]},
        [cite_start]yas_erkek: {oran: '25.55%', aciklama: 'Erkek çalışanlar en çok 29-33 yaş aralığındadır.' [cite: 707]},
    },
};

// ==============================================================================
// 2. FİLTRELEME KUTULARINI GÜNCELLEME (Kategoriye Göre Dinamik Seçenekler)
// ==============================================================================
function updateFiltreler() {
    const kategori = document.getElementById('f_kategori').value;
    const altKategoriSelect = document.getElementById('f_alt_kategori');
    altKategoriSelect.innerHTML = ''; // Önceki seçenekleri temizle

    let secenekler = {};
    if (kategori === 'sektor') {
        secenekler = {
            genel_ozel: 'Genel: Özel Sektör Başvuruları',
            sanayi: 'Özel Sektör: Sanayi Sektörü',
            magaza: 'Özel Sektör: Mağaza/Restoran',
            saglik_kamu: 'Kamu Sektörü: Sağlık Bakanlığı',
            meb: 'Kamu Sektörü: MEB',
        };
    } else if (kategori === 'sikayet') {
        secenekler = {
            is_yuku: 'Şikayet Sebebi: İş Yükü Artırılması',
            istifaya_zorlama: 'Şikayet Konusu: İstifaya Zorlama',
            azarlanma: 'Saldırı Tipi: Azarlanma/Karalanma',
            gormezden_gelme: 'Saldırı Tipi: Görmezden Gelme/İzole Edilme',
        };
    } else if (kategori === 'fail') {
        secenekler = {
            amir: 'Fail Statüsü: Amir',
            amir_ve_arkadas: 'Fail Statüsü: Amir ve İş Arkadaşları',
        };
    } else if (kategori === 'etki') {
        secenekler = {
            depresif: 'Psikolojik Etki: Depresif Bozukluk',
            kaygi: 'Psikolojik Etki: Kaygı Bozukluğu',
            ilac_tedavisi: 'Tedavi Şekli: İlaç Tedavisi',
            yas_kadin: 'Yaş Dağılımı: Kadın (24-28 Yaş)',
            yas_erkek: 'Yaş Dağılımı: Erkek (29-33 Yaş)',
        };
    }

    // Yeni seçenekleri ekle
    for (const [key, value] of Object.entries(secenekler)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = value;
        altKategoriSelect.appendChild(option);
    }
}

// Sayfa yüklendiğinde filtreleri başlat
window.onload = function() {
    updateFiltreler();
};

// ==============================================================================
// 3. SORGULAMA İŞLEMİ (Butona Tıklanınca Çalışır)
// ==============================================================================
function detayliSorgula() {
    const kategori = document.getElementById('f_kategori').value;
    const altKategori = document.getElementById('f_alt_kategori').value;
    const il = document.getElementById('f_il').value; // İl verisi şu an sadece bir veri için simüle ediliyor
    
    const sonucKarti = document.getElementById('sonucKarti');
    const defaultMessage = document.getElementById('default-message');
    
    // Veriyi çek
    let veriObjesi = mobbingVerileri[kategori] ? mobbingVerileri[kategori][altKategori] : null;

    if (!veriObjesi) {
        // Alt kategori seçilmediyse veya veri bulunamazsa
        sonucKarti.classList.add('hidden');
        defaultMessage.textContent = 'Üzgünüz, seçilen kombinasyona ait detaylı veri bulunamadı veya seçim yapılmadı.';
        defaultMessage.classList.remove('hidden');
        return;
    }

    // İl Filtresi Özelleştirmesi (Özel Sektör/İstanbul Örneği)
    if (kategori === 'sektor' && altKategori === 'genel_ozel' && il === 'Istanbul') {
        [cite_start]// Raporda İstanbul'un Özel Sektördeki Payı %27.56 olarak verilmiştir. [cite: 928]
        veriObjesi = mobbingVerileri.sektor.is_il_istanbul;
    }


    // Sonuçları Ekrana Bas
    document.querySelector('#sonucKarti .sonuc-baslik').textContent = document.getElementById('f_alt_kategori').options[document.getElementById('f_alt_kategori').selectedIndex].text;
    document.querySelector('#sonucKarti .big-rate').textContent = veriObjesi.oran;
    document.querySelector('#sonucKarti .veri-detay').textContent = veriObjesi.aciklama;
    
    sonucKarti.classList.remove('hidden');
    defaultMessage.classList.add('hidden');
}
