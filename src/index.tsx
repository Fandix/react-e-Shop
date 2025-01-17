import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
