import '@/styles/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
}, []);
  return <Component {...pageProps} />
}
