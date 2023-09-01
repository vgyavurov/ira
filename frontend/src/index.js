import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { AuthContextProvider } from './context/AuthContext'
import { AssessmentsContextProvider } from './context/AssessmentContext';
import { ConfigurationsContextProvider } from './context/ConfigurationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigurationsContextProvider>
    <AuthContextProvider>
    <AssessmentsContextProvider>
     <App />
    </AssessmentsContextProvider>
    </AuthContextProvider>
    </ConfigurationsContextProvider>
  </React.StrictMode>
);

