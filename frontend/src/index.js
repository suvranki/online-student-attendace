import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Find the root DOM element in public/index.html
const rootElement = document.getElementById('root');

// Only render if root element exists
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("❌ Could not find root element in HTML.");
}

