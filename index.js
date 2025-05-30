document.addEventListener('DOMContentLoaded', function() {
  // --- 1) Modo Oscuro + Cambio de Logo (Implementación Unificada) ---
  const toggleBtn = document.getElementById('darkModeToggle');
  const navbarLogo = document.getElementById('navbarLogo'); // Logo del navbar
  const body = document.body;

  // Asegúrate de que los elementos esenciales existen
  if (toggleBtn && navbarLogo) {
    const logoLight = 'images/logo1.png'; // Logo para modo claro
    const logoDark = 'images/logo2.png';  // Logo para modo oscuro (ajusta si es 'logo_dark.png')
    const localStorageKey = 'user_theme_preference'; // Usar una sola clave para localStorage

    function applyUserTheme(theme) {
      body.classList.toggle('dark-mode', theme === 'dark');
      toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
      navbarLogo.src = theme === 'dark' ? logoDark : logoLight;
    }

    // Aplicar modo guardado al cargar o el preferido por el sistema
    let savedTheme = localStorage.getItem(localStorageKey);

    if (!savedTheme) {
        // Si no hay preferencia guardada, intenta detectar la preferencia del sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            savedTheme = 'dark';
        } else {
            savedTheme = 'light';
        }
    }
    
    applyUserTheme(savedTheme);

    // Escuchar clic para alternar modo y guardar preferencia
    toggleBtn.addEventListener('click', () => {
      const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
      applyUserTheme(newTheme);
      localStorage.setItem(localStorageKey, newTheme);
    });

  } else {
    console.warn('Faltan elementos para el modo oscuro: darkModeToggle o navbarLogo no encontrados.');
  }

  // --- 2) Lógica para el modal de PDF ---
  var pdfModalElement = document.getElementById('pdfModal');

  if (pdfModalElement) {
    var pdfViewer = document.getElementById('pdfViewer');
    var modalTitle = pdfModalElement.querySelector('.modal-title');

    pdfModalElement.addEventListener('show.bs.modal', function(event) {
      var triggerElement = event.relatedTarget;
      var pdfSrc = triggerElement.getAttribute('data-pdf-src');
      var pdfTitleText = triggerElement.getAttribute('data-pdf-title');

      if (modalTitle) {
        modalTitle.textContent = pdfTitleText;
      }

      if (pdfViewer) {
        // Añadimos #toolbar=0 para ocultar la barra de herramientas y navpanes=0 para los paneles de navegación
        pdfViewer.src = pdfSrc + '#toolbar=0&navpanes=0';
      }
    });

    pdfModalElement.addEventListener('hidden.bs.modal', function() {
      if (pdfViewer) {
        pdfViewer.src = ''; // Limpia el src para detener el PDF y liberar recursos
      }
    });
  } else {
    console.warn('Elemento con id "pdfModal" no encontrado. La funcionalidad del modal PDF no se activará.');
  }

  // --- Aquí puedes añadir cualquier otro código JavaScript que necesites ---

}); // Fin de DOMContentLoaded
