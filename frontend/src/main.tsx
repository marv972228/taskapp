import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskApp from './components/Tasks/TaskApp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskApp />
  </React.StrictMode>,
)
