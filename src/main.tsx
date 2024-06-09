import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

async function fetchCSRFTokenAndUpdateMetaTag() {
  try {
    const response = await fetch('http://localhost:8000/api/get_csrf_token/', {
      credentials: 'include',
    });
    const data = await response.json();
    const csrfToken = data.csrfToken;
    console.log(csrfToken);

    let metaTag = document.querySelector('meta[name="csrf-token"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'csrf-token');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', csrfToken);

    return csrfToken; // Return the CSRF token
  } catch (error) {
    console.error('Failed to fetch CSRF token:', error);
    return null;
  }
}

async function renderApp() {
  try {
    const csrfToken = await fetchCSRFTokenAndUpdateMetaTag(); // Fetch the CSRF token
    if (!csrfToken) {
      console.error('CSRF token is null or undefined');
      return;
    }

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App csrfToken={csrfToken} />
      </React.StrictMode>,
    );
  } catch (error) {
    console.error('Error rendering app:', error);
  }
}

renderApp();
