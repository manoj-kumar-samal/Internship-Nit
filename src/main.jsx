import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Task1 from './Task/april15/task1.jsx'
import { BrowserRouter } from 'react-router-dom'
import Task2 from './Task/april16/task2.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Task2/>
  </BrowserRouter>
)
