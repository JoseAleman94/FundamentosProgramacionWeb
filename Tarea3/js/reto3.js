function redireccionar() {
    // Obtén el valor seleccionado del elemento select
    var seleccion = document.getElementById("opciones").value;

    // Realiza la redirección basada en la opción seleccionada
    switch (seleccion) {
      case "1":
        window.location.href = "https://www.cinemarkca.com/costa-rica?tag=770&cine=costa_rica_-_multiplaza_escazu&no-reminder=true";
        break;
      case "2":
        window.location.href = "https://www.cinemarkca.com/costa-rica?tag=770&cine=costa_rica_-_multiplaza_escazu&no-reminder=true";
        break;
      case "3":
        window.location.href = "https://www.cinemarkca.com/costa-rica?tag=2210&cine=costa_rica_-__oxigeno&no-reminder=true";
        break;
      case "4":
        window.location.href = "https://www.cinemarkca.com/costa-rica?tag=2204&cine=costa_rica_-_citymall_alajuela&no-reminder=true";
        break;
      // Añade más casos según sea necesario

      default:
        // Redirección predeterminada si no coincide con ninguna opción
        window.location.href = "https://www.cinemarkca.com/costa-rica";
    }
  }

