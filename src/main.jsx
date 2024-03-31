import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateProvider } from "./contexts/stateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
        <App/>
    </StateProvider>
  </React.StrictMode>,
)
