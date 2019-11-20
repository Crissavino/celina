const express = require('express');
const router = express.Router();
const configMensajeLlamada = require('../configMensajeLlamada');
const configMensajeContacto = require('../configMensajeContacto');

let textosEspanol = {
    title: `Celina Mc Intosh - Psicóloga`,
    header: {
        titulo: `Maria Celina Romero Mc Intosh`,
        textoTitulo: `Algo para poner aca debajo del nombre`
    },
    primeraSeccion: {
        titulo: `Que se ofrece?`,
        textoTitulo: `Breve explicacion de lo que ofrece Celina`
    },
    segundaSeccion: {
        titulo: `Programas de tratamiento`,
        textoTitulo: `Breve explicacion o frase de los programas de tratamiento`
    },
    terceraSeccion: {
        titulo: `Que se ofrece?`,
        textoTitulo: `Breve explicacion de lo que ofrece Celina`
    },
    cuartaSeccion: {
        titulo: `Que se ofrece?`,
        textoTitulo: `Breve explicacion de lo que ofrece Celina`
    },
    footer: {

    }
}

router.get('/', (req, res) => {
    res.render('index.html', textosEspanol)
});

router.post('/programarLlamada', (req, res) => {
    // const { nombre, email, telefono, mensaje } = req.body;
    configMensajeLlamada(req.body);
    res.redirect('/');
});

router.post('/contacto', (req, res) => {
    // const { nombre, email, telefono, mensaje } = req.body;
    configMensajeContacto(req.body);
    res.redirect('/');
});

// router.get('/contact', (req, res) => {
//     res.render('contact.html', { title: 'Contact Page'})
// });


module.exports = router;