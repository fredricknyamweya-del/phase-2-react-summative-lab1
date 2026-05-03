import { useState } from 'react';
import './AddProjectForm.css';

function AddProjectForm({ onAddProject }) {
  // Keep track of what the user is typing
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    category: ''
  });

  // Track any validation issues we find
  const [validationErrors, setValidationErrors] = useState({});
  // Show loading state while "submitting"
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form data as user types, and clear errors for that field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    // If there was an error for this field, clear it now
    if (validationErrors[name]) {
      setValidationErrors((current) => {
        const updated = { ...current };
        delete updated[name];
        return updated;
      });
    }
  };

  // Check if all required fields are filled and valid
  const validateForm = () => {
    const errors = {};

    if (!formData.title.trim()) {
      errors.title = 'Project title is required';
    }
    if (!formData.description.trim()) {
      errors.description = 'Project description is required';
    }
    if (!formData.imageUrl.trim()) {
      errors.imageUrl = 'Image URL is required';
    } else {
      try {
        new URL(formData.imageUrl);
      } catch {
        errors.imageUrl = 'Must be a valid URL';
      }
    }
    if (!formData.category.trim()) {
      errors.category = 'Category is required';
    }

    return errors;
  };

  // Handle form submission with validation and fake loading
  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Show loading state for a moment (simulating API call)
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Add the project and reset the form
    onAddProject(formData);
    setFormData({ title: '', description: '', imageUrl: '', category: '' });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="add-project-form" id="add-project" noValidate>
      {/* Project title - make it catchy! */}
      <div className="form-group">
        <label htmlFor="title">Project title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="e.g., Digital Transformation Campaign"
          aria-invalid={!!validationErrors.title}
          aria-describedby={validationErrors.title ? 'title-error' : undefined}
        />
        {validationErrors.title && (
          <div id="title-error" className="error-message">
            {validationErrors.title}
          </div>
        )}
      </div>

      {/* Tell us about the project */}
      <div className="form-group">
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe the project and its impact..."
          aria-invalid={!!validationErrors.description}
          aria-describedby={validationErrors.description ? 'description-error' : undefined}
        />
        {validationErrors.description && (
          <div id="description-error" className="error-message">
            {validationErrors.description}
          </div>
        )}
      </div>

      {/* Image and category in a nice grid */}
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL *</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            placeholder="https://example.com/image.jpg"
            aria-invalid={!!validationErrors.imageUrl}
            aria-describedby={validationErrors.imageUrl ? 'imageUrl-error' : undefined}
          />
          {validationErrors.imageUrl && (
            <div id="imageUrl-error" className="error-message">
              {validationErrors.imageUrl}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            aria-invalid={!!validationErrors.category}
            aria-describedby={validationErrors.category ? 'category-error' : undefined}
          >
            <option value="">Select a category</option>
            <option value="Branding">Branding</option>
            <option value="Web Design">Web Design</option>
            <option value="Campaign">Campaign</option>
            <option value="UI/UX">UI/UX</option>
            <option value="App Development">App Development</option>
          </select>
          {validationErrors.category && (
            <div id="category-error" className="error-message">
              {validationErrors.category}
            </div>
          )}
        </div>
      </div>

      {/* Submit button - let's add that project! */}
      <button type="submit" disabled={isSubmitting} className="submit-button">
        {isSubmitting ? 'Adding...' : 'Add Project'}
      </button>
    </form>
  );
}

export default AddProjectForm;
