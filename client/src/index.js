import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProjectProvider } from './contextAPI/ProjectContext';
import { ShowProvider } from './contextAPI/showContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProjectProvider>
    <ShowProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShowProvider>
  </ProjectProvider>
);

