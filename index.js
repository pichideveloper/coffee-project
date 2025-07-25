document.addEventListener('DOMContentLoaded', function() {

  // --- 1) Lógica para el Modal de Detalles del Plato ---
  const platoDetalleModalEl = document.getElementById('platoDetalleModal');

  if (platoDetalleModalEl) {
    platoDetalleModalEl.addEventListener('show.bs.modal', function (event) {
      // Elemento que activó el modal (la tarjeta del plato)
      const card = event.relatedTarget;

      // Obtener los datos de los atributos data-* de la tarjeta
      const nombre = card.getAttribute('data-nombre');
      const nombreExtendido = card.getAttribute('data-nombre-extendido') || nombre;
      const imgSrc = card.getAttribute('data-img');
      const descripcionLarga = card.getAttribute('data-descripcion-larga');
      const ingredientesStr = card.getAttribute('data-ingredientes');
      const precio = card.getAttribute('data-precio');
      const notas = card.getAttribute('data-notas');

      // Seleccionar los elementos dentro del modal para actualizarlos
      const modalTitle = platoDetalleModalEl.querySelector('#platoDetalleModalLabel');
      const modalImg = platoDetalleModalEl.querySelector('#modalPlatoImg');
      const modalNombreExt = platoDetalleModalEl.querySelector('#modalPlatoNombreExtendido');
      const modalDesc = platoDetalleModalEl.querySelector('#modalPlatoDescripcion');
      const modalIngredientesList = platoDetalleModalEl.querySelector('#modalPlatoIngredientes');
      const modalPrecio = platoDetalleModalEl.querySelector('#modalPlatoPrecio');
      const modalNotas = platoDetalleModalEl.querySelector('#modalPlatoNotasAdicionales');

      // Actualizar el contenido del modal
      if (modalTitle) modalTitle.textContent = nombre;
      if (modalImg) {
        modalImg.src = imgSrc;
        modalImg.alt = nombreExtendido; // Para accesibilidad
      }
      if (modalNombreExt) modalNombreExt.textContent = nombreExtendido;
      if (modalDesc) modalDesc.textContent = descripcionLarga;
      if (modalPrecio) modalPrecio.textContent = precio;
      
      if (modalNotas && notas) {
        modalNotas.textContent = notas;
        modalNotas.style.display = 'block';
      } else if (modalNotas) {
        modalNotas.textContent = '';
        modalNotas.style.display = 'none';
      }

      // Procesar y mostrar la lista de ingredientes
      if (modalIngredientesList) {
        modalIngredientesList.innerHTML = ''; // Limpiar lista anterior
        if (ingredientesStr) {
          const ingredientesArray = ingredientesStr.split(','); // Asume separación por comas
          ingredientesArray.forEach(ingrediente => {
            if (ingrediente.trim() !== '') {
              const li = document.createElement('li');
              li.textContent = ingrediente.trim();
              modalIngredientesList.appendChild(li);
            }
          });
        } else {
          const li = document.createElement('li');
          li.textContent = 'Ingredientes no detallados.';
          modalIngredientesList.appendChild(li);
        }
      }
    });
  } else {
    console.warn('Elemento modal con ID "platoDetalleModal" no encontrado.');
  }
  // --- Fin de la lógica del Modal de Detalles del Plato ---

  // --- 2) Modo Oscuro + Cambio de Logo (Implementación Unificada) ---
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
  // --- Fin Modo Oscuro + Cambio de Logo ---

  // --- 3) Lógica para el modal de PDF ---
  var pdfModalElement = document.getElementById('pdfModal'); // Se mantiene var como en tu original

  if (pdfModalElement) {
    var pdfViewer = document.getElementById('pdfViewer'); // Se mantiene var
    var modalTitlePDF = pdfModalElement.querySelector('.modal-title'); // Renombrado para evitar conflicto con modalTitle de plato

    pdfModalElement.addEventListener('show.bs.modal', function(event) {
      var triggerElement = event.relatedTarget;
      var pdfSrc = triggerElement.getAttribute('data-pdf-src');
      var pdfTitleText = triggerElement.getAttribute('data-pdf-title');

      if (modalTitlePDF) {
        modalTitlePDF.textContent = pdfTitleText;
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
  // --- Fin Lógica para el modal de PDF ---

  // --- Aquí puedes añadir cualquier otro código JavaScript que necesites ---
  // console.log("DOM completamente cargado y todos los scripts inicializados.");

}); // Fin de DOMContentLoaded

  // --- 4) Funcionalidad de ventanas flotantes promocionales ---
  function createFloatingPromo() {
    const currentPage = window.location.pathname.toLowerCase();
    const isLocalesPage = currentPage.includes('locales.html') || currentPage.includes('locales');
    
    // Mostrar ventana específica según la página
    if (isLocalesPage) {
      createReservaPromo();
    } else {
      createPlatoDelDiaPromo();
    }
  }

  function createPlatoDelDiaPromo() {
    // No usar ningún tipo de almacenamiento - la ventana aparece siempre al cargar la página
    const promoHTML = `
      <div id="floatingPromo" class="floating-promo">
        <div class="floating-promo-content">
          <button class="floating-promo-close" onclick="closeFloatingPromo()" aria-label="Cerrar promoción">×</button>
          <div class="floating-promo-icon">🍽️</div>
          <div class="floating-promo-title">¡Aprovecha nuestro plato del día!</div>
          <div class="floating-promo-subtitle">Descubre sabores únicos en nuestros locales</div>
          <a href="Locales.html" class="floating-promo-cta">Ver Nuestros Locales</a>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', promoHTML);
    
    // Mostrar la ventana después de 2 segundos
    setTimeout(() => {
      const promo = document.getElementById('floatingPromo');
      if (promo) {
        promo.classList.add('show');
      }
    }, 2000);
  }

  function createReservaPromo() {
    // No usar ningún tipo de almacenamiento - la ventana aparece siempre al cargar la página
    const promoHTML = `
      <div id="floatingPromo" class="floating-promo reserva-variant">
        <div class="floating-promo-content">
          <button class="floating-promo-close" onclick="closeFloatingPromo()" aria-label="Cerrar promoción">×</button>
          <div class="floating-promo-icon">📅</div>
          <div class="floating-promo-title">¡Reserva tu mesa para una reunión especial!</div>
          <div class="floating-promo-subtitle">Momentos únicos merecen un lugar especial</div>
          <a href="reservar.html" class="floating-promo-cta">Hacer Reserva</a>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', promoHTML);
    
    // Mostrar la ventana después de 2 segundos
    setTimeout(() => {
      const promo = document.getElementById('floatingPromo');
      if (promo) {
        promo.classList.add('show');
      }
    }, 2000);
  }

  // Función global para cerrar la promoción (solo oculta, no persiste el estado)
  window.closeFloatingPromo = function() {
    const promo = document.getElementById('floatingPromo');
    if (promo) {
      promo.classList.remove('show');
      promo.classList.add('hide');
      
      // Remover el elemento después de la animación
      setTimeout(() => {
        promo.remove();
      }, 300);
    }
  };

  // Inicializar ventana flotante
  createFloatingPromo();

  // --- Fin de funcionalidad de ventanas flotantes ---

