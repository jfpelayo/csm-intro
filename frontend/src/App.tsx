import './App.scss'

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
