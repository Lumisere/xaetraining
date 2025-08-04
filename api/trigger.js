let lastTriggerTime = 0;

export default function handler(req, res) {
  if (req.method === 'POST') {
    lastTriggerTime = Date.now();
    return res.status(200).json({ success: true });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ triggered: lastTriggerTime });
  }

  res.status(405).end();
}
