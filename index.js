const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PUERTO = process.env.PORT || 3000;

// Middleware para analizar cuerpo JSON
app.use(bodyParser.json());

// Ruta de verificación de Webhook
app.get('/webhook', (req, res) => {
  const VERIFICAR_TOKEN = 'FELIX_SECRET_TOKEN';

  const modo = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const reto = req.query['hub.challenge'];

  if (modo && token === VERIFICAR_TOKEN) {
    console.log('WEBHOOK_VERIFICADO');
    res.status(200).send(reto);
  } else {
    res.sendStatus(403);
  }
});

// Inicia el servidor
app.listen(PUERTO, () => {
  console.log(`El servidor se está ejecutando en el puerto ${PUERTO}`);
});
