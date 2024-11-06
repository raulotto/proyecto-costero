// Carga las variables de entorno desde el archivo .env
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Configura middleware
app.use(cors());
app.use(bodyParser.json());

// Configura el transporte de Nodemailer con Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,  // El email configurado en el archivo .env
        pass: process.env.EMAIL_PASS,  // La contraseña o App Password configurada en .env
    },
});

// Ruta para manejar la solicitud de envío de correo
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;  // Obtiene los datos del formulario

    // Configura el contenido del correo
    const mailOptions = {
        from: email,  // Correo del usuario que envía el formulario
        to: process.env.EMAIL_USER,  // Tu correo para recibir el reclamo
        subject: `Nuevo reclamo de ${name}`,
        text: message,
    };

    // Envía el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(`Error al enviar el correo: ${error.toString()}`);
        }
        res.status(200).send(`Correo enviado con éxito: ${info.response}`);
    });
});

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
