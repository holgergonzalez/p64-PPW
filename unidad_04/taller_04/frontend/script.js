document.getElementById('insertar-usuario').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
    //const fecha_registro = document.getElementById('fecha_registro').value;

    fetch('/usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, clave, nombre, apellido, fecha_nacimiento})
    })
    .then(response => response.json())
    .then(data => mostrarResultado(data))
    .catch(error => console.error('Error:', error));
});

document.getElementById('obtener-usuario').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('buscar-usuario').value;

    fetch(`/usuario?usuario=${usuario}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => mostrarResultado(data))
    .catch(error => console.error('Error:', error));
});

document.getElementById('actualizar-usuario').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario-update').value;
    const clave = document.getElementById('clave-update').value;
    const nombre = document.getElementById('nombre-update').value;
    const apellido = document.getElementById('apellido-update').value;
    const fecha_nacimiento = document.getElementById('fecha_nacimiento-update').value;

    fetch('/usuario', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, clave, nombre, apellido, fecha_nacimiento })
    })
    .then(response => response.json())
    .then(data => mostrarResultado(data))
    .catch(error => console.error('Error:', error));
});

document.getElementById('eliminar-usuario').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario-delete').value;

    fetch('/usuario', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario })
    })
    .then(response => response.json())
    .then(data => mostrarResultado(data))
    .catch(error => console.error('Error:', error));
});

function mostrarResultado(data) {
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = JSON.stringify(data, null, 2);
}