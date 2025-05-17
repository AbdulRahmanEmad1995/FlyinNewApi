export default function handler(req, res) {
    const delay = parseInt(req.query.delay) || 0;
    setTimeout(() => {
      res.status(200).json({ message: `Response delayed by ${delay} ms` });
    }, delay);
  }