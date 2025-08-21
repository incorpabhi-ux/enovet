# Hostinger Node.js Deployment Guide

## Prerequisites
- Hostinger Node.js hosting plan
- SSH access enabled

## Step 1: Upload Files
1. Upload all project files to your Hostinger Node.js directory
2. **DO NOT** upload `node_modules` folder
3. **DO NOT** upload `.next` folder

## Step 2: Install Dependencies
```bash
npm install
```

## Step 3: Build the Application
```bash
npm run build
```

## Step 4: Start the Application
```bash
npm start
```

## Step 5: Configure Domain
1. Go to Hostinger Control Panel
2. Navigate to "Domains" → "Manage"
3. Point your domain to the Node.js application

## Important Notes
- The app will run on port 3000
- Make sure your Node.js version is 18+ on Hostinger
- Contact forms will work with this setup
- All API routes will be functional

## Troubleshooting
- If you get port errors, contact Hostinger support
- Make sure all environment variables are set in Hostinger
- Check logs in Hostinger control panel for errors 