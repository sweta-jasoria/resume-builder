import React from 'react';
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import {AppContextProvider} from './context/AppContext';
import {Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialMediaLinks from './components/SocialMediaLinks';
import StepsProgressBar from './components/StepsProgressBar/StepsProgressBar';

const App: React.FC = () => {
  return (
      <React.Fragment>
          <Navbar />
          <AppContextProvider>
              <StepsProgressBar />
              <SocialMediaLinks/>

              <Routes>
                  <Route path='/' element={<Navigate replace to='/resume-builder' />} />
              </Routes>
          </AppContextProvider>
      </React.Fragment>
  );
}

export default App;
