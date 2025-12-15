import fs from 'fs';
import path from 'path';

const WISHES_FILE = path.join(process.cwd(), 'data', 'wishes.json');
const ADMIN_PASS = 'devteam123';

function readWishes() {
  try {
    if (fs.existsSync(WISHES_FILE)) {
      const data = fs.readFileSync(WISHES_FILE, 'utf8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error reading wishes:', error);
    return [];
  }
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { pass } = req.query;

    if (pass !== ADMIN_PASS) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const wishes = readWishes();
    res.status(200).json(wishes);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

