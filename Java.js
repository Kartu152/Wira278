document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy credentials - bisa diganti dengan pengecekan dari server
    const correctUsername = "admin";
    const correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById('error-message').textContent = "Username atau password salah!";
    }
});

const beritaData = [
    { judul: "Berita 1", konten: "Ini adalah konten berita pertama." },
    { judul: "Berita 2", konten: "Ini adalah konten berita kedua." }
];

function loadBerita() {
    const container = document.querySelector('.content');
    beritaData.forEach((berita) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${berita.judul}</h3><p>${berita.konten}</p><a href="#">Baca selengkapnya</a>`;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadBerita);

const galeriData = [
    { src: "assets/images/image1.jpg", alt: "Gambar 1" },
    { src: "assets/images/image2.jpg", alt: "Gambar 2" }
];

function loadGaleri() {
    const galleryContainer = document.querySelector('.gallery');
    galeriData.forEach((gambar) => {
        const img = document.createElement('img');
        img.src = gambar.src;
        img.alt = gambar.alt;
        galleryContainer.appendChild(img);
    });
}

document.addEventListener('DOMContentLoaded', loadGaleri);

document.querySelector('a[href="logout.html"]').addEventListener('click', function (event) {
    const confirmLogout = confirm("Apakah Anda yakin ingin keluar?");
    if (!confirmLogout) {
        event.preventDefault();
    }
});

