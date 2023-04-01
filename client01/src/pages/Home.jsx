import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = React.useState('');

  const handleCategorySelection = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const review = formData.get('review');
    console.log(review);
    event.target.reset();
  };

  return (
    <div>
      <h1>Movie Awards App</h1>
      <h2>Vote for your favorite movie!</h2>
      <form>
        <label htmlFor="category-select">Choose a category:</label>
        <select id="category-select" value={selectedCategory} onChange={handleCategorySelection}>
          <option value="">Select a category</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="horror">Horror</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
        </select>
      </form>
      {selectedCategory && (
        <div>
          <h3>Vote for your favorite {selectedCategory} movie:</h3>
          <ul>
            <li>Movie 1</li>
            <li>Movie 2</li>
            <li>Movie 3</li>
            <li>Movie 4</li>
            <li>Movie 5</li>
          </ul>
        </div>
      )}
      <h2>Leave a review:</h2>
      <form onSubmit={handleReviewSubmit}>
        <label htmlFor="review-input">Add a review:</label>
        <input id="review-input" name="review" type="text" />
        <button type="submit">Submit</button>
      </form>
      <h2>View reviews:</h2>
      <ul>
        <li>Review 1</li>
        <li>Review 2</li>
        <li>Review 3</li>
      </ul>
      <Link to="/my-votes">View my votes</Link>
      <br />
      <Link to="/my-reviews">View my reviews</Link>
    </div>
  );
}

export default HomePage;
