// ==============================================================================
// Dosya Adı: language.js
// Amacı: Site genelinde Türkçe - İngilizce geçişini sağlamak.
// ==============================================================================

const translations = {
    tr: {
        // MENÜ (HEADER)
        "nav_home": "Ana Sayfa",
        "nav_data": "Veri Merkezi",
        "nav_court": "Yargıtay",
        "nav_test": "Test",
        "nav_legal": "Hukuk",
        "nav_centers": "Merkezler",
        "nav_social": "Şeffaf Ağ",
        "nav_sign": "İmzala (ILO 190)",

        // ANA SAYFA (HERO)
        "hero_title": "Mobbing Bir İnsanlık Suçudur.",
        "hero_desc": "Türkiye, ILO 190 Sayılı Sözleşmeyi İmzalamalıdır! <br>Genç Kuşağın Onurlu Çalışma Hakkı İçin Mücadele Ediyoruz.",
        "btn_sign_hero": "İMZA KAMPANYASINA KATIL",
        "btn_crisis": "ACİL DESTEK (ALO 170)",
        "btn_anon": "Anonim Danışmanlık",
        "btn_test_hero": "Yargıtay Kararlı Test",

        // HAKKIMIZDA BÖLÜMÜ
        "section_partners_title": "Güçlü İşbirliği, Güçlü Mücadele",
        "section_partners_desc": "Bu platform, aşağıdaki kurumların veri ve hukuk desteğiyle oluşturulmuştur:",
        "about_title": "Biz Kimiz?",
        "about_desc": "Biz, iş hayatına yeni atılan, umut dolu ancak kırılgan bir dönemde bulunan genç profesyonellerin (özellikle 18-30 yaş) sesi olmak üzere yola çıkan bir dayanışma platformuyuz. 2025 Raporlarına göre mobbing en çok 24-33 yaş aralığını hedef almaktadır.",
        
        // FOOTER
        "footer_rights": "&copy; 2025 Mobbing Destek Ağı. Tüm Hakları Saklıdır."
    },
    en: {
        // MENU (HEADER)
        "nav_home": "Home",
        "nav_data": "Data Center",
        "nav_court": "Case Law",
        "nav_test": "Mobbing Test",
        "nav_legal": "Legal Help",
        "nav_centers": "Support Centers",
        "nav_social": "Transparent Net",
        "nav_sign": "Sign (ILO 190)",

        // HOME (HERO)
        "hero_title": "Mobbing is a Crime Against Humanity.",
        "hero_desc": "Turkey must sign the ILO Convention 190! <br>We fight for the Right to Decent Work for the Young Generation.",
        "btn_sign_hero": "JOIN THE CAMPAIGN",
        "btn_crisis": "EMERGENCY (ALO 170)",
        "btn_anon": "Anonymous Support",
        "btn_test_hero": "Take the Test",

        // ABOUT SECTION
        "section_partners_title": "Strong Cooperation, Strong Struggle",
        "section_partners_desc": "This platform was created with data and legal support from the following institutions:",
        "about_title": "Who Are We?",
        "about_desc": "We are a solidarity platform setting out to be the voice of young professionals (especially 18-30 years old) who are entering business life. According to 2025 Reports, mobbing targets the 24-33 age range the most.",

        // FOOTER
        "footer_rights": "&copy; 2025 Mobbing Support Network. All Rights Reserved."
    }
};

// DİL DEĞİŞTİRME FONKSİYONU
function changeLanguage(lang) {
    // 1. Dil tercihini kaydet (Sayfa yenilenince hatırlaması için)
    localStorage.setItem('selectedLang', lang);

    // 2. Tüm "data-lang" etiketli elementleri bul ve güncelle
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            // Eğer element bir input ise placeholder'ı değiştir, değilse içeriği
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key]; // innerHTML kullanıyoruz ki <br> etiketleri çalışsın
            }
        }
    });

    // 3. Buton Görünümünü Güncelle (Aktif olanı koyu yap)
    document.getElementById('btn-tr').classList.toggle('active-lang', lang === 'tr');
    document.getElementById('btn-en').classList.toggle('active-lang', lang === 'en');
}

// SAYFA YÜKLENDİĞİNDE ÇALIŞACAK KOD
document.addEventListener('DOMContentLoaded', () => {
    // Daha önce seçilen dili al, yoksa Türkçe varsay
    const savedLang = localStorage.getItem('selectedLang') || 'tr';
    changeLanguage(savedLang);
});
