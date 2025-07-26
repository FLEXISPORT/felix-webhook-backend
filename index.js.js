const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Ruta de verificación Webhook (GET)
app.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = 'FELIX_SECRET_TOKEN';

  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token === VERIFY_TOKEN) {
    console.log('WEBHOOK_VERIFIED');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Ruta Webhook para recibir mensajes (POST)
app.post('/webhook', (req, res) => {
  console.log('📩 Mensaje recibido de WhatsApp:', JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 F.E.L.I.X. backend corriendo en puerto ${PORT}`);
});
