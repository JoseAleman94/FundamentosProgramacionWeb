const estudiantes = [];

function nuevoEstudiante() {
    const nombre = document.getElementById('nombre').value,
        apellidoEstudiante = document.getElementById('apellidos').value,
        nota1 = parseFloat(document.getElementById('nota1').value),
        nota2 = parseFloat(document.getElementById('nota2').value),
        nota3 = parseFloat(document.getElementById('nota3').value);
        const examen = parseFloat(document.getElementById('examen').value);
        const proyecto = parseFloat(document.getElementById('proyecto').value);


    if (nombre === '' || apellidoEstudiante === '' || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(examen) || isNaN(proyecto)) {

        Swal.fire({
            icon: "error",
            title: "Asegurate de llenar todos los campos y que las notas sean números.",
            showClass: {
                popup: `
                animate__animated
                animate__fadeIn
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOut
                `
            }
        });

    } else {
        const promedio = (nota1 + nota2 + nota3 + examen + proyecto ) / 5;

        estudiantes.push({ nombre, apellidoEstudiante, promedio });

        const selectEstudiantes = document.getElementById('seleccionarEstudiante');

        const option = document.createElement('option');

        option.value = nombre + ' ' + apellidoEstudiante;

        option.text = nombre + ' ' + apellidoEstudiante;

        selectEstudiantes.appendChild(option);

        limpiarDatos();

        Swal.fire({
            icon: "success",
            title: " Se ha agregado el Estudiante correctamente",
            showClass: {
                popup: `
                animate__animated
                animate__fadeIn
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOut
                `
            }
        });
    }
}

function calcularPromedioEstudiante() {
    const nombreSeleccionado = document.getElementById('seleccionarEstudiante').value;

    const resultado = document.getElementById('resultadoFinal');


    let estudianteSeleccionado = null;

    for (let i = 0; i < estudiantes.length; i++) {
        const estudiante = estudiantes[i];

        const nombreCompleto = estudiante.nombre + ' ' + estudiante.apellidoEstudiante;

        if (nombreCompleto === nombreSeleccionado) {
            estudianteSeleccionado = estudiante;
            break;
        }
    }

    if (estudianteSeleccionado) {
        const promedioEstudiante = estudianteSeleccionado.promedio;

        resultado.textContent = 'El promedio de: ' + nombreSeleccionado + '  es de: ' + promedioEstudiante;
    } else {
        resultado.textContent = '';
    }
}

function limpiarDatos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    document.getElementById('examen').value = '';
    document.getElementById('proyecto').value = '';
}