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

function writeWishes(wishes) {
  try {
    fs.writeFileSync(WISHES_FILE, JSON.stringify(wishes, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing wishes:', error);
    return false;
  }
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { pass, id } = req.body;

    if (pass !== ADMIN_PASS) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const wishes = readWishes();
    const wish = wishes.find((w) => w.id === parseInt(id));

    if (wish) {
      wish.visible = !wish.visible;
      if (writeWishes(wishes)) {
        res.status(200).json({ success: true, visible: wish.visible });
      } else {
        res.status(500).json({ error: 'Failed to update wish' });
      }
    } else {
      res.status(404).json({ error: 'Wish not found' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

