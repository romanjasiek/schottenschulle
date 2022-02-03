import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import './styles/app.scss';

import Header from './components/Header';
import WelcomeSection from '././components/WelcomeSection';
import Features from '././components/Features';
import FeatureDetails from './components/FeatureDetails';
import LearningBagpipe from './components/LearningBagpipe';
import BurnsSupper from './components/BurnsSupper';
import BurnsConnection from './components/BurnsConnection';
import Gallery from './components/Gallery';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

import Datenschutz from './components/Datenschutz';
import Impressum from './components/Impressum';

function App() {
  return (
    <div>
      <Router>
        <SimpleReactLightbox>
          <Header />
          <WelcomeSection />
          <Features />
          <FeatureDetails />
          <LearningBagpipe />
          <BurnsSupper />
          <BurnsConnection />
          <Gallery />
          <AboutMe />
          <Routes>
            <Route path='/' element={<Outlet />} />
            <Route path='datenschutz' element={<Datenschutz />} />
            <Route path='impressum' element={<Impressum />} />
          </Routes>
          <Footer />
        </SimpleReactLightbox>
      </Router>
    </div>
  );
}

export default App;
