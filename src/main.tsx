import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@/services/emailService' // EmailJS servisini initialize et

createRoot(document.getElementById("root")!).render(<App />);
