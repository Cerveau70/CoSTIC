
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AdminApp from './AdminApp';

// Vérifier si nous sommes sur la page admin
const isAdminPage = window.location.pathname === '/admin';

const AppComponent = isAdminPage ? AdminApp : App;

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);
