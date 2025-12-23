// ==============================================================================
// Dosya: language.js
// Amaç: Tüm metinlerin TR/EN karşılıkları ve Sayfa Yenileme Mantığı
// ==============================================================================

const translations = {
    tr: {
        // --- HEADER ---
        "nav_home": "Ana Sayfa",
        "nav_data": "Veri Merkezi",
        "nav_court": "Yargıtay",
        "nav_test": "Test",
        "nav_legal": "Hukuk",
        "nav_centers": "Merkezler",
        "nav_social": "Şeffaf Ağ",
        "nav_sign": "İmzala (ILO 190)",

        // --- ANA SAYFA ---
        "hero_title": "Mobbing Bir İnsanlık Suçudur.",
        "hero_desc": "Türkiye, ILO 190 Sayılı Sözleşmeyi İmzalamalıdır! <br>Genç Kuşağın Onurlu Çalışma Hakkı İçin Mücadele Ediyoruz.",
        "btn_sign_hero": "İMZA KAMPANYASINA KATIL",
        "btn_crisis": "ACİL DESTEK (ALO 170)",
        "btn_anon": "Anonim Danışmanlık",
        "btn_test_hero": "Yargıtay Kararlı Test",
        
        "section_partners_title": "Güçlü İşbirliği, Güçlü Mücadele",
        "section_partners_desc": "Bu platform, aşağıdaki kurumların veri ve hukuk desteğiyle oluşturulmuştur:",
        
        "about_title": "Biz Kimiz?",
        "about_desc": "Biz, iş hayatına yeni atılan, umut dolu ancak kırılgan bir dönemde bulunan genç profesyonellerin (özellikle <strong>18-30 yaş</strong>) sesi olmak üzere yola çıkan bir dayanışma platformuyuz. 2025 Raporlarına göre mobbing en çok 24-33 yaş aralığını hedef almaktadır. Yargıtay kararları ışığında haklarınızı öğrenmeniz için buradayız.",

        // --- VERİ MERKEZİ ---
        "page_data_title": "📊 Mobbing Veri ve İstatistik Merkezi",
        "page_data_desc": "Mobbing ile Mücadele Derneği'nin 2025 Raporu verilerini filtreleyerek sektörünüzdeki riskleri görün.",
        "lbl_search_title": "Detaylı Veri Sorgulama",
        "lbl_category": "🔍 Kategori:",
        "lbl_detail": "📂 Detay:",
        "btn_analyze": "Analiz Et",
        "opt_sector": "Sektör ve Kurum Dağılımı",
        "opt_fail": "Mobbing Yapan Kişi (Fail)",
        "opt_complaint": "Şikayet Konuları",
        "opt_effect": "Sağlık ve Psikolojik Etkiler",
        "opt_demo": "Demografi (Cinsiyet/Yaş)",

        // --- TEST SAYFASI ---
        "page_test_title": "🧠 Yargıtay Kararlı Mobbing Testi",
        "page_test_desc": "Aşağıdaki sorular, gerçek <strong>Yargıtay Hukuk Daireleri</strong> kararlarına konu olmuş olaylardan derlenmiştir. Yaşadığınız durumun hukuki karşılığını öğrenmek için soruları cevaplayın.",

        // --- HUKUKİ DESTEK SAYFASI (FORMLAR) ---
        "page_legal_title": "⚖️ Mobbing Adalet Ağı",
        "page_legal_desc": "Gönüllü avukatlarımızdan ön danışmanlık almak için formu doldurun. Gizlilik esastır.",
        "form_topic": "Konu Başlığı:",
        "ph_topic": "Örn: İstifaya Zorlama", // Placeholder
        "form_city": "Şehir:",
        "form_summary": "Olay Özeti:",
        "ph_summary": "Lütfen sistematik baskıyı özetleyin...", // Placeholder
        "lbl_email": "E-posta:",
        "chk_legal_confirm": "Verilerimin anonim olarak incelenmesini onaylıyorum.",
        "btn_submit": "Başvuruyu Gönder",

        // --- MERKEZLER ---
        "page_centers_title": "📍 Size En Yakın Destek Noktaları",
        "page_centers_desc": "Resmi kurumlar, dernek merkezleri ve hukuki yardım noktaları.",

        // --- SOSYAL AĞ (EKSİKLER GİDERİLDİ) ---
        "page_social_title": "🗣️ Anonim Duygu ve Destek Ağı",
        "page_social_desc": "Burası bir ifşa platformu değil, bir dayanışma alanıdır.",
        "badge_anon": "%100 Anonim",
        "badge_legal": "Hukuki Ön Denetim",
        "badge_censor": "Kurum Adı Sansürlenir",
        
        // Yayın Politikası Kutusu
        "policy_title": "YAYIN POLİTİKASI:",
        "policy_1": "Metinleriniz anında yayınlanmaz.",
        "policy_2": "Tüm gönderiler Hukuk ve Moderasyon Ekibi onayına düşer.",
        "policy_3": "Metin içinde yazdığınız Şirket veya Şahıs isimleri sansürlenerek (***) yayına alınır.",
        
        // Hikaye Formu
        "form_story_title": "Deneyimini Paylaş",
        "lbl_rumuz": "Rumuz (Takma Ad):",
        "ph_rumuz": "Örn: YorgunMühendis23",
        "lbl_sector": "Sektör:",
        "lbl_story": "Yaşadığınız Duygu ve Olay:",
        "ph_story": "Neler hissettiniz? İsim vermeden süreci anlatınız...",
        "warn_censor": "*Metin içinde kurum adı geçiyorsa sistem otomatik olarak onaya düşürecektir.",
        "chk_kvkk_text": "Yayın Politikası ve KVKK Aydınlatma Metni'ni okudum. Sansürü kabul ediyorum.",
        "btn_send_story": "İncelemeye Gönder",
        "feed_title": "📢 Editör Onayından Geçenler",
        "feed_desc": "Kişi ve kurum haklarına zarar vermeyen, sansürlenmiş deneyimler.",

        // --- YARGITAY KARARLARI ---
        "page_court_title": "⚖️ Emsal Yargıtay Kararları Arşivi",
        "page_court_desc": "Mahkemelerin mobbing saydığı eylemler ve kararların özetleri.",
        "lbl_topic_court": "Konu:",
        "lbl_ruling_court": "Karar:",
        "court_1_title": "Yargıtay 9. Hukuk Dairesi (2014/37332)",
        "court_1_topic": "Sürekli haksızlık ve aşağılanma.",
        "court_1_ruling": "Teknik personelin sürekli aşağılanması ve ruh sağlığının bozulması, manevi tazminatı gerektiren psikolojik tacizdir.",
        "court_2_title": "Yargıtay 4. Hukuk Dairesi (2019/4695)",
        "court_2_topic": "Öğretmeni istifaya zorlama.",
        "court_2_ruling": "Mesleki yetersizlik dedikodusu çıkarmak ve iş yükünü artırmak; istifaya zorlamak amaçlı sistematik mobbingdir.",
        "court_3_title": "Yargıtay 9. Hukuk Dairesi (2020/14104)",
        "court_3_topic": "İşçiyi yıldırma taktikleri.",
        "court_3_ruling": "\"Ya çalışsın ya gitsin\" anlayışıyla yapılan haksız tutanaklar ve görev yeri değişiklikleri tazminat gerektirir.",
        "court_4_title": "Yargıtay 22. Hukuk Dairesi (2013/30811)",
        "court_4_topic": "Ek Çalışılan Sürenin Ücretinin Ödenmemesi.",
        "court_4_ruling": "Günlük 12-13 saati bulan çalışma süreleri ve baskı ortamı, insan haklarına aykırıdır ve mobbing unsuru taşır.",
        "court_5_title": "Yargıtay 9. Hukuk Dairesi (2018/16436)",
        "court_5_topic": "Hakaret ve Yönetimin Sessizliği.",
        "court_5_ruling": "Hakaretlerin yönetime bildirilmesine rağmen önlem alınmaması, işverenin mobbingden sorumlu tutulmasına neden olur.",

        // --- FOOTER ---
        "footer_rights": "&copy; 2025 Mobbing Destek Ağı. Tüm Hakları Saklıdır."
    },
    en: {
        // --- HEADER ---
        "nav_home": "Home",
        "nav_data": "Data Center",
        "nav_court": "Case Law",
        "nav_test": "Mobbing Test",
        "nav_legal": "Legal Help",
        "nav_centers": "Support Centers",
        "nav_social": "Transparent Net",
        "nav_sign": "Sign (ILO 190)",

        // --- HOME ---
        "hero_title": "Mobbing is a Crime Against Humanity.",
        "hero_desc": "Turkey must sign the ILO Convention 190! <br>We fight for the Right to Decent Work for the Young Generation.",
        "btn_sign_hero": "JOIN THE CAMPAIGN",
        "btn_crisis": "EMERGENCY (ALO 170)",
        "btn_anon": "Anonymous Support",
        "btn_test_hero": "Take the Test",
        
        "section_partners_title": "Strong Cooperation, Strong Struggle",
        "section_partners_desc": "This platform was created with data and legal support from the following institutions:",
        
        "about_title": "Who Are We?",
        "about_desc": "We are a solidarity platform setting out to be the voice of young professionals (especially <strong>18-30 years old</strong>) who are entering business life and are in a hopeful but fragile period. According to 2025 Reports, mobbing targets the 24-33 age range the most. We are here for you to learn your rights in the light of Supreme Court decisions.",

        // --- DATA CENTER ---
        "page_data_title": "📊 Mobbing Data & Statistics Center",
        "page_data_desc": "Filter the 2025 Report data of the Association for Combating Mobbing to see risks in your sector.",
        "lbl_search_title": "Detailed Data Query",
        "lbl_category": "🔍 Category:",
        "lbl_detail": "📂 Detail:",
        "btn_analyze": "Analyze",
        "opt_sector": "Sector and Institution Distribution",
        "opt_fail": "Perpetrator (Who Mobs?)",
        "opt_complaint": "Subject of Complaints",
        "opt_effect": "Health and Psychological Effects",
        "opt_demo": "Demographics (Gender/Age)",

        // --- TEST PAGE ---
        "page_test_title": "🧠 Supreme Court Mobbing Test",
        "page_test_desc": "The questions below are compiled from real <strong>Supreme Court</strong> cases. Answer the questions to learn the legal equivalent of your situation.",

        // --- LEGAL PAGE (FIXED) ---
        "page_legal_title": "⚖️ Mobbing Justice Network",
        "page_legal_desc": "Fill out the form to get preliminary advice from our volunteer lawyers. Privacy is essential.",
        "form_topic": "Subject:",
        "ph_topic": "Ex: Forced Resignation", // Placeholder Fix
        "form_city": "City:",
        "form_summary": "Incident Summary:",
        "ph_summary": "Please summarize the systematic pressure...", // Placeholder Fix
        "lbl_email": "E-mail:",
        "chk_legal_confirm": "I confirm my data to be analyzed anonymously.",
        "btn_submit": "Submit Application",

        // --- CENTERS ---
        "page_centers_title": "📍 Nearest Support Points",
        "page_centers_desc": "Official institutions, association centers, and legal aid points.",

        // --- SOCIAL NET (FIXED) ---
        "page_social_title": "🗣️ Anonymous Emotion & Support Net",
        "page_social_desc": "This is not an exposure platform, but a solidarity area.",
        "badge_anon": "%100 Anonymous",
        "badge_legal": "Legal Pre-check",
        "badge_censor": "Institutions Censored",
        
        "policy_title": "PUBLICATION POLICY:",
        "policy_1": "Texts are not published immediately.",
        "policy_2": "All posts fall into Legal & Moderation approval.",
        "policy_3": "Company/Person names are censored (***).",
        
        "form_story_title": "Share Your Experience",
        "lbl_rumuz": "Nickname:",
        "ph_rumuz": "Ex: TiredEngineer23",
        "lbl_sector": "Sector:",
        "lbl_story": "Emotion & Event:",
        "ph_story": "What did you feel? Explain without giving names...",
        "warn_censor": "*System will automatically flag for approval if institution name is detected.",
        "chk_kvkk_text": "I read the Policy & KVKK. I accept censorship of names.",
        "btn_send_story": "Send for Review",
        "feed_title": "📢 Moderator Approved Posts",
        "feed_desc": "Anonymized experiences that do not violate rights.",

        // --- CASE LAW ---
        "page_court_title": "⚖️ Precedent Supreme Court Decisions Archive",
        "page_court_desc": "Summaries of actions and decisions considered as mobbing by courts.",
        "lbl_topic_court": "Subject:",
        "lbl_ruling_court": "Ruling:",
        "court_1_title": "9th Civil Chamber (2014/37332)",
        "court_1_topic": "Constant unfairness and humiliation.",
        "court_1_ruling": "Constant humiliation and deterioration of mental health is psychological harassment requiring moral compensation.",
        "court_2_title": "4th Civil Chamber (2019/4695)",
        "court_2_topic": "Forcing teacher to resign.",
        "court_2_ruling": "Spreading rumors, increasing workload, and shouting is systematic mobbing aimed at forcing resignation.",
        "court_3_title": "9th Civil Chamber (2020/14104)",
        "court_3_topic": "Intimidation tactics.",
        "court_3_ruling": "Unfair reports and duty station changes made with a 'work or leave' mentality require compensation.",
        "court_4_title": "22nd Civil Chamber (2013/30811)",
        "court_4_topic": "Non-payment of Overtime.",
        "court_4_ruling": "Working 12-13 hours a day with pressure constitutes mobbing.",
        "court_5_title": "9th Civil Chamber (2018/16436)",
        "court_5_topic": "Insults and Management Silence.",
        "court_5_ruling": "Failure to take precautions despite reported insults makes the employer responsible for mobbing.",

        // --- FOOTER ---
        "footer_rights": "&copy; 2025 Mobbing Support Network. All Rights Reserved."
    }
};

// DİL DEĞİŞTİRME FONKSİYONU
function changeLanguage(lang, reload = true) {
    localStorage.setItem('selectedLang', lang);

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

    // Butonların görünümünü güncelle
    const btnTr = document.getElementById('btn-tr');
    const btnEn = document.getElementById('btn-en');
    
    if(btnTr && btnEn) {
        if (lang === 'tr') {
            btnTr.classList.add('active-lang');
            btnEn.classList.remove('active-lang');
        } else {
            btnEn.classList.add('active-lang');
            btnTr.classList.remove('active-lang');
        }
    }

    // SAYFAYI YENİLE (Logic Scriptlerinin dili algılaması için)
    if (reload) {
        window.location.reload();
    }
}

// Sayfa açıldığında dili hatırla ve uygula
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'tr';
    changeLanguage(savedLang, false);
});
