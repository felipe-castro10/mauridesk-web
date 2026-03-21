import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GlobalStyles from './styles/global'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <App />
    <GlobalStyles/>
    </ThemeProvider>
  </StrictMode>,
)
