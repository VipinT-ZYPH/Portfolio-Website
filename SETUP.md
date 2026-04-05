# Setup Instructions

## Prerequisites

Before running this portfolio website, you need to install Node.js and npm.

### 1. Install Node.js

Download and install Node.js from the official website:
- Go to https://nodejs.org/
- Download the LTS version (recommended for most users)
- Run the installer and follow the setup instructions

### 2. Verify Installation

Open a new terminal/command prompt and run:

```bash
node --version
npm --version
```

You should see version numbers displayed (e.g., v18.17.0 and 9.6.7).

### 3. Install Dependencies

Navigate to the project directory and run:

```bash
cd "c:\Users\Admin\Desktop\Portfolio Website"
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

The portfolio will be available at http://localhost:3000

### 5. Build for Production

```bash
npm run build
npm start
```

## Alternative: Online Development

If you can't install Node.js locally, you can use online platforms:

1. **Vercel**: Import the GitHub repository and deploy instantly
2. **CodeSandbox**: Upload the project files and run in browser
3. **StackBlitz**: Similar to CodeSandbox, supports Next.js
4. **Replit**: Online IDE with Node.js support

## Quick Preview

For immediate preview without installation, you can use the HTML version included in this project.

## Troubleshooting

- **"npm not recognized"**: Restart your terminal/command prompt after installing Node.js
- **Permission errors**: Run as administrator or fix npm permissions
- **Port 3000 in use**: The server will automatically use the next available port (3001, 3002, etc.)

## Next Steps After Setup

1. Replace placeholder content with your actual information
2. Update social media links
3. Add your real projects
4. Customize colors and styling if desired
5. Deploy to a hosting platform

## Deployment Options

- **Vercel** (recommended): Connect your GitHub repository
- **Netlify**: Drag and drop the build folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Traditional hosting**: Build and upload the static files
