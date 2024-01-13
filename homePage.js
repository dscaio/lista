
    function showScreen(screenId) {
      // Criar um ponto para armazenar as screens
      const screens = document.querySelectorAll('.screen');

      screens.forEach(screen => {
        screen.classList.remove('active');
      });

      const selectedScreen = document.getElementById(screenId);
      selectedScreen.classList.add('active');
    }

    function closeScreen(screenId) {
      const screen = document.getElementById(screenId);
      screen.classList.remove('active');
    }