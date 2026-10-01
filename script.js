// --- Notificación emergente ---
window.onload = function() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 4000);
};

// --- Chat Tawk.to ---
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function(){
  var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/68b613d0b6f6e219263a7681/1j43jqpv9';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1, s0);
})();


