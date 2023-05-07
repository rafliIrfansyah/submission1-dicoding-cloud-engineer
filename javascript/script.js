//Implementasi DOM pada HTML

//Variabel navbarIcon akan berisikin elemen pada HTML yang memiliki ID "navbar-icon"
const navbarIcon = document.getElementById("navbar-icon");

//Menambahkan event listener pada elemen navbar-icon, ketika diklik akan menjalankan fungsi dibawah
navbarIcon.addEventListener('click' , function(event){
    //Melakukan query selector pada elemen dengan class nav-link
    const navLink = document.querySelector('.nav-link');

    //Memanipulasi class nav-link menggunakan toogle dengan class nav-open
    navLink.classList.toggle("nav-open");
});
    