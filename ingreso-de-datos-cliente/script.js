document.addEventListener('DOMContentLoaded', function () {
    const clienteForm = document.getElementById('clienteForm');
    const tablaClientes = document.getElementById('tablaClientes');
    let contadorClientes = 1;

    clienteForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${contadorClientes}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${email}</td>
            <td>${telefono}</td>
            <td><button class="delete-button">Eliminar</button></td>
        `;

        tablaClientes.appendChild(fila);

        contadorClientes++;

        clienteForm.reset();
    });

    tablaClientes.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-button')) {
            const fila = e.target.closest('tr');
            if (fila) {
                tablaClientes.removeChild(fila);
            }
        }
    });
});
