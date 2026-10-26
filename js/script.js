// --- Fungsi AJAX ---
// Memuat halaman tanpa refresh (sesuai syarat navigasi AJAX UTS)
function loadPage(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Memasukkan respon HTML ke dalam div utama
            document.getElementById("konten-utama").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

// --- Fungsi Simulasi Poin Membership ---
function hitungSimulasi() {
    var nominalInput = document.getElementById("nominal_transaksi").value;
    var hasilDiv = document.getElementById("hasil-simulasi");
    
    if(nominalInput === "" || isNaN(nominalInput) || nominalInput < 0) {
        hasilDiv.innerHTML = "Mohon masukkan nominal transaksi yang valid.";
        return;
    }
    
    // Perhitungan dari proposal: Rp 10.000 = 1 Poin
    var poin = Math.floor(nominalInput / 10000);
    var tier = "Bronze";
    var diskon = "0%";

    // Menentukan tier diskon otomatis
    if (poin >= 200) {
        tier = "Gold";
        diskon = "15%";
    } else if (poin >= 50) {
        tier = "Silver";
        diskon = "5%";
    }

    hasilDiv.innerHTML = "<strong>Hasil Kalkulasi:</strong><br>" +
                         "Poin yang didapat: <b>" + poin + " Poin</b><br>" +
                         "Tier Membership: <b>" + tier + "</b><br>" +
                         "Diskon Tier Otomatis: <b>" + diskon + "</b>";
}

// --- Fungsi Validasi Form ---
function validasiForm(event) {
    event.preventDefault(); // Mencegah submit langsung ke server
    
    // Mengambil DOM Value
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rating = document.getElementById("rating").value;
    var feedback = document.getElementById("feedback").value;
    var errorMsg = document.getElementById("error-msg");

    errorMsg.innerHTML = ""; // Reset pesan error

    // Validasi Kosong
    if(email === "" || password === "" || rating === "" || feedback === "") {
        errorMsg.innerHTML = "Semua kolom wajib diisi!";
        return false;
    }

    // Validasi Email
    if(email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        errorMsg.innerHTML = "Format email tidak valid!";
        return false;
    }

    // Validasi Password
    if(password.length < 6) {
        errorMsg.innerHTML = "Password minimal terdiri dari 6 karakter!";
        return false;
    }

    alert("Sukses! Pendaftaran Member dan Ulasan Anda berhasil disubmit.");
    // Jika integrasi backend, bisa dilanjutkan ke proses submit form
    return true;
}