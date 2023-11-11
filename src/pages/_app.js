import '@/styles/globals.css';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import '@/styles/globals.css'; // Impor style global jika ada
import AOS from 'aos';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
}, []);
  return <Component {...pageProps} />
}
