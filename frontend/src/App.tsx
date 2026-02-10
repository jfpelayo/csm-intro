import './App.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

// Skeleton for the Navbar
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">CSM Scheduler</div>
      <div className="navbar-links">
        <span>Logged in as: <strong>Student</strong></span>
      </div>
    </nav>
  );
}

function Counter() {
    // START: State for the counter
    const [count, setCount] = useState<number | null>(null);

    // Fetch initial count
    useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/counter/');
                setCount(response.data.count);
            } catch (error) {
                console.error("Error fetching count:", error);
            }
        };
        fetchCount();
    }, []);

    const handleIncrement = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/increment/');
            setCount(response.data.count);
        } catch (error) {
            console.error("Error incrementing counter:", error);
            alert("Failed to increment counter. Is the backend running?");
        }
    };

    return (
        <div className="counter-card" style={{marginTop: '2rem', padding: '1rem', background: '#fff', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
            <h2>Counter Sample</h2>
            <p>Count: <strong>{count !== null ? count : '...'}</strong></p>
            <button
                onClick={handleIncrement}
                style={{padding: '0.5rem 1rem', background: '#3B82F6', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer'}}>
                Increment
            </button>
            <p style={{fontSize: '0.8rem', color: '#666', marginTop: '0.5rem'}}>
                Clicking this button calls <code>POST /api/increment/</code>
            </p>
        </div>
    )
}

// TODO: Task 3 - Implement the Course Catalog
// This component should fetch and display courses.
// Clicking a course should select it.
function CourseCatalog() {
  return (
    <div className="catalog">
      <div className="placeholder-icon">📚</div>
      <h2>Course Catalog</h2>
      <p>TODO: Fetch and display courses here.</p>
    </div>
  );
}

// TODO: Task 4 - Implement the Section Browser
// This component should display sections for the selected course.
// It should allow enrolling in a section.
function SectionBrowser() {
  return (
    <div className="sections">
      <div className="placeholder-icon">🗓️</div>
      <h2>Sections</h2>
      <p>TODO: Select a course to view sections.</p>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Counter />
      <div className="main-content">
        <h1 className="title">Welcome back!</h1>
        <p className="description">
          Select a course from the catalog to find an open section.
        </p>
        
        {/* Layout: Sidebar for Courses, Main Area for Sections */}
        <div className="content-grid">
           <div className="sidebar">
              <CourseCatalog />
           </div>
           <div className="section-area">
              <SectionBrowser />
              <Counter />
           </div>
        </div>
        
        <div className="footer-text">
            For Developers: Check <code>src/App.tsx</code> to start implementing components!
        </div>
      </div>
    </div>
  )
}

export default App
function useState<T>(arg0: null): [any, any] {
  throw new Error('Function not implemented.');
}

function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

