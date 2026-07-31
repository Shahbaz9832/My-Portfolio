import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root was not found in index.html')
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary name="app">
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
