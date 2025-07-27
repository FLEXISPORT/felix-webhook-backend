export default function handler(req, res) {
  const VERIFY_TOKEN = "FELIX_123"; // Este valor debe ser el MISMO que pongas en Meta

  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("✅ Webhook verificado correctamente");
      res.status(200).send(challenge);
    } else {
      console.warn("❌ Verificación fallida");
      res.sendStatus(403);
    }
  }

  if (req.method === "POST") {
    console.log("📩 Mensaje recibido:", JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
  }
}
