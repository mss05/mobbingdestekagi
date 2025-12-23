// ==============================================================================
// Dosya Adı: language.js
// Amaç: Site genelinde TR/EN dil geçişini ve metinleri yönetmek.
// ==============================================================================

const translations = {
    tr: {
        // --- HEADER (MENÜ) ---
        "nav_home": "Ana Sayfa",
        "nav_data": "Veri Merkezi",
        "nav_court": "Yargıtay",
        "nav_test": "Test",
        "nav_legal": "Hukuk",
        "nav_centers": "Merkezler",
        "nav_social": "Şeffaf Ağ",
        "nav_sign": "İmzala (ILO 190)",

        // --- ANA SAYFA (HERO) ---
        "hero_title": "Mobbing Bir İnsanlık Suçudur.",
        "hero_desc": "Türkiye, ILO 190 Sayılı Sözleşmeyi İmzalamalıdır! <br>Genç Kuşağın Onurlu Çalışma Hakkı İçin Mücadele Ediyoruz.",
        "btn_sign_hero": "İMZA KAMPANYASINA KATIL",
        "btn_crisis": "ACİL DESTEK (ALO 170)",
        "btn_anon": "Anonim Danışmanlık",
        "btn_test_hero": "Yargıtay Kararlı Test",
        
        "section_partners_title": "Güçlü İşbirliği, Güçlü Mücadele",
        "section_partners_desc": "Bu platform, aşağıdaki kurumların veri ve hukuk desteğiyle oluşturulmuştur:",
        
        // --- HAKKIMIZDA (BİZ KİMİZ) ---
        "about_title": "Biz Kimiz?",
        "about_desc": "Biz, iş hayatına yeni atılan, umut dolu ancak kırılgan bir dönemde bulunan genç profesyonellerin (özellikle <strong>18-30 yaş</strong>) sesi olmak üzere yola çıkan bir dayanışma platformuyuz. 2025 Raporlarına göre mobbing en çok 24-33 yaş aralığını hedef almaktadır. Yargıtay kararları ışığında haklarınızı öğrenmeniz için buradayız.",

        // --- VERİ MERKEZİ SAYFASI ---
        "page_data_title": "📊 Mobbing Veri ve İstatistik Merkezi",
        "page_data_desc": "Mobbing ile Mücadele Derneği'nin 2025 Raporu verilerini filtreleyerek sektörünüzdeki riskleri görün.",
        "lbl_category": "🔍 Kategori Seçin:",
        "lbl_detail": "📂 Detay Seçin:",
        "btn_analyze": "Analiz Et",

        // --- MOBBING TESTİ SAYFASI ---
        "page_test_title": "🧠 Yargıtay Kararlı Mobbing Testi",
        "page_test_desc": "Aşağıdaki sorular, gerçek <strong>Yargıtay Hukuk Daireleri</strong> kararlarına konu olmuş olaylardan derlenmiştir. Yaşadığınız durumun hukuki karşılığını öğrenmek için soruları cevaplayın.",

        // --- HUKUKİ DESTEK SAYFASI ---
        "page_legal_title": "⚖️ Mobbing Adalet Ağı",
        "page_legal_desc": "Gönüllü avukatlarımızdan ön danışmanlık almak için formu doldurun. Gizlilik esastır.",
        "form_topic": "Konu Başlığı:",
        "form_city": "Şehir:",
        "form_summary": "Olay Özeti:",
        "btn_submit": "Başvuruyu Gönder",

        // --- DESTEK MERKEZLERİ SAYFASI ---
        "page_centers_title": "📍 Size En Yakın Destek Noktaları",
        "page_centers_desc": "Resmi kurumlar, dernek merkezleri ve hukuki yardım noktaları.",

        // --- SOSYAL AĞ SAYFASI ---
        "page_social_title": "🗣️ Anonim Duygu ve Destek Ağı",
        "page_social_desc": "Burası bir ifşa platformu değil, bir dayanışma alanıdır.",
        "badge_anon": "%100 Anonim",
        "badge_legal": "Hukuki Ön Denetim",
        "badge_censor": "Kurum Adı Sansürlenir",

        // --- YARGITAY KARARLARI SAYFASI (EKSİK OLANLAR EKLENDİ) ---
        "page_court_title": "⚖️ Emsal Yargıtay Kararları Arşivi",
        "page_court_desc": "Mahkemelerin mobbing saydığı eylemler ve kararların özetleri.",
        "lbl_topic": "Konu:",
        "lbl_ruling": "Karar:",
        "court_1_title": "<i class='fas fa-gavel'></i> Yargıtay 9. Hukuk Dairesi (2014/37332)",
        "court_1_topic": "Sürekli haksızlık ve aşağılanma.",
        "court_1_ruling": "Teknik personelin sürekli aşağılanması ve ruh sağlığının bozulması, işçilik alacaklarının yanı sıra manevi tazminatı gerektiren psikolojik tacizdir.",
        "court_2_title": "<i class='fas fa-gavel'></i> Yargıtay 4. Hukuk Dairesi (2019/4695)",
        "court_2_topic": "Öğretmeni istifaya zorlama.",
        "court_2_ruling": "Mesleki yetersizlik dedikodusu çıkarmak, iş yükünü artırmak ve odaya çağırıp bağırmak; öğretmeni istifaya zorlamak amaçlı sistematik mobbingdir.",
        "court_3_title": "<i class='fas fa-gavel'></i> Yargıtay 9. Hukuk Dairesi (2020/14104)",
        "court_3_topic": "İşçiyi yıldırma taktikleri.",
        "court_3_ruling": "\"Ya çalışsın ya gitsin\" anlayışıyla yapılan haksız tutanaklar, görev yeri değişiklikleri ve ağır iş yükü, işçinin haklı fesih sebebidir ve tazminat gerektirir.",
        "court_4_title": "<i class='fas fa-gavel'></i> Yargıtay 22. Hukuk Dairesi (2013/30811)",
        "court_4_topic": "Ek Çalışılan Sürenin Ücretinin Ödenmemesi.",
        "court_4_ruling": "Günlük 12-13 saati bulan çalışma süreleri ve buna eşlik eden baskı ortamı, insan haklarına aykırıdır ve mobbing unsuru taşır.",
        "court_5_title": "<i class='fas fa-gavel'></i> Yargıtay 9. Hukuk Dairesi (2018/16436)",
        "court_5_topic": "Hakaret ve Yönetimin Sessizliği.",
        "court_5_ruling": "Departman sorumlusunun hakaretlerinin yönetime bildirilmesine rağmen önlem alınmaması, işverenin mobbingden sorumlu tutulmasına neden olur.",

        // --- FOOTER ---
        "footer_rights": "&copy; 2025 Mobbing Destek Ağı. Tüm Hakları Saklıdır."
    },
    en: {
        // --- HEADER (MENU) ---
        "nav_home": "Home",
        "nav_data": "Data Center",
        "nav_court": "Case Law",
        "nav_test": "Mobbing Test",
        "nav_legal": "Legal Help",
        "nav_centers": "Support Centers",
        "nav_social": "Transparent Net",
        "nav_sign": "Sign (ILO 190)",

        // --- HOME PAGE (HERO) ---
        "hero_title": "Mobbing is a Crime Against Humanity.",
        "hero_desc": "Turkey must sign the ILO Convention 190! <br>We fight for the Right to Decent Work for the Young Generation.",
        "btn_sign_hero": "JOIN THE CAMPAIGN",
        "btn_crisis": "EMERGENCY (ALO 170)",
        "btn_anon": "Anonymous Support",
        "btn_test_hero": "Take the Test",
        
        "section_partners_title": "Strong Cooperation, Strong Struggle",
        "section_partners_desc": "This platform was created with data and legal support from the following institutions:",
        
        // --- ABOUT US ---
        "about_title": "Who Are We?",
        "about_desc": "We are a solidarity platform setting out to be the voice of young professionals (especially <strong>18-30 years old</strong>) who are entering business life and are in a hopeful but fragile period. According to 2025 Reports, mobbing targets the 24-33 age range the most. We are here for you to learn your rights in the light of Supreme Court decisions.",

        // --- DATA CENTER PAGE ---
        "page_data_title": "📊 Mobbing Data & Statistics Center",
        "page_data_desc": "Filter the 2025 Report data of the Association for Combating Mobbing to see risks in your sector.",
        "lbl_category": "🔍 Select Category:",
        "lbl_detail": "📂 Select Detail:",
        "btn_analyze": "Analyze",

        // --- MOBBING TEST PAGE ---
        "page_test_title": "🧠 Supreme Court Mobbing Test",
        "page_test_desc": "The questions below are compiled from real <strong>Supreme Court</strong> cases. Answer the questions to learn the legal equivalent of your situation.",

        // --- LEGAL SUPPORT PAGE ---
        "page_legal_title": "⚖️ Mobbing Justice Network",
        "page_legal_desc": "Fill out the form to get preliminary advice from our volunteer lawyers. Privacy is essential.",
        "form_topic": "Subject:",
        "form_city": "City:",
        "form_summary": "Incident Summary:",
        "btn_submit": "Submit Application",

        // --- SUPPORT CENTERS PAGE ---
        "page_centers_title": "📍 Nearest Support Points",
        "page_centers_desc": "Official institutions, association centers, and legal aid points.",

        // --- SOCIAL NET PAGE ---
        "page_social_title": "🗣️ Anonymous Emotion & Support Net",
        "page_social_desc": "This is not an exposure platform, but a solidarity area.",
        "badge_anon": "%100 Anonymous",
        "badge_legal": "Legal Pre-check",
        "badge_censor": "Institutions Censored",

        // --- YARGITAY KARARLARI (TRANSLATED) ---
        "page_court_title": "⚖️ Precedent Supreme Court Decisions Archive",
        "page_court_desc": "Summaries of actions and decisions considered as mobbing by courts.",
        "lbl_topic": "Subject:",
        "lbl_ruling": "Ruling:",
        "court_1_title": "<i class='fas fa-gavel'></i> 9th Civil Chamber (2014/37332)",
        "court_1_topic": "Constant unfairness and humiliation.",
        "court_1_ruling": "Constant humiliation of technical staff and deterioration of mental health is psychological harassment requiring moral compensation in addition to labor receivables.",
        "court_2_title": "<i class='fas fa-gavel'></i> 4th Civil Chamber (2019/4695)",
        "court_2_topic": "Forcing teacher to resign.",
        "court_2_ruling": "Spreading rumors of professional incompetence, increasing workload, and shouting in the office is systematic mobbing aimed at forcing resignation.",
        "court_3_title": "<i class='fas fa-gavel'></i> 9th Civil Chamber (2020/14104)",
        "court_3_topic": "Intimidation tactics.",
        "court_3_ruling": "Unfair reports, changes of duty station, and heavy workload with a 'work or leave' mentality are just causes for termination and require compensation.",
        "court_4_title": "<i class='fas fa-gavel'></i> 22nd Civil Chamber (2013/30811)",
        "court_4_topic": "Non-payment of Overtime.",
        "court_4_ruling": "Working hours reaching 12-13 hours a day accompanied by a pressure environment is against human rights and constitutes mobbing.",
        "court_5_title": "<i class='fas fa-gavel'></i> 9th Civil Chamber (2018/16436)",
        "court_5_topic": "Insults and Management Silence.",
        "court_5_ruling": "Failure to take precautions despite reporting insults by the department supervisor causes the employer to be held responsible for mobbing.",

        // --- FOOTER ---
        "footer_rights": "&copy; 2025 Mobbing Support Network. All Rights Reserved."
    }
};

// DİL DEĞİŞTİRME FONKSİYONU
function changeLanguage(lang) {
    // 1. Seçimi kaydet
    localStorage.setItem('selectedLang', lang);

    // 2. Metinleri güncelle
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // 3. Butonların görünümünü güncelle
    const btnTr = document.getElementById('btn-tr');
    const btnEn = document.getElementById('btn-en');
    
    // Butonlar sayfada mevcutsa
    if(btnTr && btnEn) {
        if (lang === 'tr') {
            btnTr.classList.add('active-lang');
            btnEn.classList.remove('active-lang');
        } else {
            btnEn.classList.add('active-lang');
            btnTr.classList.remove('active-lang');
        }
    }
}

// Sayfa açıldığında dili hatırla ve uygula
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'tr';
    changeLanguage(savedLang);
});
