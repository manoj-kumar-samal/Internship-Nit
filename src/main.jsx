import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Task1 from './Task/april15/task1.jsx'
import { BrowserRouter } from 'react-router-dom'
import Task2 from './Task/april16/task2.jsx'
import Login from './Task/april17/login.jsx'
import Task3 from './Task/april17/task3.jsx'
import Home from './Task/april19/home.jsx'
import Task4 from './Task/april19/Task4.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Task4/>
  </BrowserRouter>
)
