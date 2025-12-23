// ==============================================================================
// Dosya: sosyal-ag-logic.js
// Amaç: Anonim hikaye paylaşımı, KVKK onayı ve TR/EN dil desteği
// ==============================================================================

// 1. MODAL İŞLEMLERİ (KVKK Penceresi)
function openKvkkModal() {
    document.getElementById('kvkkModal').classList.remove('hidden');
}

function closeKvkkModal() {
    document.getElementById('kvkkModal').classList.add('hidden');
}

// 2. FORM GÖNDERME İŞLEMİ (Bilingual Strict Moderation)
function submitStory(e) {
    e.preventDefault(); 
    
    // Geçerli Dili Al
    const lang = localStorage.getItem('selectedLang') || 'tr';

    const rumuz = document.getElementById('rumuz').value;
    const kvkk = document.getElementById('kvkkOnay').checked;

    // KVKK Onay Kontrolü (Dile Göre Uyarı)
    if (!kvkk) {
        const alertMsg = lang === 'en' 
            ? "Please accept the Publishing Policy and KVKK text." 
            : "Lütfen Yayın Politikası ve KVKK metnini onaylayınız.";
        alert(alertMsg);
        return;
    }

    // METİN DEĞİŞKENLERİ (TR/EN)
    const txtTitle = lang === 'en' ? "Under Review" : "İncelemeye Alındı";
    const txtThanks = lang === 'en' ? "Thank you" : "Teşekkürler";
    const txtMainMsg = lang === 'en' 
        ? "Your post has been sent to the <strong>Legal and Moderation Pool</strong>." 
        : "Paylaşımınız <strong>Hukuk ve Moderasyon Havuzuna</strong> iletilmiştir.";
    
    const txtProcessTitle = lang === 'en' ? "How does the process work?" : "Süreç Nasıl İşler?";
    const txtStep1 = lang === 'en' ? "Editors will read the text." : "Editörlerimiz metni okuyacak.";
    const txtStep2 = lang === 'en' ? "Company/person names will be censored ([***])." : "Varsa <u>kurum/şahıs isimleri</u> sansürlenecek ([***]).";
    const txtStep3 = lang === 'en' ? "It will be published after GDPR compliance." : "KVKK'ya uygun hale getirilip yayınlanacak.";
    const txtBtn = lang === 'en' ? "Return to Form" : "Forma Dön";

    // EKRANI TEMİZLE VE DİNAMİK MESAJI GÖSTER
    const container = document.getElementById('shareBox');
    
    container.innerHTML = `
        <div class="approval-box" style="text-align:center; padding:50px 20px; animation: fadeIn 0.5s;">
            <div style="font-size:4rem; color:#2ecc71; margin-bottom:20px;">
                <i class="fas fa-clipboard-check"></i>
            </div>
            <h2 style="color:#2c3e50; margin-bottom:15px;">${txtTitle}</h2>
            <p style="font-size:1.1rem; color:#555;">${txtThanks} <strong>${rumuz}</strong>.</p>
            <br>
            <p>${txtMainMsg}</p>
            <div style="background:#f8f9fa; padding:15px; margin:20px 0; border-radius:5px; border-left:4px solid #f39c12; text-align:left;">
                <strong><i class="fas fa-info-circle"></i> ${txtProcessTitle}</strong>
                <ul style="margin-top:5px; padding-left:20px; font-size:0.9rem; color:#666;">
                    <li>${txtStep1}</li>
                    <li>${txtStep2}</li>
                    <li>${txtStep3}</li>
                </ul>
            </div>
            <button class="btn btn-secondary" onclick="location.reload()">${txtBtn}</button>
        </div>
    `;
}

// 3. SAYFA YÜKLENDİĞİNDE: Statik Kartları Çevir (Feed Kısmı)
document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('selectedLang') || 'tr';
    
    // Sadece İngilizce seçiliyse aşağıdaki statik alanları değiştir
    if (lang === 'en') {
        
        // Tarihleri güncelle
        const dates = document.querySelectorAll('.date');
        dates.forEach(d => {
            if(d.innerText.includes('Bugün')) d.innerText = d.innerText.replace('Bugün', 'Today');
            if(d.innerText.includes('Dün')) d.innerText = d.innerText.replace('Dün', 'Yesterday');
        });

        // Durumları güncelle (Onaylı vb.)
        const statuses = document.querySelectorAll('.status');
        statuses.forEach(s => {
            if(s.innerText.includes('Gizlenerek')) s.innerHTML = '<i class="fas fa-check-double"></i> Anonymized & Approved';
            if(s.innerText.includes('Moderatör')) s.innerHTML = '<i class="fas fa-check-circle"></i> Moderator Approved';
        });

        // Sektör etiketlerini güncelle
        const tags = document.querySelectorAll('.sektor-tag');
        tags.forEach(t => {
            if(t.innerText === 'Bilişim') t.innerText = 'IT Sector';
            if(t.innerText === 'Perakende') t.innerText = 'Retail';
        });

        // Form Placeholder'larını güncelle
        const rumuzInput = document.getElementById('rumuz');
        if(rumuzInput) rumuzInput.placeholder = "Ex: TiredEngineer23";

        const hikayeInput = document.getElementById('hikaye');
        if(hikayeInput) hikayeInput.placeholder = "What did you feel? Explain without giving real names...";

        const sektorSelect = document.getElementById('sektor');
        if(sektorSelect && sektorSelect.options[0].text === "Seçiniz...") {
            sektorSelect.options[0].text = "Select...";
            // Basitçe diğer seçenekleri de değiştirebiliriz
            Array.from(sektorSelect.options).forEach(opt => {
                if(opt.text === "Sanayi / Üretim") opt.text = "Industry / Production";
                if(opt.text === "Mağazacılık / Perakende") opt.text = "Retail";
                if(opt.text === "Sağlık") opt.text = "Health";
                if(opt.text === "Eğitim") opt.text = "Education";
                if(opt.text === "Diğer") opt.text = "Other";
            });
        }
    }
});
