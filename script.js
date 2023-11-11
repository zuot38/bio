        function isMobileDevice() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        function redirectToMobileSite() {
            window.location.href = "https://m.zuot.cc/";
        }

        if (isMobileDevice()) {
            redirectToMobileSite();
		
        }
	function typeText(element, text, speed) {
        let index = 0;
        const timer = setInterval(function() {
          if (index < text.length) {
            element.textContent += text[index];
            index++;
          } else {
            clearInterval(timer);
          }
        }, speed);
      }
      function animateText() {
        const titleElement = document.querySelector(".title");
        const subtitleElement = document.querySelector(".podtitle");

        typeText(titleElement, "zuot", 800);
        setTimeout(function() {
          typeText(subtitleElement, "Hello, I am zuot and I live in Czechia.", 80);
        }, 4000);
      }

      document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
      });

      window.addEventListener("keydown", function(e) {
    	if ((e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) || (e.ctrlKey && e.shiftKey && e.key === "J")) {
	  e.preventDefault();
    	}
      });

      document.addEventListener("keydown", function(e) {
        if ((e.ctrlKey && e.shiftKey && e.key === 'C') || (e.ctrlKey && e.shiftKey && e.key === 'c')) {
          e.preventDefault();
        }
      });

      document.addEventListener("keydown", function(e) {
        if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'c')) {
          e.preventDefault();
        }
      });

      document.addEventListener("keydown", function(e) {
        if ((e.ctrlKey && e.shiftKey && e.key === 'J') || (e.ctrlKey && e.shiftKey && e.key === 'c')) {
          e.preventDefault();
        }
      });
	    
      window.addEventListener("load", animateText);
      document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
      });

      document.addEventListener("keydown", function(e) {
        if ((e.ctrlKey && e.shiftKey && e.key === 'C') || (e.ctrlKey && e.shiftKey && e.key === 'c')) {
          e.preventDefault();
        }
      });
      
      document.addEventListener("keydown", function(e) {
        if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'c')) {
          e.preventDefault();
        }
      });
      
      document.addEventListener("keydown", function(e) {
        if ((e.ctrlKey && e.shiftKey && e.key === 'J') || (e.ctrlKey && e.shiftKey && e.key === 'c')) {
          e.preventDefault();
        }
      });
