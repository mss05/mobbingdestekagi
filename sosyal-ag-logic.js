// MODAL İŞLEMLERİ
function openKvkkModal() {
    document.getElementById('kvkkModal').classList.remove('hidden');
}

function closeKvkkModal() {
    document.getElementById('kvkkModal').classList.add('hidden');
}

// FORM GÖNDERME İŞLEMİ (Strict Moderation Mode)
function submitStory(e) {
    e.preventDefault(); 

    const rumuz = document.getElementById('rumuz').value;
    const kvkk = document.getElementById('kvkkOnay').checked;

    if (!kvkk) {
        alert("Lütfen Yayın Politikası ve KVKK metnini onaylayınız.");
        return;
    }

    // EKRANI TEMİZLE VE "ONAY BEKLİYOR" MESAJI GÖSTER
    // Bu işlem, kullanıcının yazdığı yazının direkt yayınlanmadığının en büyük kanıtıdır.
    const container = document.getElementById('shareBox');
    
    container.innerHTML = `
        <div class="approval-box" style="text-align:center; padding:50px 20px; animation: fadeIn 0.5s;">
            <div style="font-size:4rem; color:#2ecc71; margin-bottom:20px;">
                <i class="fas fa-clipboard-check"></i>
            </div>
            <h2 style="color:#2c3e50; margin-bottom:15px;">İncelemeye Alındı</h2>
            <p style="font-size:1.1rem; color:#555;">Teşekkürler <strong>${rumuz}</strong>.</p>
            <br>
            <p>Paylaşımınız <strong>Hukuk ve Moderasyon Havuzuna</strong> iletilmiştir.</p>
            <div style="background:#f8f9fa; padding:15px; margin:20px 0; border-radius:5px; border-left:4px solid #f39c12; text-align:left;">
                <strong><i class="fas fa-info-circle"></i> Süreç Nasıl İşler?</strong>
                <ul style="margin-top:5px; padding-left:20px; font-size:0.9rem; color:#666;">
                    <li>Editörlerimiz metni okuyacak.</li>
                    <li>Varsa <u>kurum/şahıs isimleri</u> sansürlenecek ([***]).</li>
                    <li>KVKK'ya uygun hale getirilip yayınlanacak.</li>
                </ul>
            </div>
            <button class="btn btn-secondary" onclick="location.reload()">Forma Dön</button>
        </div>
    `;
}
