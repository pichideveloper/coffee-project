document.addEventListener('DOMContentLoaded', function() {

  // --- 1) Modo Oscuro + Cambio de Logo ---
  const toggleBtn = document.getElementById('darkModeToggle');
  const navbarLogo = document.getElementById('navbarLogo');
  const body = document.body;

  if (toggleBtn && navbarLogo) {
    const logoLight = 'images/logo1.png'; // Asegúrate que esta sea la ruta correcta
    const logoDark = 'images/logo2.png';  // Asegúrate que esta sea la ruta correcta para el logo oscuro
    const localStorageKey = 'user_theme_preference';

    function applyUserTheme(theme) {
      body.classList.toggle('dark-mode', theme === 'dark');
      toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
      navbarLogo.src = theme === 'dark' ? logoDark : logoLight;
    }

    let savedTheme = localStorage.getItem(localStorageKey);
    if (!savedTheme) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        savedTheme = 'dark';
      } else {
        savedTheme = 'light';
      }
    }
    applyUserTheme(savedTheme);

    toggleBtn.addEventListener('click', () => {
      const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
      applyUserTheme(newTheme);
      localStorage.setItem(localStorageKey, newTheme);
    });
  } else {
    if (!toggleBtn) console.warn('Elemento con ID "darkModeToggle" no encontrado para el modo oscuro.');
    if (!navbarLogo) console.warn('Elemento con ID "navbarLogo" no encontrado para el modo oscuro.');
  }

  // --- 2) Lógica para el modal de PDF ---
  const pdfModalElement = document.getElementById('pdfModal'); // Usar const si no se reasigna
  if (pdfModalElement) {
    const pdfViewer = document.getElementById('pdfViewer'); // Usar const
    const modalTitlePdf = pdfModalElement.querySelector('.modal-title'); // Variable con nombre único

    pdfModalElement.addEventListener('show.bs.modal', function(event) {
      const triggerElement = event.relatedTarget;
      const pdfSrc = triggerElement.getAttribute('data-pdf-src');
      const pdfTitleText = triggerElement.getAttribute('data-pdf-title');

      if (modalTitlePdf) {
        modalTitlePdf.textContent = pdfTitleText;
      }
      if (pdfViewer) {
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

  // --- 3) Lógica para el Modal de Detalles del Plato ---
  const platoDetalleModalEl = document.getElementById('platoDetalleModal');
  if (platoDetalleModalEl) {
    platoDetalleModalEl.addEventListener('show.bs.modal', function (event) {
      const card = event.relatedTarget; // Elemento que activó el modal

      // Obtener los datos de los atributos data-* de la tarjeta
      const nombre = card.getAttribute('data-nombre');
      const nombreExtendido = card.getAttribute('data-nombre-extendido') || nombre; // Fallback al nombre corto
      const imgSrc = card.getAttribute('data-img');
      const descripcionLarga = card.getAttribute('data-descripcion-larga');
      const ingredientesStr = card.getAttribute('data-ingredientes');
      const precio = card.getAttribute('data-precio');
      const notas = card.getAttribute('data-notas');

      // Seleccionar los elementos dentro del modal para actualizarlos
      const modalTitlePlato = platoDetalleModalEl.querySelector('#platoDetalleModalLabel'); // Variable con nombre único
      const modalImg = platoDetalleModalEl.querySelector('#modalPlatoImg');
      const modalNombreExt = platoDetalleModalEl.querySelector('#modalPlatoNombreExtendido');
      const modalDesc = platoDetalleModalEl.querySelector('#modalPlatoDescripcion');
      const modalIngredientesList = platoDetalleModalEl.querySelector('#modalPlatoIngredientes');
      const modalPrecio = platoDetalleModalEl.querySelector('#modalPlatoPrecio');
      const modalNotasEl = platoDetalleModalEl.querySelector('#modalPlatoNotasAdicionales'); // Renombrado para claridad

      // Actualizar el contenido del modal
      if (modalTitlePlato) modalTitlePlato.textContent = nombre;
      if (modalImg) {
        modalImg.src = imgSrc;
        modalImg.alt = nombreExtendido;
      }
      if (modalNombreExt) modalNombreExt.textContent = nombreExtendido;
      if (modalDesc) modalDesc.textContent = descripcionLarga;
      if (modalPrecio) modalPrecio.textContent = precio;
      
      if (modalNotasEl) { // Usar la variable renombrada
        if (notas && notas.trim() !== "") {
          modalNotasEl.textContent = notas;
          modalNotasEl.style.display = 'block'; // Mostrar si hay notas
        } else {
          modalNotasEl.textContent = '';
          modalNotasEl.style.display = 'none'; // Ocultar si no hay notas
        }
      }

      // Procesar y mostrar la lista de ingredientes
      if (modalIngredientesList) {
        modalIngredientesList.innerHTML = ''; // Limpiar lista anterior
        if (ingredientesStr) {
          const ingredientesArray = ingredientesStr.split(',');
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

}); // Fin de DOMContentLoaded
