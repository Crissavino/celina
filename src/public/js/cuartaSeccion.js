let formularioContacto = document.querySelector('.formContacto')
let camposContacto = document.querySelectorAll('.validarContacto');

formularioContacto.addEventListener('submit', (event) => {
    event.preventDefault();
    let hayError = false;
    for (const campo in camposContacto) {
        if (camposContacto.hasOwnProperty(campo)) {
            const element = camposContacto[campo];
            if (element.value === '' || element.value === null) {
                hayError = true;
            }
        }
    }

    if (hayError) {
        Swal.fire({
            icon: 'error',
            title: 'Todos los campos son obligatorios'
        });
    } else {
        formularioContacto.submit();
    }
});