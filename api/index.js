export default function handler(req, res) {
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token === 'flexisport-token') {
      return res.status(200).send(challenge);
    } else {
      return res.status(403).send('Error de verificación');
    }
  }

  res.status(404).send('Método no soportado');
}
