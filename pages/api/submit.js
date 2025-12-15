import fs from 'fs';
import path from 'path';

const WISHES_FILE = path.join(process.cwd(), 'data', 'wishes.json');

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

const MAX_MESSAGE_LENGTH = 500;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, position, team, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({ error: 'Name and message are required' });
    }

    if (message.trim().length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({ error: `Message must be ${MAX_MESSAGE_LENGTH} characters or less` });
    }

    const wishes = readWishes();
    const newWish = {
      id: Date.now(),
      name: name.trim(),
      position: position ? position.trim() : (team ? team.trim() : ''),
      message: message.trim(),
      visible: false,
    };

    wishes.push(newWish);

    if (writeWishes(wishes)) {
      res.status(200).json({ success: true, message: 'Wish saved successfully!' });
    } else {
      res.status(500).json({ error: 'Failed to save wish' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

