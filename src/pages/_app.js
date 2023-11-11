import '@/styles/globals.css'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';


export default function App({ Component, pageProps }) {

  useEffect(() => {
    // Inisialisasi AOS pada komponen did mount
    AOS.init({
      // Anda dapat menambahkan konfigurasi AOS di sini jika diperlukan
      duration: 1000, // Contoh: durasi animasi 1 detik
    });
  }, []); // []
  
  return <Component {...pageProps} />
}
