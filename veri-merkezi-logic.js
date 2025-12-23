// ==============================================================================
// Dosya: veri-merkezi-logic.js
// Amaç: TR/EN Uyumlu Veri Sorgulama
// ==============================================================================

const mobbingVerileri = {
    sektor: {
        genel: {
            ozel: { oran: '81%', aciklama: { tr: 'Başvuruların büyük çoğunluğu Özel Sektörden.', en: 'Majority of applications are from Private Sector.' } },
            kamu: { oran: '19%', aciklama: { tr: 'Başvuruların %19’u Kamu kurumlarından.', en: '19% of applications come from Public Institutions.' } }
        },
        ozel_detay: {
            sanayi: { oran: '6.24%', aciklama: { tr: 'Özelde en çok başvuru Sanayi sektöründen.', en: 'Most applications in private sector: Industry.' } },
            magaza: { oran: '5.56%', aciklama: { tr: 'Mağaza/Market sektörü ikinci sırada.', en: 'Retail sector is second.' } }
        },
        kamu_detay: {
            saglik: { oran: '10.82%', aciklama: { tr: 'Kamuda lider: Sağlık Bakanlığı.', en: 'Public leader: Ministry of Health.' } },
            meb: { oran: '5.32%', aciklama: { tr: 'MEB (Öğretmenler) ikinci sırada.', en: 'Ministry of Education is second.' } }
        }
    },
    fail: {
        amir: { oran: '61.29%', aciklama: { tr: 'Mobbingi en çok "Birinci Amir" yapıyor.', en: 'First-line managers are the top mobbers.' } },
        arkadas: { oran: '3.12%', aciklama: { tr: 'İş arkadaşı mobbingi düşük oranda.', en: 'Peer mobbing rate is low.' } }
    },
    sikayet: {
        sebepler: {
            isyuku: { oran: '20.20%', aciklama: { tr: 'En büyük şikayet: İş Yükünün Artırılması.', en: 'Top complaint: Increased Workload.' } },
            istifa: { oran: '19.95%', aciklama: { tr: 'İkinci sırada: İstifaya zorlama.', en: 'Second: Forcing resignation.' } }
        }
    },
    etki: {
        psikolojik: {
            depresyon: { oran: '35.53%', aciklama: { tr: 'Mağdurlarda Depresif Bozukluk yaygın.', en: 'Depressive Disorder is common.' } },
            kaygi: { oran: '22.20%', aciklama: { tr: 'Kaygı Bozukluğu ikinci sırada.', en: 'Anxiety Disorder is second.' } }
        }
    }
};

function updateFiltreler() {
    const kategori = document.getElementById('f_kategori').value;
    const altSelect = document.getElementById('f_alt_kategori');
    const lang = localStorage.getItem('selectedLang') || 'tr';
    
    altSelect.innerHTML = '';
    let options = {};

    // DİL KONTROLÜNE GÖRE SEÇENEKLER
    if (lang === 'en') {
        if(kategori === 'sektor') options = { 'genel.ozel': 'Private Sector', 'genel.kamu': 'Public Sector', 'ozel_detay.sanayi': 'Industry', 'ozel_detay.magaza': 'Retail', 'kamu_detay.saglik': 'Ministry of Health', 'kamu_detay.meb': 'Ministry of Education' };
        else if(kategori === 'fail') options = { 'fail.amir': 'Direct Manager', 'fail.arkadas': 'Colleague' };
        else if(kategori === 'sikayet') options = { 'sikayet.sebepler.isyuku': 'Increased Workload', 'sikayet.sebepler.istifa': 'Forced Resignation' };
        else if(kategori === 'etki') options = { 'etki.psikolojik.depresyon': 'Depression', 'etki.psikolojik.kaygi': 'Anxiety' };
        else options = { '': 'Select Category First' };
    } else {
        // TÜRKÇE
        if(kategori === 'sektor') options = { 'genel.ozel': 'Özel Sektör', 'genel.kamu': 'Kamu Sektörü', 'ozel_detay.sanayi': 'Sanayi', 'ozel_detay.magaza': 'Mağaza/Market', 'kamu_detay.saglik': 'Sağlık Bakanlığı', 'kamu_detay.meb': 'MEB (Öğretmen)' };
        else if(kategori === 'fail') options = { 'fail.amir': 'Doğrudan Amir', 'fail.arkadas': 'İş Arkadaşı' };
        else if(kategori === 'sikayet') options = { 'sikayet.sebepler.isyuku': 'İş Yükü Artırma', 'sikayet.sebepler.istifa': 'İstifaya Zorlama' };
        else if(kategori === 'etki') options = { 'etki.psikolojik.depresyon': 'Depresif Bozukluk', 'etki.psikolojik.kaygi': 'Kaygı Bozukluğu' };
        else options = { '': 'Önce Kategori Seçiniz' };
    }

    for (let key in options) {
        let opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = options[key];
        altSelect.appendChild(opt);
    }
}

function detayliSorgula() {
    const path = document.getElementById('f_alt_kategori').value.split('.');
    const kart = document.getElementById('sonucKarti');
    const lang = localStorage.getItem('selectedLang') || 'tr';
    
    let veri = mobbingVerileri;
    for (let i = 0; i < path.length; i++) {
        if(veri[path[i]]) veri = veri[path[i]];
        else return;
    }

    if(veri && veri.oran) {
        const title = document.getElementById('f_alt_kategori').options[document.getElementById('f_alt_kategori').selectedIndex].text;
        document.querySelector('.sonuc-baslik').innerText = title;
        document.querySelector('.big-rate').innerText = veri.oran;
        document.querySelector('.veri-detay').innerText = veri.aciklama[lang];
        kart.classList.remove('hidden');
    }
}

window.onload = updateFiltreler;
