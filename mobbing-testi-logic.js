// PDF'ten Çekilen 10 Soru ve Yargıtay Kararları
const questions = [
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

// Sayfa Yüklendiğinde Soruları Oluştur
const quizContainer = document.getElementById('quiz-container');

function initQuiz() {
    questions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'card quiz-card';
        card.innerHTML = `
            <h3>Soru ${index + 1}</h3>
            <p>${q.text}</p>
            <div class="quiz-buttons">
                <button class="btn btn-tertiary" onclick="checkAnswer(${q.id}, true)">Evet</button>
                <button class="btn btn-secondary" style="color:var(--primary-color); border-color:var(--primary-color);" onclick="checkAnswer(${q.id}, false)">Hayır</button>
            </div>
        `;
        quizContainer.appendChild(card);
    });
}

// Cevap Kontrolü ve Modal Açma
function checkAnswer(id, isYes) {
    const question = questions.find(q => q.id === id);
    const modal = document.getElementById('resultModal');
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDesc');
    const decision = document.getElementById('modalDecision');
    const detail = document.getElementById('modalDetail');
    const icon = document.getElementById('modalIcon');

    modal.classList.remove('hidden');
    decision.innerText = question.decision;
    detail.innerText = question.detail;

    if (isYes) {
        // Kullanıcı "Evet" dedi (Bu bir mobbing durumudur)
        icon.innerHTML = "✅";
        title.innerText = "Bu Bir Mobbing Göstergesidir!";
        title.style.color = "#27ae60";
        desc.innerHTML = "Yaşadığınız bu durum, Yargıtay tarafından <strong>mobbing (psikolojik taciz)</strong> olarak tanımlanmıştır. Hukuki haklarınız bulunmaktadır.";
    } else {
        // Kullanıcı "Hayır" dedi (Ama soru aslında bir mobbing örneğidir)
        icon.innerHTML = "⚠️";
        title.innerText = "Dikkat: Bu Eylem Mobbing Sayılır!";
        title.style.color = "#e67e22";
        desc.innerHTML = "Siz yaşamıyor olsanız bile, bu durum hukukumuzda <strong>mobbing</strong> olarak kabul edilir. Bilinçli olmak önemlidir.";
    }
}

function closeModal() {
    document.getElementById('resultModal').classList.add('hidden');
}

// Başlat
initQuiz();
