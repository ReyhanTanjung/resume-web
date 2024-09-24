function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
  
    // Toggle dark mode class
    body.classList.toggle('dark-mode');
  
    // Change the icon based on theme
    if (body.classList.contains('dark-mode')) {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');  // Switch to moon icon for dark mode
    } else {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');   // Switch to sun icon for light mode
    }
  }
  