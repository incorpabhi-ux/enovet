# Enovet Media Website

A modern, full-stack website for Enovet Media Private Limited built with Next.js, TypeScript, Tailwind CSS, and Prisma.

## Features

- 🎨 Modern UI with Tailwind CSS and Framer Motion animations
- 🌙 Dark mode support
- 📱 Fully responsive design
- 🔍 SEO optimized
- 🚀 Server-side rendering and static generation
- 📝 Blog with MDX support
- 🔐 Admin dashboard with authentication
- 🗃️ PostgreSQL database with Prisma ORM
- 📊 Analytics and performance monitoring

## Prerequisites

- Node.js 18.x or later
- PostgreSQL database
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/enovet-media-website.git
   cd enovet-media-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   ```
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/enovet_media"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   ```

5. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/              # App router pages
│   ├── components/       # React components
│   ├── lib/             # Utility functions and configurations
│   └── styles/          # Global styles and Tailwind config
├── prisma/              # Database schema and migrations
├── public/             # Static assets
└── package.json        # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Database Migrations

To create a new migration after modifying the schema:

```bash
npx prisma migrate dev --name your_migration_name
```

To apply migrations in production:

```bash
npx prisma migrate deploy
```

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

For deployment to platforms like Vercel or Netlify, follow their respective documentation for Next.js deployments.

## Environment Variables

Required environment variables:

- `DATABASE_URL` - PostgreSQL database URL
- `NEXTAUTH_URL` - Full URL of your website
- `NEXTAUTH_SECRET` - Random string for session encryption
- `EMAIL_SERVER_*` - SMTP server configuration for authentication emails

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email info@enovetmedia.com or create an issue in this repository. 