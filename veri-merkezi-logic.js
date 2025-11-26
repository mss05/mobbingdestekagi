// VERİLER (JSON)
const mobbingVerileri = {
    sektor: {
        ozel: {oran: '81%', aciklama: 'Başvuruların %81’i Özel Sektör çalışanlarından gelmektedir.'},
        kamu: {oran: '19%', aciklama: 'Başvuruların %19’u Kamu kurumlarından gelmektedir.'},
        sanayi: {oran: '6.24%', aciklama: 'Özel sektörde en riskli alan: Sanayi Sektörü.'},
        saglik: {oran: '10.82%', aciklama: 'Kamuda en çok başvuru Sağlık Bakanlığı personelinden gelmektedir.'}
    },
    fail: {
        amir: {oran: '61.29%', aciklama: 'Mobbing uygulayanların %61’i birinci derece amirdir.'},
        arkadas: {oran: '3.12%', aciklama: 'İş arkadaşı tarafından yapılan mobbing oranı düşüktür.'}
    },
    sikayet: {
        isyuku: {oran: '20.20%', aciklama: 'En yaygın şikayet sebebi: İş Yükünün Artırılması.'},
        istifa: {oran: '19.95%', aciklama: 'İstifaya zorlama en sık görülen ikinci yöntemdir.'}
    },
    etki: {
        depresyon: {oran: '35.53%', aciklama: 'Mağdurların %35’inde Depresif Bozukluk görülmüştür.'},
        kaygi: {oran: '22.20%', aciklama: 'Mağdurlarda Kaygı Bozukluğu (Anksiyete) yaygındır.'}
    }
};

// FİLTRELERİ GÜNCELLE
function updateFiltreler() {
    const kategori = document.getElementById('f_kategori').value;
    const altSelect = document.getElementById('f_alt_kategori');
    altSelect.innerHTML = '';

    let options = {};

    if(kategori === 'sektor') {
        options = {ozel: 'Özel Sektör (Genel)', kamu: 'Kamu Sektörü (Genel)', sanayi: 'Sanayi Sektörü', saglik: 'Sağlık Bakanlığı'};
    } else if(kategori === 'fail') {
        options = {amir: 'Amir / Yönetici', arkadas: 'İş Arkadaşı'};
    } else if(kategori === 'sikayet') {
        options = {isyuku: 'İş Yükü Artırma', istifa: 'İstifaya Zorlama'};
    } else if(kategori === 'etki') {
        options = {depresyon: 'Depresif Bozukluk', kaygi: 'Kaygı Bozukluğu'};
    }

    for (let key in options) {
        let opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = options[key];
        altSelect.appendChild(opt);
    }
}

// SORGULA
function detayliSorgula() {
    const kat = document.getElementById('f_kategori').value;
    const alt = document.getElementById('f_alt_kategori').value;
    const kart = document.getElementById('sonucKarti');

    if(mobbingVerileri[kat] && mobbingVerileri[kat][alt]) {
        const veri = mobbingVerileri[kat][alt];
        document.querySelector('.sonuc-baslik').innerText = document.getElementById('f_alt_kategori').options[document.getElementById('f_alt_kategori').selectedIndex].text;
        document.querySelector('.big-rate').innerText = veri.oran;
        document.querySelector('.veri-detay').innerText = veri.aciklama;
        kart.classList.remove('hidden');
        kart.style.display = 'block';
    }
}

// Sayfa açılınca filtreleri doldur
window.onload = updateFiltreler;
