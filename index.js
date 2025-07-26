export default function handler(req, res) {
  const VERIFY_TOKEN = "flexisport-token"; // el mismo que pusiste en Meta

  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("Webhook verificado correctamente ✔");
      res.status(200).send(challenge);
    } else {
      console.warn("Token inválido ❌");
      res.sendStatus(403);
    }
  } else {
    res.status(200).json({ message: "¡Hola desde F.E.L.I.X. y FLEXISPORT!" });
 
