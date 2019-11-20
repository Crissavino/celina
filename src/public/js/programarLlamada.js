let btnFormLlamada = document.querySelector('.pf-trigger');
let form = document.querySelector('.peeking-form-w');

document.addEventListener('click', () => {
    let clickEnElBoton = btnFormLlamada.contains(event.target);
    let clickEnElForm = form.contains(event.target);

    if (clickEnElBoton) {
        if (form.classList.value.includes('active')) {
            form.classList.remove('active');
        } else {
            form.classList.add('active');
        }
    } 


    if (!clickEnElForm && !clickEnElBoton) {
        if (form.classList.value.includes('active')) {
            form.classList.remove('active');
        }
    }
});

// validacion
let formulario = document.querySelector('.wpcf7-form')
let campos = document.querySelectorAll('.validar');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let hayError = false;
    for (const campo in campos) {
        if (campos.hasOwnProperty(campo)) {
            const element = campos[campo];
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
        formulario.submit();
    }
});