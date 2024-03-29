document.addEventListener("DOMContentLoaded", function() {
  var slideIndex = 1;
  showSlides(slideIndex);

  document.getElementById('prevButton').addEventListener('click', function() {
    plusSlides(-1);
  });

  document.getElementById('nextButton').addEventListener('click', function() {
    plusSlides(1);
  });

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
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
});


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


var subJuduls = document.getElementsByClassName("sub-judul");

for (var i = 0; i < subJuduls.length; i++) {
  subJuduls[i].style.color = "#6f6f6f";
  subJuduls[i].style.fontStyle = "italic";
  subJuduls[i].style.fontSize = "20px";
  subJuduls[i].style.padding = "10px";
}


function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}


