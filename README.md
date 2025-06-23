# My Portfolio Website

A modern, responsive portfolio website built with React and Node.js, featuring a clean design with interactive elements and smooth animations.

## 🚀 Features

- Responsive design that works on all devices
- Interactive UI with smooth animations and transitions
- Dynamic project showcase
- Skills presentation with categories
- Contact form
- Custom cursor effects
- Glass morphism design elements
- Image optimization for better performance

## 🛠 Tech Stack

### Frontend

- React 19
- Vite
- TailwindCSS
- GSAP for animations
- React Router for navigation

### Backend

- Node.js
- Express.js
- MySQL Database
- Multer for file uploads
- Sharp for image optimization

## 🏃‍♂️ Running the Project

### Prerequisites

- Node.js (Latest LTS version recommended)
- MySQL

### Frontend Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:5173` in your browser

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your database configuration:
   ```env
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_DATABASE=your_database_name
   PORT=3000
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components
│   ├── assets/         # Static assets
│   ├── services/       # API services
│   └── styles/         # Global styles
├── backend/
│   ├── config/         # Database configuration
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   └── public/         # Uploaded files
```

## 🛠 Development

- Run `npm run dev` to start the development server
- Run `npm run build` to create a production build
- Run `npm run preview` to preview the production build
- Run `npm run lint` to lint the code

## 📱 Features by Page

### Home

- Professional introduction
- Dynamic profile image with hover effects
- Quick navigation to other sections

### Projects

- Showcase of personal projects
- Interactive project cards
- Project details and links

### Skills

- Categorized skill presentation
- Visual skill level indicators
- Animated skill cards

### About

- Professional background
- Personal journey
- Technologies and tools

### Contact

- Contact form
- Social media links
- Professional connections

## 🎨 Design Features

- Custom animated cursor
- Glassmorphism effects
- Responsive design
- Smooth page transitions
- Interactive hover effects
- Modern color scheme

## 🔧 Maintenance

The project uses ESLint for code quality and follows modern React best practices. Regular updates to dependencies are recommended to maintain security and performance.

---

Feel free to reach out if you have any questions or suggestions!
