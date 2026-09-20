

const datosPortafolio = {

    historialAcademico: [
        {
            tipo: "Colegio",
            nombre: "Educación secundaria"
        },

        {
            tipo: "Universidad",
            nombre: "Desarrollo de Sistemas y Software"
        },

        {
            tipo: "Curso",
            nombre: "Curso de programación"
        }
    ],


    historialLaboral: [

        {
            cargo: "Monitor Académico"
        },

        {
            cargo: "Consultor"
        }

    ],


    habilidades: [

        {
            nombre: "Java",
            nivel: "Intermedio"
        },

        {
            nombre: "HTML",
            nivel: "Avanzado"
        },

        {
            nombre: "CSS",
            nivel: "Intermedio"
        },

        {
            nombre: "JavaScript",
            nivel: "Intermedio"
        },

        {
            nombre: "Inglés",
            nivel: "Intermedio"
        }

    ]

};




function mostrarHistorialAcademico() {

    const lista = document.getElementById("listaAcademica");

    lista.innerHTML = "";

    datosPortafolio.historialAcademico.forEach(function(estudio) {

        const elemento = document.createElement("li");

        elemento.textContent =
            estudio.tipo + ": " + estudio.nombre;

        lista.appendChild(elemento);

    });
}




function mostrarHistorialLaboral() {

    const lista = document.getElementById("listaLaboral");

    lista.innerHTML = "";

    datosPortafolio.historialLaboral.forEach(function(trabajo) {

        const elemento = document.createElement("li");

        elemento.textContent = trabajo.cargo;

        lista.appendChild(elemento);

    });
}




function mostrarHabilidades() {

    const lista = document.getElementById("listaHabilidades");

    lista.innerHTML = "";

    datosPortafolio.habilidades.forEach(function(habilidad) {

        const elemento = document.createElement("li");

        elemento.textContent = habilidad.nombre;


        const nivel = document.createElement("span");

        nivel.classList.add("nivel");

        nivel.textContent = habilidad.nivel;


        elemento.appendChild(nivel);

        lista.appendChild(elemento);

    });
}




document
    .getElementById("btnAgregarAcademico")
    .addEventListener("click", function() {

        const input =
            document.getElementById("nuevoEstudio");

        const nuevoEstudio =
            input.value.trim();


        if (nuevoEstudio === "") {

            alert("Ingrese un estudio.");

            return;
        }


        datosPortafolio.historialAcademico.push({

            tipo: "Estudio",

            nombre: nuevoEstudio

        });


        input.value = "";

        mostrarHistorialAcademico();

    });




document
    .getElementById("btnAgregarLaboral")
    .addEventListener("click", function() {

        const input =
            document.getElementById("nuevoTrabajo");

        const nuevoTrabajo =
            input.value.trim();


        if (nuevoTrabajo === "") {

            alert("Ingrese una experiencia laboral.");

            return;
        }


        datosPortafolio.historialLaboral.push({

            cargo: nuevoTrabajo

        });


        input.value = "";

        mostrarHistorialLaboral();

    });


document
    .getElementById("btnAgregarHabilidad")
    .addEventListener("click", function() {

        const input =
            document.getElementById("nuevaHabilidad");

        const select =
            document.getElementById("nivelHabilidad");


        const nombre =
            input.value.trim();

        const nivel =
            select.value;


        if (nombre === "") {

            alert("Ingrese una habilidad.");

            return;
        }


        datosPortafolio.habilidades.push({

            nombre: nombre,

            nivel: nivel

        });


        input.value = "";

        mostrarHabilidades();

    });




mostrarHistorialAcademico();

mostrarHistorialLaboral();

mostrarHabilidades();