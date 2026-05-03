import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
  const mockProject = {
    id: 1,
    title: 'Test Project',
    description: 'This is a test project description',
    imageUrl: 'https://example.com/image.jpg',
    category: 'Web Design'
  };

  it('renders project information', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
    expect(screen.getByText('Web Design')).toBeInTheDocument();
  });

  it('renders project image with correct alt text', () => {
    render(<ProjectCard project={mockProject} />);

    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('renders image with lazy loading', () => {
    render(<ProjectCard project={mockProject} />);

    const image = screen.getByAltText('Test Project');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('displays category badge', () => {
    render(<ProjectCard project={mockProject} />);

    const categoryBadge = screen.getByText('Web Design');
    expect(categoryBadge).toHaveClass('project-category');
  });
});
