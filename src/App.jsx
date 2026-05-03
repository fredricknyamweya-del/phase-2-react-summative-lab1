import { useMemo, useState } from 'react';
import AddProjectForm from './components/AddProjectForm.jsx';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import ProjectList from './components/ProjectList.jsx';
import SearchBar from './components/SearchBar.jsx';
import './App.css';

// featured projects section
const initialProjects = [
 {
    id: 1,
    title: 'Lunar Studio Branding',
    description: 'A modern brand identity for a digital-first creative studio.',
    imageUrl: 'https://dcassetcdn.com/profile_pics/1539659/20240516081519.jpg',
    category: 'Branding'
  },
  {
    id: 2,
    title: 'Wave Gallery Experience',
    description: 'An immersive portfolio website for a boutique art collective.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    category: 'Web Design'
  },
  { 
    id: 3,
    title: 'Pulse Event Campaign',
    description: 'A vibrant multimedia campaign for a product launch event.',
    imageUrl: 'https://www.hubspot.com/hubfs/create-a-product-launch-email_5.webp',
    category: 'Campaign'
  },
  {
    id: 4,
    title: 'SPM Buzz UI/UX',
    description: 'Responsive landing page design for a creative coworking hub.',
    imageUrl: 'https://yt3.googleusercontent.com/SsrQmrUVSw0TDTe6hbvfnxpmc779OLz-Vo9XIRFKy1KpyQCOx-JIUCq1rpxmuDE40uyiyQtP=s900-c-k-c0x00ffffff-no-rj',
    category: 'UI/UX'
  },
  {
    id: 5,
    title: 'Nova App Development',
    description: 'A sleek mobile app for a cutting-edge tech startup.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    category: 'App Development'
  },
  {
    id: 6,
    title: 'Echo Branding Refresh',
    description: 'A bold rebrand for a legacy audio equipment company.',
    imageUrl: 'data:image/jpeg;base64,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',
    category: 'Branding'
  }
];

function App() {
  // Keep track of all our projects and what the user is searching for
  const [projects, setProjects] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects based on search - only re-run when projects or search changes
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return projects; // No search? Show everything!
    }

    // Look for matches in title or category.
    return projects.filter((project) => {
      return (
        project.title.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query)
      );
    });
  }, [projects, searchQuery]);

  // Pin new project at the top of the list when someone adds a new project.
  const handleAddProject = (newProject) => {
    setProjects((currentProjects) => [
      { id: currentProjects.length + 1, ...newProject },
      ...currentProjects
    ]);
  };

  // calling components to build out the page structure and passing down the necessary data and handlers as props.
  return (
    <div className="app-shell min-h-screen bg-gray-900 text-white">
      <NavBar />

      <main className="main-content max-w-7xl mx-auto px-4 py-8 space-y-8">
        <section className="hero-panel">
          <div>
            <h1>Creative Agency Portfolio</h1>
            <p className="hero-copy">
              Bring client stories to life through work that feels intentional and alive.
              Showcase your boldest projects, uncover the creative thinking behind them, and guide clients through a clean, modern experience that makes your value impossible to miss.
            </p>
          </div>
          <div className="hero-actions">
            <SearchBar
              searchQuery={searchQuery}
              onSearch={setSearchQuery}
            />
          </div>
        </section>

        <section className="projects-panel bg-gray-800 p-8 rounded-2xl shadow-2xl mb-8">
          <div className="panel-header mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured projects</h2>
              <p className="text-gray-400">Filter by title or category to find the best work quickly.</p>
            </div>
          </div>

          <ProjectList projects={filteredProjects} />
        </section>

        <section className="form-panel bg-gray-800 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Add a new project</h2>
          <AddProjectForm onAddProject={handleAddProject} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
