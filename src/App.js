import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing the page components
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import RedCrossGalleryPage from './pages/RedCrossGalleryPage';
import ContactUsPage from './pages/ContactUsPage';
import AdminPanelPage from './pages/AdminPanelPage';

// Importing NavBar
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/redcross-gallery" element={<RedCrossGalleryPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/admin" element={<AdminPanelPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
