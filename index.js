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
      ? 'images/logo2.png'
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

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Código existente que puedas tener en tu index.js ...

    // Lógica para el modal de PDF
    var pdfModalElement = document.getElementById('pdfModal');

    // Asegurarnos de que el elemento del modal existe antes de añadirle listeners
    if (pdfModalElement) {
        var pdfViewer = document.getElementById('pdfViewer');
        var modalTitle = pdfModalElement.querySelector('.modal-title');

        pdfModalElement.addEventListener('show.bs.modal', function (event) {
            // Botón o enlace que disparó el modal
            var triggerElement = event.relatedTarget;

            // Extraer información de los atributos data-* del elemento que disparó el modal
            var pdfSrc = triggerElement.getAttribute('data-pdf-src');
            var pdfTitleText = triggerElement.getAttribute('data-pdf-title');

            // Actualizar el título del modal
            if (modalTitle) {
                modalTitle.textContent = pdfTitleText;
            }

            // Actualizar el src del iframe
            // Añadimos #toolbar=0 para intentar ocultar la barra de herramientas del visor PDF (funciona en algunos navegadores/visores)
            if (pdfViewer) {
                pdfViewer.src = pdfSrc + '#toolbar=0&navpanes=0'; // Añadimos navpanes=0 también
            }
        });

        // Opcional: Limpiar el src del iframe cuando el modal se oculte para detener la carga del PDF y liberar recursos
        pdfModalElement.addEventListener('hidden.bs.modal', function () {
            if (pdfViewer) {
                pdfViewer.src = ''; // Limpia el src para detener el PDF
            }
        });
    } else {
        console.warn('Elemento con id "pdfModal" no encontrado. La funcionalidad del modal PDF no se activará.');
    }

    // Otro código que puedas tener en tu index.js, como el del modo oscuro, etc.
    // Por ejemplo, tu código del darkModeToggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const navbarLogo = document.getElementById('navbarLogo');
    const body = document.body;
    const logoLight = 'images/logo1.png'; // Asumo que logo1.png es para modo claro
    const logoDark = 'images/logo_dark.png'; // Debes tener un logo para modo oscuro, ej: logo_dark.png

    // Función para aplicar el modo (oscuro o claro)
    function applyTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            if (darkModeToggle) darkModeToggle.textContent = '☀️';
            if (navbarLogo) navbarLogo.src = logoDark;
        } else {
            body.classList.remove('dark-mode');
            if (darkModeToggle) darkModeToggle.textContent = '🌙';
            if (navbarLogo) navbarLogo.src = logoLight;
        }
    }

    // Comprobar preferencia guardada
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        applyTheme(true);
    } else {
        applyTheme(false); // Por defecto o si es 'light'
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const isDarkMode = body.classList.toggle('dark-mode');
            applyTheme(isDarkMode);
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    }

}); // Fin de DOMContentLoaded
