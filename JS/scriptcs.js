// Obtenemos referencias a los elementos del DOM
document.addEventListener('DOMContentLoaded', function () {
    // Referencias a elementos del DOM
    var showModalButton = document.getElementById('showForm');
    var modal = document.getElementById('myModal');
    var closeModalButton = document.getElementsByClassName('close')[0];
    var opcionesSelect = document.getElementById('opciones');
    var direccionSede = document.getElementById('direccionSede');
    var direccionDelivery = document.getElementById('direccionDelivery');
    var direccionUsuario = document.getElementById('direccionUsuario');
    var pedidoForm = document.getElementById('pedidoForm');

    // Función para abrir el modal
    function openModal() {
        // Mostrar el modal
        modal.style.display = 'block';

        // Asegurarse de que no esté seleccionada ninguna opción al abrir el modal
        opcionesSelect.selectedIndex = -1;

        // Limpiar los campos del formulario
        pedidoForm.reset();

        // Ocultar el campo de dirección del usuario al abrir el modal
        direccionSede.style.display = 'block';
        direccionDelivery.style.display = 'none';
        direccionUsuario.value = ''; // Limpiar el campo de dirección del usuario
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Evento click en el botón de cerrar modal
    closeModalButton.addEventListener('click', closeModal);

    // Evento click fuera del modal para cerrarlo
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Evento cambio en el select de opciones
    opcionesSelect.addEventListener('change', function() {
        if (opcionesSelect.value === 'recojo') {
            direccionSede.style.display = 'block';
            direccionDelivery.style.display = 'none';
            direccionUsuario.value = ''; // Limpiamos el valor del campo de dirección del usuario
        } else if (opcionesSelect.value === 'delivery') {
            direccionSede.style.display = 'none';
            direccionDelivery.style.display = 'block';
            direccionUsuario.style.display = 'block'; // Mostramos el campo de dirección del usuario
        }
    });

    // Evento click en el botón para mostrar el modal
    showModalButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el enlace recargue la página
        openModal();
    });

    // Evento submit del formulario
    pedidoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario (para este ejemplo)
        // Aquí puedes manejar el envío del formulario, por ejemplo, mostrando un mensaje de éxito
        closeModal();
        alert('Pedido enviado correctamente.');
    });
});