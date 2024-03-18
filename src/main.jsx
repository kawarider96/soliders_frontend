import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import store from './SUPPORT/redux/store.js'
import { ThemeProvider } from '@mui/material'
import { theme } from './SUPPORT/STYLES/AppTheme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
      <App />
    </Provider>
)
