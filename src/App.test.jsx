import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders the application header and landing page', () => {
    render(<App />);
    expect(screen.getByText('Creative Agency Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Featured projects')).toBeInTheDocument();
  });

  it('displays initial projects', () => {
    render(<App />);
    expect(screen.getByText('Lunar Studio Branding')).toBeInTheDocument();
    expect(screen.getByText('Wave Gallery Experience')).toBeInTheDocument();
    expect(screen.getByText('Pulse Event Campaign')).toBeInTheDocument();
    expect(screen.getByText('SPM Buzz UI/UX')).toBeInTheDocument();
    expect(screen.getByText('Nova App Development')).toBeInTheDocument();
    expect(screen.getByText('Echo Branding Refresh')).toBeInTheDocument();
  });

  it('filters projects by title', async () => {
    const user = userEvent.setup();
    render(<App />);

    const searchInput = screen.getByPlaceholderText('Search by title or category');

    await user.type(searchInput, 'Lunar');

    expect(screen.getByText('Lunar Studio Branding')).toBeInTheDocument();
    expect(screen.queryByText('Wave Gallery Experience')).not.toBeInTheDocument();
    expect(screen.queryByText('Pulse Event Campaign')).not.toBeInTheDocument();
    expect(screen.queryByText('SPM Buzz UI/UX')).not.toBeInTheDocument();
    expect(screen.queryByText('Nova App Development')).not.toBeInTheDocument();
    expect(screen.queryByText('Echo Branding Refresh')).not.toBeInTheDocument();
  });

  it('filters projects by category', async () => {
    const user = userEvent.setup();
    render(<App />);

    const searchInput = screen.getByPlaceholderText('Search by title or category');

    await user.type(searchInput, 'Branding');

    expect(screen.getByText('Lunar Studio Branding')).toBeInTheDocument();
    expect(screen.queryByText('Wave Gallery Experience')).not.toBeInTheDocument();
  });

  it('clears search results when query is emptied', async () => {
    const user = userEvent.setup();
    render(<App />);

    const searchInput = screen.getByPlaceholderText('Search by title or category');

    await user.type(searchInput, 'Lunar');
    expect(screen.queryByText('Wave Gallery Experience')).not.toBeInTheDocument();

    await user.clear(searchInput);

    expect(screen.getByText('Lunar Studio Branding')).toBeInTheDocument();
    expect(screen.getByText('Wave Gallery Experience')).toBeInTheDocument();
    expect(screen.getByText('Pulse Event Campaign')).toBeInTheDocument();
    expect(screen.getByText('SPM Buzz UI/UX')).toBeInTheDocument();
    expect(screen.getByText('Nova App Development')).toBeInTheDocument();
    expect(screen.getByText('Echo Branding Refresh')).toBeInTheDocument();
  });

  it('shows empty state when search yields no results', async () => {
    const user = userEvent.setup();
    render(<App />);

    const searchInput = screen.getByPlaceholderText('Search by title or category');

    await user.type(searchInput, 'Nonexistent Project');

    expect(screen.getByText('No projects found. Try adjusting your search or add a new project.')).toBeInTheDocument();
  });

  it('allows adding a new project', async () => {
    const user = userEvent.setup();
    render(<App />);

    const titleInput = screen.getByLabelText('Project title *');
    const descriptionInput = screen.getByLabelText('Description *');
    const imageUrlInput = screen.getByLabelText('Image URL *');
    const categorySelect = screen.getByLabelText('Category *');
    const submitButton = screen.getByRole('button', { name: /Add Project/i });

    await user.type(titleInput, 'New Digital Product');
    await user.type(descriptionInput, 'An innovative digital product design');
    await user.type(imageUrlInput, 'https://example.com/image.jpg');
    await user.selectOptions(categorySelect, 'Web Design');

    await user.click(submitButton);

    expect(screen.getByText('New Digital Product')).toBeInTheDocument();
    expect(screen.getByText('An innovative digital product design')).toBeInTheDocument();
  });

  it('clears form after successful submission', async () => {
    const user = userEvent.setup();
    render(<App />);

    const titleInput = screen.getByLabelText('Project title *');
    const descriptionInput = screen.getByLabelText('Description *');
    const imageUrlInput = screen.getByLabelText('Image URL *');
    const categorySelect = screen.getByLabelText('Category *');
    const submitButton = screen.getByRole('button', { name: /Add Project/i });

    await user.type(titleInput, 'New Project');
    await user.type(descriptionInput, 'Project description');
    await user.type(imageUrlInput, 'https://example.com/image.jpg');
    await user.selectOptions(categorySelect, 'Branding');

    await user.click(submitButton);

    expect(titleInput.value).toBe('');
    expect(descriptionInput.value).toBe('');
    expect(imageUrlInput.value).toBe('');
    expect(categorySelect.value).toBe('');
  });

  it('validates required form fields', async () => {
    const user = userEvent.setup();
    render(<App />);

    const submitButton = screen.getByRole('button', { name: /Add Project/i });

    await user.click(submitButton);

    expect(screen.getByText('Project title is required')).toBeInTheDocument();
    expect(screen.getByText('Project description is required')).toBeInTheDocument();
    expect(screen.getByText('Image URL is required')).toBeInTheDocument();
    expect(screen.getByText('Category is required')).toBeInTheDocument();
  });

  it('validates image URL format', async () => {
    const user = userEvent.setup();
    render(<App />);

    const titleInput = screen.getByLabelText('Project title *');
    const descriptionInput = screen.getByLabelText('Description *');
    const imageUrlInput = screen.getByLabelText('Image URL *');
    const categorySelect = screen.getByLabelText('Category *');
    const submitButton = screen.getByRole('button', { name: /Add Project/i });

    await user.type(titleInput, 'Project');
    await user.type(descriptionInput, 'Description');
    await user.type(imageUrlInput, 'not-a-url');
    await user.selectOptions(categorySelect, 'Branding');

    await user.click(submitButton);

    expect(screen.getByText('Must be a valid URL')).toBeInTheDocument();
  });
});
