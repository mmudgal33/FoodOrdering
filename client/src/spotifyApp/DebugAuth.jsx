// DebugAuth.jsx
import React from 'react';

export default function DebugAuth() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  
  return (
    <div style={{ padding: '20px', background: '#f0f0f0' }}>
      <h3>Debug Info:</h3>
      <p>Current URL: {window.location.href}</p>
      <p>Code parameter: {code || 'NOT FOUND'}</p>
      <p>All URL parameters:</p>
      <ul>
        {Array.from(urlParams.entries()).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
    </div>
  );
}