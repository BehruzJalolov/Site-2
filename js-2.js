// script.js
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Formani yubormaslik uchun
  
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
  
    // Parolni tasdiqlashni tekshirish
    if (password !== confirmPassword) {
      alert("Parollar bir xil bo'lishi kerak!");
      return;
    }
  
    // Forma to'ldirilganligini tekshirish
    if (email === "" || username === "" || password === "") {
      alert("Barcha maydonlarni to'ldirishingiz kerak.");
      return;
    }
  
    // Bularning barchasi to'g'ri bo'lsa
    alert("Ro'yxatdan o‘tish muvaffaqiyatli!");
  });
  