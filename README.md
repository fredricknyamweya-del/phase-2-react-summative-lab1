# Creative Agency Portfolio Platform

A modern, responsive Single Page Application (SPA) built with React that serves as a portfolio platform for creative agencies. Showcase past projects, dynamically add new ones, and filter them with a powerful search feature.

# Features

- **Dynamic Project Showcase**: Display a curated list of creative projects with images, titles, descriptions, and categories
- **Add New Projects**: Seamlessly add new projects through a comprehensive form with validation
- **Real-Time Search**: Instantly filter projects by title or category as you type
- **Fully Responsive**: Works flawlessly across desktop, tablet, and mobile devices
- **Modern Design**: Dark-themed UI with smooth animations and gradient effects
- **Accessibility**: Fully accessible with ARIA labels, semantic HTML, and keyboard navigation
- **Comprehensive Tests**: Unit tests covering core functionality with Jest and React Testing Library

## Requirements Met

### Core Requirements
✅ **Landing Page** - Displays projects with titles, descriptions, and visuals  
✅ **Add Project Form** - Dynamic form to add new projects with all required fields  
✅ **Search Feature** - Real-time filtering by title or category  
✅ **Responsive Design** - Mobile-first approach working on all screen sizes  

### Development Tasks Completed
✅ **Task 1: Problem Definition** - Requirements reviewed, components identified  
✅ **Task 2: Design** - Component tree created, state and props designed  
✅ **Task 3: Code** - Full React implementation with Vite and modern patterns  
✅ **Task 4: Test & Debug** - Comprehensive Jest + React Testing Library coverage  
✅ **Task 5: Document & Maintain** - Full documentation with comments and professional README  

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm 7+
- macOS, Windows, or Linux

### Installation

1. **Clone and navigate to the project:**
   bash
   cd phase-2-react-summative-lab1

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The app will open at `http://localhost:5173`

### Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Create an optimized production build
- **`npm run preview`** - Preview the production build locally
- **`npm test`** - Run Jest tests in interactive mode
- **`npm run test:watch`** - Run tests in watch mode

## 🏗️ Architecture

### Component Tree

```
App (state: projects, searchQuery)
├── NavBar
├── main
│   ├── Hero Panel (SearchBar component)
│   ├── Projects Panel
│   │   └── ProjectList
│   │       └── ProjectCard (multiple)
│   └── Form Panel
│       └── AddProjectForm
└── Footer
```

### State Management

- **`projects`** - Array of project objects with id, title, description, imageUrl, and category
- **`searchQuery`** - String for real-time search filtering
- **Form state** - Local form data with validation within AddProjectForm component
- **Validation errors** - Form-specific error tracking for better UX

### Project Data Structure

```javascript
{
  id: number,
  title: string,
  description: string,
  imageUrl: string,
  category: string (one of: Branding, Web Design, Campaign, UI/UX, App Development)
}
```

## 🎨 Styling

The project uses **CSS Modules** with:
- Dark theme optimized for creativity
- Responsive grid layouts (3 columns → 2 columns → 1 column)
- Smooth transitions and hover effects
- Gradient backgrounds and modern shadows
- Full accessibility color contrast ratios

### Breakpoints
- **Desktop**: 1200px+ (3-column layout)
- **Tablet**: 900px - 1200px (2-column layout)
- **Mobile**: < 900px (1-column layout)

## 🧪 Testing

The project includes comprehensive unit tests:

### Test Coverage
- App component (11 tests)
  - Initial render and project display
  - Search filtering by title and category
  - Adding new projects
  - Form validation
  - Error states

- SearchBar component (3 tests)
  - Input rendering and interaction
  - Search callback functionality
  - Value display

- ProjectCard component (4 tests)
  - Project information display
  - Image rendering with alt text
  - Lazy loading
  - Category badge rendering

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## 📁 Project Structure

```
phase-2-react-summative-lab1/
├── src/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── NavBar.css
│   │   ├── SearchBar.jsx
│   │   ├── SearchBar.css
│   │   ├── ProjectList.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectCard.css
│   │   ├── ProjectCard.test.jsx
│   │   ├── AddProjectForm.jsx
│   │   ├── AddProjectForm.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   └── SearchBar.test.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── App.test.jsx
│   ├── main.jsx
│   ├── index.css
│   └── setupTests.js
├── index.html
├── vite.config.js
├── jest.config.js
├── babel.config.js
├── package.json
└── README.md
```

## 💡 Key Implementation Details

### Search & Filtering
- Uses `useMemo` hook for efficient filtering performance
- Case-insensitive matching for title and category
- Real-time updates without debouncing (optimized for small datasets)
- Displays "no results" message when applicable

### Form Validation
- Required field validation
- URL format validation using native URL constructor
- Real-time error clearing on input change
- Visual feedback with ARIA attributes for accessibility
- Simulated API delay (500ms) for realistic UX

### Responsive Design
- Mobile-first CSS approach
- CSS Grid with auto-responsive columns
- Flexible typography using `clamp()` for scalable sizing
- Touch-friendly button and form element sizing
- Optimized spacing for smaller screens

### Performance Optimizations
- Lazy loading for project images
- Memoized filtering with `useMemo`
- Efficient event handlers with proper closures
- No unnecessary re-renders

## 🐛 Troubleshooting

**Issue: Port 5173 is already in use**
```bash
npm run dev -- --port 3000
```

**Issue: Tests not running**
```bash
# Clear Jest cache and reinstall
rm -rf node_modules/.cache
npm test
```

**Issue: Styles not applying**
- Ensure all CSS imports are in component files
- Check that CSS filenames match import paths
- Verify `vite.config.js` is properly configured

## 📚 Learning Notes

This project demonstrates:
- React functional components with hooks (`useState`, `useMemo`)
- Controlled components for forms
- Event handling and state management
- Component composition and props drilling
- CSS Modules for scoped styling
- Form validation and error handling
- Testing with Jest and React Testing Library
- Responsive web design principles
- Accessibility best practices (ARIA labels, semantic HTML)
- Build tool configuration (Vite, Babel, Jest)

## 🎯 Future Enhancements

Potential improvements for future versions:
- Backend API integration with persistent storage
- User authentication and project ownership
- Project detail pages with full descriptions
- Image upload functionality
- Pagination or infinite scroll
- Filter by multiple categories simultaneously
- Sort options (date added, alphabetical, etc.)
- Dark/light mode toggle
- Share projects on social media
- Project analytics and views tracking

## 📝 Component Documentation

### AddProjectForm
Form for adding new projects with validation. Handles all form state internally with error messages displayed inline.

**Props:**
- `onAddProject(newProject)` - Callback fired when form is successfully submitted

**Form Fields:**
- Project title (required, text input)
- Description (required, textarea)
- Image URL (required, valid URL format)
- Category (required, select dropdown)

### SearchBar
Search input component for real-time project filtering.

**Props:**
- `searchQuery` (string) - Current search query value
- `onSearch(query)` - Callback fired on input change

### ProjectCard
Individual project display card with image, title, description, and category badge.

**Props:**
- `project` (object) - Project data object with all required fields

### ProjectList
Grid container displaying multiple ProjectCard components.

**Props:**
- `projects` (array) - Array of project objects to display

## 📄 License

This is an educational project for the Moringa School React Summative Lab 1.

---

**Built with:** React 18 • Vite • Jest • React Testing Library

**Last Updated:** April 2025
