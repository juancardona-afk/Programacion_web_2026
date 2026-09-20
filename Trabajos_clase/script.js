// URL base de la API simulada
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function obtenerCasosDelServidor() {
  try {
    // fetch() realiza una petición HTTP. Por defecto, el método es GET.
    const respuesta = await fetch(`${API_URL}?_limit=6`);

    // .ok indica si el servidor respondió con un código de éxito (200-299)
    if (!respuesta.ok) {
      throw new Error(`Error del servidor: ${respuesta.status}`);
    }

    // Los datos llegan como texto; .json() los convierte a objetos JavaScript
    const datos = await respuesta.json();
    return datos;

  } catch (error) {
    console.error('No se pudieron obtener los casos:', error);
    return [];
  }
}
function crearTarjetaCasoDesdeAPI(item) {
  const tarjeta = document.createElement('article');
  tarjeta.className = 'tarjeta-caso';
  tarjeta.innerHTML = `
    <h3>Caso #${item.id}</h3>
    <p class="meta">Sincronizado desde el servidor</p>
    <p>${item.title}</p>
  `;
  return tarjeta;
}

async function iniciarListaDesdeServidor() {
  const contenedor = document.getElementById('contenedor-casos');
  contenedor.innerHTML = '<p>Cargando casos del servidor...</p>';

  const casosServidor = await obtenerCasosDelServidor();

  contenedor.innerHTML = '';
  casosServidor.forEach(item => {
    contenedor.appendChild(crearTarjetaCasoDesdeAPI(item));
  });
}

iniciarListaDesdeServidor();
const formulario = document.getElementById('form-reporte');

formulario.addEventListener('submit', async function (evento) {
  evento.preventDefault();

  const nuevoCaso = {
    title: document.getElementById('lugar').value,
    body: document.getElementById('descripcion').value,
    autoridad: document.getElementById('autoridad').value,
    fecha: document.getElementById('fecha').value,
  };

  try {
    const respuesta = await fetch(API_URL, {
      method: 'POST',                                 // <-- aquí está la diferencia con GET
      headers: {
        'Content-Type': 'application/json',           // le decimos al servidor qué formato enviamos
      },
      body: JSON.stringify(nuevoCaso),                 // convertimos el objeto JS a texto JSON
    });

    if (!respuesta.ok) {
      throw new Error(`Error al enviar: ${respuesta.status}`);
    }

    const casoConfirmado = await respuesta.json();
    console.log('El servidor respondió con:', casoConfirmado);

    // JSONPlaceholder no guarda datos de verdad, pero SÍ nos devuelve
    // el objeto con un id simulado, como si lo hubiera guardado.
    contenedorCasos.prepend(crearTarjetaCasoDesdeAPI(casoConfirmado));

    formulario.reset();

  } catch (error) {
    alert('Hubo un problema enviando el reporte. Intenta de nuevo.');
    console.error(error);
  }
});
function crearTarjetaCasoDesdeAPI(item) {
  const tarjeta = document.createElement('article');
  tarjeta.className = 'tarjeta-caso';
  tarjeta.innerHTML = `
    <h3>Caso #${item.id}</h3>
    <p class="meta">Sincronizado desde el servidor</p>
    <p>${item.title}</p>
  `;
  return tarjeta;
}

async function iniciarListaDesdeServidor() {
  const contenedor = document.getElementById('contenedor-casos');
  contenedor.innerHTML = '<p>Cargando casos del servidor...</p>';

  const casosServidor = await obtenerCasosDelServidor();

  contenedor.innerHTML = '';
  casosServidor.forEach(item => {
    contenedor.appendChild(crearTarjetaCasoDesdeAPI(item));
  });
}

iniciarListaDesdeServidor();