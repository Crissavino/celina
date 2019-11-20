const nodemailer = require('nodemailer');

module.exports = (form) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'psicologacelinamcintosh@gmail.com',
            pass: 'Celi2019!'
        }
    });

    const mailOptions = {
        from: `”${form.nombre}” <${form.email}>`,
        to: `psicologacelinamcintosh@gmail.com`,
        subject: `Mail de contacto de ${form.nombre}`,
        html: `
            <strong>Nombre:</strong> ${form.nombre} <br/><br/>
            <strong>E-mail:</strong> ${form.email} <br/><br/>
            <strong>Mensaje de contacto:</strong> ${form.mensaje}
        `
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
}