import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './components/SearchBar';

describe('SearchBar', () => {
  it('renders search input', () => {
    const mockFn = jest.fn();
    render(<SearchBar searchQuery="" onSearch={mockFn} />);

    expect(screen.getByPlaceholderText('Search by title or category')).toBeInTheDocument();
  });

  it('calls onSearch with input value', async () => {
    const user = userEvent.setup();
    const mockOnSearch = jest.fn();

    render(<SearchBar searchQuery="" onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search by title or category');

    await user.type(input, 'React');

    expect(mockOnSearch).toHaveBeenCalledWith('R');
    expect(mockOnSearch).toHaveBeenCalledWith('Re');
    expect(mockOnSearch).toHaveBeenCalledWith('Rea');
    expect(mockOnSearch).toHaveBeenCalledWith('React');
  });

  it('displays current search query value', () => {
    const mockFn = jest.fn();
    render(<SearchBar searchQuery="Portfolio" onSearch={mockFn} />);

    const input = screen.getByPlaceholderText('Search by title or category');
    expect(input.value).toBe('Portfolio');
  });
});
