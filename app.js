const ad = document.querySelector("#ad");
const soyad = document.querySelector("#soyad");
const vize1 = document.querySelector("#vize1");
const vize2 = document.querySelector("#vize2");
const final = document.querySelector("#final");
const hesapla = document.querySelector("#hesapla");
const form = document.querySelector("#form");

let sonuc = 0;

hesapla.addEventListener("click", notHesapla);


function notHesapla(e) {
    sonuc = parseInt(((vize1.value * 0.30) + (vize2.value * 0.30) + (final.value * 0.40)));

    adSoyadBosGecilemez();
    e.preventDefault();
}

function temizle() {
    vize1.value = "";
    vize2.value = "";
    final.value = "";
    ad.value = "";
    soyad.value = "";
}

function sonucAcikla(message, type, result) {
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = `${message} ${result}`;

    form.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 3000);

}

function adSoyadBosGecilemez() {
    if (ad.value === "" || soyad.value === "") {
        sonucAcikla("Ad & Soyad Boş Geçilemez!", "danger", "");
    }
    else {
        sonucHesapla();

    }
}

function sonucHesapla() {
    if (sonuc > 0 && sonuc <= 40) {
        sonucAcikla("Başarısız...", "danger", "Ortalamanız: " + sonuc);
        temizle();
    }
    else if (sonuc > 41 && sonuc <= 60) {
        sonucAcikla("Ortalama ile Geçer.", "info", "Ortalamanız: " + sonuc);
        temizle();
    }
    else if (sonuc > 61 && sonuc <= 100) {
        sonucAcikla("Öğrenci Başarılı.Tebrikler!", "success", "Ortalamanız: " + sonuc);
        temizle();
    }
    else {
        sonucAcikla("Lütfen 0 ile 100 arasında değerler girdiğinizden emin olunuz!", "warning","");
    }
}



