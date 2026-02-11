(function () {
  const root = document.documentElement;
  const themeToggleButton = document.querySelector("#themeToggle");
  const logoImg = document.getElementById("logo");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Update the button emoji based on the theme
    updateButtonEmoji(theme);
    updateLogo(theme);
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") || "light";
    const newTheme = current === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  }

  function updateButtonEmoji(theme) {
    if (theme === "dark") {
      themeToggleButton.textContent = "❂";
    } else {
      themeToggleButton.textContent = "☽";
    }
  }

  function updateLogo(theme){
    if(!logoImg) return;

    if(theme == "dark"){
      logoImg.src = "/IMG/MealSyncPreto.png";
    }
    else{
      logoImg.src = "/IMG/MealSyncBranco.png"
    }
  }
  function initTheme() {
    const saved = localStorage.getItem("theme");
    if (saved) {
      applyTheme(saved);
    } else {
      applyTheme("light"); // Default to light theme if no preference saved
    }
  }

  // Expose globally
  window.toggleTheme = toggleTheme;
  window.initTheme = initTheme;
})();
  


(function () {
    
    function softReload() {
      // Reset scroll
      window.scrollTo(0, 0);
  
      // Re-run global inits
      if (typeof initTheme === "function") {
        initTheme();
      }
    }
  
    window.softReload = softReload;
  })();
  