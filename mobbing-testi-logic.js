// ==============================================================================
// Dosya: mobbing-testi-logic.js
// Amaç: 10 adet Yargıtay kararlı soruyu TR/EN dil seçeneğine göre yönetmek.
// ==============================================================================

// --- 1. TÜRKÇE SORULAR (SENİN LİSTEN) ---
const questionsTR = [
    {
        id: 1,
        text: "İş yerinde sürekli haksızlığa uğradığınızı, aşağılandığınızı ve bu yüzden ruh sağlığınızın bozulduğunu düşünüyor musunuz?",
        decision: "9. Hukuk Dairesi, 2016/8155 Kararı",
        detail: "Mahkeme, sürekli haksızlık, aşağılama ve ruh sağlığının bozulmasını iş yerinde psikolojik taciz (mobbing) olarak kabul etmiştir."
    },
    {
        id: 2,
        text: "Normal haklarınız (tazminat vb.) dışında, sürekli baskı gördünüz mü ve mesai ücretleriniz ödenmedi mi?",
        decision: "22. Hukuk Dairesi, 2014/19538 Kararı",
        detail: "Mali müşavir örneğinde olduğu gibi; sürekli baskı ve hakların ödenmemesi mobbing olarak değerlendirilmiştir."
    },
    {
        id: 3,
        text: "Yöneticileriniz veya iş arkadaşlarınız sizi istifa ettirmek için dedikodu çıkarıp, iş yükünüzü artırıp, onur kırıcı üslup kullanıyor mu?",
        decision: "4. Hukuk Dairesi, 2019/4695 Kararı",
        detail: "Bir öğretmene yapılan bu sistematik eylemler ve istifaya zorlama çabaları manevi tazminat gerektiren mobbing sayılmıştır."
    },
    {
        id: 4,
        text: "İş ortamından kaynaklı bir sağlık sorunu (örn: işitme kaybı) yaşadığınızda, bu durum yöneticiler tarafından görmezden gelindi mi?",
        decision: "9. Hukuk Dairesi, 2017/1000 Kararı",
        detail: "Çalışanın sağlığında meydana gelen kalıcı hasarların ve psikolojik sorunların yönetimce yok sayılması mobbing kapsamında değerlendirilmiştir."
    },
    {
        id: 5,
        text: "İşvereniniz sizi yıldırmak için sürekli görev yerinizi değiştiriyor, yapabileceğinizden fazla iş yüklüyor ve haksız tutanaklar tutuyor mu?",
        decision: "9. Hukuk Dairesi, 2020/14104 Kararı",
        detail: "Sırf işçiyi bezdirmek ve istifaya zorlamak için yapılan yer değişiklikleri ve haksız tutanaklar mobbingin en net kanıtlarındandır."
    },
    {
        id: 6,
        text: "Günlük 12-13 saat gibi çok uzun süreler çalıştırılıyor ve buna rağmen sürekli baskı görüyor musunuz?",
        decision: "22. Hukuk Dairesi, 2013/30811 Kararı",
        detail: "Aşırı çalışma saatleri ve üzerindeki sistematik baskı, Yargıtay tarafından işçinin haklı fesih sebebi ve mobbing olarak görülmüştür."
    },
    {
        id: 7,
        text: "Göreviniz olmayan işleri yapmaya zorlanıyor musunuz ve sürekli görev yeriniz değiştiriliyor mu?",
        decision: "7. Hukuk Dairesi, 2016/9309 Kararı",
        detail: "Devlet hastanesindeki veri hazırlama personelinin sürekli yerinin değiştirilmesi ve görev dışı iş verilmesi mobbing sayılmıştır."
    },
    {
        id: 8,
        text: "Baskı yüzünden istemediğiniz halde istifa dilekçesi imzaladınız mı?",
        decision: "22. Hukuk Dairesi, 2014/729 Kararı",
        detail: "İrade dışı, baskı altında alınan istifa dilekçeleri geçersizdir. Bu durum 'yıldırma amaçlı gizli işten çıkarma' olarak değerlendirilir."
    },
    {
        id: 9,
        text: "Yöneticiniz size hakaret ediyor ve bunu üst yönetime bildirmenize rağmen sonuç alamıyor musunuz?",
        decision: "9. Hukuk Dairesi, 2018/16436 Kararı",
        detail: "Yönetime bildirilen hakaretlerin çözümsüz kalması ve çalışanın istifaya zorlanması tazminat gerektiren bir mobbing eylemidir."
    },
    {
        id: 10,
        text: "Yöneticiniz ve kurum yetkilileri, sistemli olarak sizi dışlayıp psikolojik baskı uyguluyor mu?",
        decision: "9. Hukuk Dairesi, 2014/29487 Kararı",
        detail: "Belediye örneğinde olduğu gibi; yöneticilerin bilgisi dahilinde yapılan sistematik baskı ve dışlama açıkça mobbingdir."
    }
];

// --- 2. İNGİLİZCE SORULAR (TERCÜME EDİLMİŞ) ---
const questionsEN = [
    {
        id: 1,
        text: "Do you feel constantly treated unfairly, humiliated, and your mental health deteriorating at work?",
        decision: "9th Civil Chamber, 2016/8155",
        detail: "The court accepted constant unfairness, humiliation, and deterioration of mental health as psychological harassment (mobbing)."
    },
    {
        id: 2,
        text: "Apart from normal rights (severance etc.), were you subjected to constant pressure and your overtime not paid?",
        decision: "22nd Civil Chamber, 2014/19538",
        detail: "As in the case of the financial advisor; constant pressure and non-payment of rights were evaluated as mobbing."
    },
    {
        id: 3,
        text: "Do your managers or colleagues spread rumors, increase your workload, and use humiliating language to force you to resign?",
        decision: "4th Civil Chamber, 2019/4695",
        detail: "Systematic actions and efforts to force a teacher to resign were considered mobbing requiring moral compensation."
    },
    {
        id: 4,
        text: "When you had a work-related health issue (e.g., hearing loss), was this situation ignored by the management?",
        decision: "9th Civil Chamber, 2017/1000",
        detail: "Ignoring permanent damage to the employee's health and psychological problems by the administration was evaluated within the scope of mobbing."
    },
    {
        id: 5,
        text: "Does your employer constantly change your duty station, assign excessive workload, and keep unfair reports to intimidate you?",
        decision: "9th Civil Chamber, 2020/14104",
        detail: "Relocations and unfair reports made solely to intimidate and force the worker to resign are among the clearest evidence of mobbing."
    },
    {
        id: 6,
        text: "Are you made to work very long hours like 12-13 hours a day and still face constant pressure?",
        decision: "22nd Civil Chamber, 2013/30811",
        detail: "Excessive working hours and systematic pressure were seen by the Supreme Court as a just cause for termination by the worker and mobbing."
    },
    {
        id: 7,
        text: "Are you forced to do tasks outside your duty and is your duty station constantly changed?",
        decision: "7th Civil Chamber, 2016/9309",
        detail: "Constant relocation and assignment of non-duty tasks to data preparation personnel in a state hospital were considered mobbing."
    },
    {
        id: 8,
        text: "Did you sign a resignation letter unwillingly due to pressure?",
        decision: "22nd Civil Chamber, 2014/729",
        detail: "Resignation letters taken under pressure against will are invalid. This situation is evaluated as 'secret dismissal aimed at intimidation'."
    },
    {
        id: 9,
        text: "Does your manager insult you and you get no results even though you report it to upper management?",
        decision: "9th Civil Chamber, 2018/16436",
        detail: "Insults reported to management remaining unresolved and forcing the employee to resign is a mobbing action requiring compensation."
    },
    {
        id: 10,
        text: "Do your manager and institution officials systematically exclude you and apply psychological pressure?",
        decision: "9th Civil Chamber, 2014/29487",
        detail: "As in the municipality example; systematic pressure and exclusion carried out with the knowledge of administrators is clearly mobbing."
    }
];

// --- 3. DİL KONTROLÜ VE SORU GETİRME ---
function getQuestions() {
    const lang = localStorage.getItem('selectedLang') || 'tr';
    return lang === 'en' ? questionsEN : questionsTR;
}

// --- 4. TESTİ BAŞLATMA ---
function initQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const currentQuestions = getQuestions();
    const lang = localStorage.getItem('selectedLang') || 'tr';
    
    // Buton etiketleri
    const btnYes = lang === 'en' ? "Yes" : "Evet";
    const btnNo = lang === 'en' ? "No" : "Hayır";
    const qPrefix = lang === 'en' ? "Question" : "Soru";

    quizContainer.innerHTML = ""; // Önce temizle (Dil değişirse üstüne binmesin)

    currentQuestions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'card quiz-card';
        card.innerHTML = `
            <h3>${qPrefix} ${index + 1}</h3>
            <p>${q.text}</p>
            <div class="quiz-buttons">
                <button class="btn btn-tertiary" onclick="checkAnswer(${q.id}, true)">${btnYes}</button>
                <button class="btn btn-secondary" style="color:var(--primary-color); border-color:var(--primary-color);" onclick="checkAnswer(${q.id}, false)">${btnNo}</button>
            </div>
        `;
        quizContainer.appendChild(card);
    });
}

// --- 5. CEVAP KONTROLÜ VE MODAL ---
function checkAnswer(id, isYes) {
    const lang = localStorage.getItem('selectedLang') || 'tr';
    const currentQuestions = getQuestions();
    const question = currentQuestions.find(q => q.id === id);
    
    const modal = document.getElementById('resultModal');
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDesc');
    const decision = document.getElementById('modalDecision');
    const detail = document.getElementById('modalDetail');
    const icon = document.getElementById('modalIcon');

    modal.classList.remove('hidden');
    decision.innerText = question.decision;
    detail.innerText = question.detail;

    // Sonuç Mesajlarını Dile Göre Ayarla
    if (isYes) {
        // EVET CEVABI
        icon.innerHTML = "✅";
        icon.style.color = "#27ae60";
        if(lang === 'en') {
            title.innerText = "This is a Mobbing Indicator!";
            title.style.color = "#27ae60";
            desc.innerHTML = "This situation is defined as <strong>mobbing</strong> by the Supreme Court. You have legal rights.";
        } else {
            title.innerText = "Bu Bir Mobbing Göstergesidir!";
            title.style.color = "#27ae60";
            desc.innerHTML = "Yaşadığınız bu durum, Yargıtay tarafından <strong>mobbing (psikolojik taciz)</strong> olarak tanımlanmıştır. Hukuki haklarınız bulunmaktadır.";
        }
    } else {
        // HAYIR CEVABI
        icon.innerHTML = "⚠️";
        icon.style.color = "#e67e22";
        if(lang === 'en') {
            title.innerText = "Note: This Action is Mobbing!";
            title.style.color = "#e67e22";
            desc.innerHTML = "Even if you are not experiencing it, this is considered <strong>mobbing</strong> in law. Being aware is important.";
        } else {
            title.innerText = "Dikkat: Bu Eylem Mobbing Sayılır!";
            title.style.color = "#e67e22";
            desc.innerHTML = "Siz yaşamıyor olsanız bile, bu durum hukukumuzda <strong>mobbing</strong> olarak kabul edilir. Bilinçli olmak önemlidir.";
        }
    }
}

function closeModal() {
    document.getElementById('resultModal').classList.add('hidden');
}

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', initQuiz);
