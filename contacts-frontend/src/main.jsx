import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store, persistor} from './Store/store.js'
import {Toaster} from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Toaster position='bottom-center' gutter={56} />
        <App />
      </PersistGate>
      </Provider>
  </React.StrictMode>,
)
