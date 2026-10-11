export default function handler(req, res) {
  // Queda registrado en los Logs de Vercel (Project → Logs / Runtime)
  console.log("HIT " + JSON.stringify({
    q: req.query,                        // e=parse, e=js, etc.
    ua: req.headers["user-agent"],       // quién es el visitante (el bot)
    ref: req.headers["referer"],         // desde dónde llegó
    ip: req.headers["x-forwarded-for"],  // IP de origen
    t: Date.now()
  }));

  // Respondemos un GIF transparente de 1x1 para que el <img> no quede "roto".
  res.setHeader("Content-Type", "image/gif");
  res.setHeader("Cache-Control", "no-store");
  res.end(Buffer.from("R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", "base64"));
}