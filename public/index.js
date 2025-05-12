document.addEventListener('DOMContentLoaded', function() {
  // ——— 1) Modo Oscuro + Cambio de Logo ———
  const toggleBtn    = document.getElementById('darkModeToggle');
  const navbarLogo   = document.getElementById('navbarLogo');
  const savedMode    = localStorage.getItem('mode') || 'light';

  function applyMode(mode) {
    // Alternar clase dark-mode en body
    document.body.classList.toggle('dark-mode', mode === 'dark');
    // Cambiar ícono del toggle
    toggleBtn.textContent = mode === 'dark' ? '☀️' : '🌙';
    // Cambiar logo del navbar
    navbarLogo.src = mode === 'dark'
      ? 'images/logo3.png'
      : 'images/logo1.png';
  }

  // Aplicar modo guardado al cargar
  applyMode(savedMode);

  // Escuchar clic para alternar modo y guardar preferencia
  toggleBtn.addEventListener('click', () => {
    const newMode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyMode(newMode);
    localStorage.setItem('mode', newMode);
  });
});

