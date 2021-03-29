import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataEventsProvider from './Context/DataEvents';

ReactDOM.render(
  <React.StrictMode>
    <DataEventsProvider>
      <App />
    </DataEventsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
