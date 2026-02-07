# 🍳 TasteBite - Recipe Sharing Platform

A modern, responsive recipe sharing web application built with React, where food enthusiasts can discover, share, and manage their favorite recipes. TasteBite provides a beautiful user interface for browsing recipes across different categories, submitting new recipes, and managing recipe collections with an admin panel.

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

### 🎯 Core Features
- **Browse Recipes**: Explore a wide variety of recipes across multiple categories
- **Search & Filter**: Find recipes by name, category, or ingredients
- **Recipe Details**: View comprehensive recipe information including ingredients, instructions, prep time, and servings
- **User Authentication**: Secure login and signup system
- **Submit Recipes**: Logged-in users can share their own recipes with the community
- **Admin Dashboard**: Manage pending recipes, approve or reject submissions
- **Category Organization**: Recipes organized into categories (Italian, Indian, Dessert, Healthy, Other)
- **Responsive Design**: Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices

### 🎨 User Interface
- Modern and clean design with smooth animations (powered by GSAP)
- Beautiful recipe cards with hover effects
- Category icons and visual indicators
- Toast notifications for user feedback
- Professional typography with custom fonts (Playfair Display, Pacifico, Pinyon Script)

### 🔐 User Roles
- **Regular Users**: Browse recipes, submit new recipes, and view recipe details
- **Admin Users**: All regular user features plus recipe approval/rejection capabilities

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - UI library
- **React Router DOM 7.7.1** - Routing and navigation
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Vite 7.0.4** - Build tool and development server

### Libraries & Tools
- **React Hook Form 7.71.1** - Form validation and management
- **Axios 1.13.4** - HTTP client for API requests
- **GSAP 3.14.2** - Animation library
- **Lucide React 0.562.0** - Icon library
- **React Toastify 11.0.5** - Toast notifications
- **nanoid 5.1.6** - Unique ID generation

### Development Tools
- **ESLint 9.30.1** - Code linting
- **Vite Plugin React** - Fast refresh support

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/rohitrajak2004/React-Recipe.git
cd React-Recipe
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 🚀 Usage

### For Users
1. **Browse Recipes**: Visit the home page to see featured recipes and browse by category
2. **View Recipe Details**: Click on any recipe card to see full details, ingredients, and instructions
3. **Search Recipes**: Use the search functionality to find specific recipes
4. **Create Account**: Sign up to submit your own recipes
5. **Submit Recipe**: Navigate to "Create Recipe" page and fill out the form with your recipe details
6. **Login**: Access your account to manage your submissions

### For Admins
1. **Login with Admin Credentials**: Access the admin panel
2. **Review Pending Recipes**: View all recipes submitted by users
3. **Approve/Reject**: Manage recipe submissions to maintain quality
4. **Manage Content**: Full control over the recipe database

## 📁 Project Structure

```
React-Recipe/
├── public/              # Static assets
├── src/
│   ├── Auth/           # Authentication components (Login, SignUp)
│   ├── Pages/          # Main page components
│   │   ├── Home.jsx
│   │   ├── Recipes.jsx
│   │   ├── SingleRecipe.jsx
│   │   ├── CreateRecipes.jsx
│   │   ├── About.jsx
│   │   └── Admin.jsx
│   ├── components/     # Reusable components (Navbar, Footer, etc.)
│   ├── context/        # React Context for state management
│   ├── routes/         # Route configuration
│   ├── style/          # CSS styles
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── eslint.config.js    # ESLint configuration
```

## 🎯 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🔧 Configuration

### Environment Variables
The application currently uses localStorage for data persistence. For production deployments, consider integrating with a backend API.

### Customization
- **Styling**: Modify `tailwind.config.js` for custom Tailwind configuration
- **Fonts**: Update font imports in `index.html`
- **Default Data**: Modify initial recipe data in `src/context/RecipeData.jsx`

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Write clear commit messages
- Update documentation as needed
- Test your changes thoroughly
- Ensure ESLint passes without errors

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rohit Rajak**
- GitHub: [@rohitrajak2004](https://github.com/rohitrajak2004)

## 🙏 Acknowledgments

- Recipe images from [TheMealDB](https://www.themealdb.com/)
- Icons from [Lucide](https://lucide.dev/)
- Inspiration from various recipe websites and food blogs

## 📧 Contact & Support

If you have any questions, suggestions, or issues, please:
- Open an issue on GitHub
- Reach out through the repository discussions

---

<div align="center">
  Made with ❤️ by Rohit Rajak
  <br>
  ⭐ Star this repository if you find it helpful!
</div>
