import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/stor.js'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      
    <ToastContainer
    theme="dark"
    position="top-right"
    autoClose={3000}
   closeOnClick
    pauseOnHover={false}
    
   />

<ToastContainer />


    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
