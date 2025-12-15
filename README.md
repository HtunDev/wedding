# Wedding Wishes Application

A beautiful wedding wishes application built with Next.js and React.

## Features

- 📱 Beautiful mobile-friendly design
- 💌 Submit wedding wishes
- 👨‍💼 Admin panel to approve/deny wishes
- 🎨 Modern gradient UI
- ⚡ Built with Next.js for optimal performance

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser:
- Main page: http://localhost:3000
- Submit form: http://localhost:3000/add-wish
- Admin panel: http://localhost:3000/admin

## Build for Production

```bash
npm run build
npm start
```

## Admin Password

Default password: `devteam123`

You can change it in `pages/api/admin/wishes.js` and `pages/api/toggle.js` by modifying the `ADMIN_PASS` constant.

## Project Structure

```
wedding/
├── pages/
│   ├── index.js          # Main wishes page
│   ├── submit.js         # Submit wish form
│   ├── admin.js          # Admin panel
│   └── api/
│       ├── wishes.js     # Get all wishes
│       ├── submit.js     # Submit new wish
│       ├── toggle.js     # Toggle wish visibility
│       └── admin/
│           └── wishes.js # Admin wishes endpoint
├── data/
│   └── wishes.json       # Wishes data storage
└── package.json
```
