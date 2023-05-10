// codice JavaScript per gestire l'iscrizione alla newsletter

function iscriviti() {
	alert("Grazie per esserti iscritto alla nostra newsletter!");
}
// Impostazione dei cookie
function setCookie(name, value, days) {
	var expires = "";
	if (days) {
	  var date = new Date();
	  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	  expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Ottenere il valore del cookie
  function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') c = c.substring(1, c.length);
	  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
  }
  
  // Nascondere il banner cookie
  function hideCookieBanner() {
	document.getElementById("cookie-banner").style.display = "none";
  }
  
  // Verificare se l'utente ha accettato i cookie
  function checkCookiesAccepted() {
	var cookiesAccepted = getCookie("cookies-accepted");
	if (cookiesAccepted) {
	  hideCookieBanner();
	}
  }
  
  // Impostare i cookie come accettati quando l'utente fa clic sul pulsante "Accetta"
  document.getElementById("accept-cookies").addEventListener("click", function() {
	setCookie("cookies-accepted", true, 365);
	hideCookieBanner();
  });
  
  // Aggiungere un evento al pulsante "Maggiori informazioni" per visualizzare le informazioni sui cookie
  document.getElementById("learn-more").addEventListener("click", function() {
	alert("Questa pagina utilizza i cookie per migliorare la tua esperienza di navigazione. Per maggiori informazioni sui cookie e sulla loro gestione, consulta la nostra pagina sulla privacy.");
  });
  
  // Verificare se l'utente ha già accettato i cookie quando la pagina viene caricata
  checkCookiesAccepted();

  var currentSlide = 0;
  var slider = document.querySelector('.slider-container');
  var slides = document.querySelectorAll('.slider-container img');
  var slideWidth = slides[0].clientWidth;
  
  function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	slider.style.transform = 'translateX(-' + currentSlide * slideWidth + 'px)';
  }
  
  setInterval(nextSlide, 5000);
  