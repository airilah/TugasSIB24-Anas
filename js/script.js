var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

document.getElementById("registerLink").addEventListener("click", function(event) {
  event.preventDefault(); // Hindari navigasi ke hash
  document.getElementById("regis").classList.remove("hidden"); // Hapus kelas hidden
  document.getElementById("info").classList.add("hidden"); // Sembunyikan bagian informasi jika sedang terbuka
});

document.getElementById("informasiLink").addEventListener("click", function(event) {
  event.preventDefault(); // Hindari navigasi ke hash
  document.getElementById("info").classList.remove("hidden"); // Hapus kelas hidden
  document.getElementById("regis").classList.add("hidden"); // Sembunyikan bagian registrasi jika sedang terbuka
});
