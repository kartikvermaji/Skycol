import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//redux
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import authReducer from "./state/state.js"
const store=configureStore({
  reducer:{
   STATE:authReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
  </React.StrictMode>
)
