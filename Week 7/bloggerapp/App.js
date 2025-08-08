import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const [view, setView] = useState('all');
  const [showBlog, setShowBlog] = useState(true);

  // Switch-case rendering
  const renderSwitchView = () => {
    switch (view) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      case 'all':
        return (
          <>
            <CourseDetails />
            <BookDetails />
            {showBlog && <BlogDetails />}
          </>
        );
      default:
        return <p>Select a view</p>;
    }
  };

  return (
    <div className="App">
      <h1>🧠 Blogger Dashboard</h1>

      <div className="controls">
        <button onClick={() => setView('course')}>Show Course</button>
        <button onClick={() => setView('book')}>Show Book</button>
        <button onClick={() => setView('blog')}>Show Blog</button>
        <button onClick={() => setView('all')}>Show All</button>
        <button onClick={() => setShowBlog(prev => !prev)}>
          {showBlog ? 'Hide Blog' : 'Show Blog'}
        </button>
      </div>

      <div className="grid">
        {renderSwitchView()}
      </div>
    </div>
  );
}

export default App;