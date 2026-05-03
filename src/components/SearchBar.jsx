import './SearchBar.css';

function SearchBar({ searchQuery, onSearch }) {
  return (
    <label className="search-control">
      {/* Hidden label for accessibility */}
      <span className="visually-hidden">Search projects</span>
      <input
        type="search"
        placeholder="Search by title or category"
        value={searchQuery}
        onChange={(event) => onSearch(event.target.value)}
      />
    </label>
  );
}

export default SearchBar;
