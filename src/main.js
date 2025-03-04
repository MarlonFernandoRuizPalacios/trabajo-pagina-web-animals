document.addEventListener("DOMContentLoaded", () => {
  // Clonación de la plantilla
  const template = document.getElementById("card-template");
  if (template) {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".title").textContent = "Título dinámico";
    document.getElementById("clone-block").appendChild(clone);
  }

  // Botón de hamburguesa y cierre del menú
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");
  const closeMenu = document.createElement("button");
  
  closeMenu.textContent = "✖";
  closeMenu.classList.add("close-menu");
  navbar.appendChild(closeMenu);

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });

    closeMenu.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  }

  // Geolocalización
  const ubicacionBtn = document.getElementById("obtenerUbicacion");
  const resultadoUbicacion = document.getElementById("resultado");

  if (ubicacionBtn) {
    ubicacionBtn.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resultadoUbicacion.textContent = `Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`;
          },
          () => {
            resultadoUbicacion.textContent = "No se pudo obtener la ubicación.";
          }
        );
      } else {
        resultadoUbicacion.textContent = "La geolocalización no es soportada por tu navegador.";
      }
    });
  }

  // Manejo del formulario
  const form = document.getElementById("myForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Formulario enviado");
    });
  }

  // Diálogo modal
  const abrirDialogo = document.getElementById("abrirDialogo");
  const cerrarDialogo = document.getElementById("cerrarDialogo");
  const dialogo = document.getElementById("miDialogo");

  if (abrirDialogo && cerrarDialogo && dialogo) {
    abrirDialogo.addEventListener("click", () => {
      dialogo.showModal();
    });
    cerrarDialogo.addEventListener("click", () => {
      dialogo.close();
    });
  }
});
