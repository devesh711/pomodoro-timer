import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateProvider } from "./contexts/stateProvider";
import reducer, { initialState } from "./reducer";
import ThemeProvider from './contexts/themeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>,
)
