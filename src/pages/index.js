import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const delay = 1000;

    const timeout = setTimeout(() => {
      router.push('/landingPage');
    }, delay);

    return () => {
      clearTimeout(timeout);
    }
  }, [router]);
  return (
    <>
      <div className='utama'>
        <div className='utama1 d-flex' data-aos="zoom-in" data-aos-duration="2000">
          <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 105 105" fill="none">
            <path d="M15.9011 82.271C16.2039 85.0896 17.1378 87.8038 18.6336 90.212C20.1294 92.6201 22.1486 94.6603 24.5411 96.181L24.9011 96.421C34.8638 102.56 46.6061 105.16 58.2293 103.799C69.8524 102.438 80.6766 97.1964 88.9516 88.9214C97.2265 80.6465 102.468 69.8223 103.829 58.1991C105.19 46.576 102.591 34.8336 96.4511 24.871C93.9118 20.7548 90.8159 17.0094 87.2511 13.741C89.4958 17.7351 90.3727 22.3538 89.748 26.8927C89.1233 31.4316 87.0313 35.6417 83.7911 38.881L83.1111 39.561C85.5755 45.686 86.1722 52.4033 84.8261 58.8669C83.48 65.3304 80.2513 71.2511 75.5466 75.8831C70.8419 80.515 64.8717 83.6512 58.388 84.8965C51.9042 86.1418 45.197 85.4405 39.1111 82.881L38.7911 82.701C36.1703 81.0732 33.9529 78.8722 32.3057 76.2637C30.6584 73.6551 29.6243 70.7069 29.2811 67.641C28.8608 64.0514 29.374 60.4141 30.7711 57.081L21.4811 66.361C19.4151 68.423 17.8405 70.9243 16.8744 73.6788C15.9084 76.4333 15.5757 79.3702 15.9011 82.271Z" fill="url(#paint0_linear_1_13)" />
            <path d="M88.281 21.911C87.9825 19.0871 87.0506 16.3669 85.5546 13.9533C84.0586 11.5396 82.0372 9.49474 79.641 7.971L79.481 7.861L79.681 7.071L79.281 7.731C69.3183 1.59147 57.5759 -1.00802 45.9528 0.352904C34.3297 1.71383 23.5055 6.9556 15.2305 15.2305C6.9556 23.5055 1.71383 34.3297 0.352904 45.9528C-1.00802 57.5759 1.59147 69.3183 7.731 79.281C10.2703 83.3971 13.3662 87.1426 16.931 90.411C14.6863 86.4168 13.8094 81.7982 14.4341 77.2593C15.0588 72.7203 17.1508 68.5103 20.391 65.271L21.071 64.591C18.5962 58.4656 17.9918 51.7442 19.3341 45.2756C20.6764 38.8069 23.9053 32.881 28.613 28.2461C33.3207 23.6111 39.2962 20.4749 45.785 19.2335C52.2738 17.9921 58.9849 18.7011 65.071 21.271L65.391 21.451C68.0155 23.0818 70.2352 25.2875 71.8826 27.9016C73.53 30.5156 74.5621 33.4698 74.901 36.541C75.3208 40.1338 74.8076 43.7742 73.411 47.111L82.701 37.811C84.7674 35.7513 86.3424 33.2518 87.3085 30.4988C88.2746 27.7458 88.6071 24.8103 88.281 21.911Z" fill="url(#paint1_linear_1_13)" />
            <defs>
              <linearGradient id="paint0_linear_1_13" x1="30.2411" y1="102.561" x2="103.171" y2="29.631" gradientUnits="userSpaceOnUse">
                <stop offset="0.5" stop-color="#2BB3E8" />
                <stop offset="1" stop-color="#3B5AA9" />
              </linearGradient>
              <linearGradient id="paint1_linear_1_13" x1="1.011" y1="74.551" x2="74.091" y2="1.471" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3B5AA9" />
                <stop offset="0.5" stop-color="#2BB4E8" />
              </linearGradient>
            </defs>
          </svg>
          <div className='svgdiv2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" viewBox="0 0 40 100" fill="none">
              <path d="M4.22842 0.933411H35.2995C36.3623 0.933411 37.3815 1.35563 38.133 2.10713C38.8845 2.85864 39.3067 3.87785 39.3067 4.94064V10.9216C39.3067 11.9844 38.8845 13.0036 38.133 13.7551C37.3815 14.5066 36.3623 14.9289 35.2995 14.9289H17.9846C16.9218 14.9289 15.9026 15.351 15.1511 16.1025C14.3996 16.854 13.9774 17.8733 13.9774 18.9361V38.2845C13.9774 39.3473 14.3996 40.3665 15.1511 41.118C15.9026 41.8695 16.9218 42.2917 17.9846 42.2917H30.111C31.1737 42.2917 32.193 42.7139 32.9446 43.4654C33.6961 44.2169 34.1183 45.2362 34.1183 46.299V52.2799C34.1183 52.8054 34.0145 53.3258 33.8129 53.8111C33.6113 54.2965 33.3159 54.7373 32.9436 55.1082C32.5713 55.4791 32.1294 55.7729 31.6433 55.9726C31.1572 56.1723 30.6365 56.2742 30.111 56.2722H17.9846C16.9218 56.2722 15.9026 56.6944 15.1511 57.4459C14.3996 58.1974 13.9774 59.2167 13.9774 60.2794V81.0483C13.9813 82.1085 14.4053 83.1239 15.1563 83.8722C15.9074 84.6205 16.9244 85.0406 17.9846 85.0406H35.2995C35.8257 85.0406 36.3468 85.1443 36.833 85.3456C37.3191 85.547 37.7609 85.8422 38.133 86.2143C38.5051 86.5864 38.8003 87.0282 39.0017 87.5143C39.2031 88.0005 39.3067 88.5216 39.3067 89.0478V95.0288C39.3067 96.0916 38.8845 97.1108 38.133 97.8623C37.3815 98.6138 36.3623 99.036 35.2995 99.036H4.22842C3.16563 99.036 2.14637 98.6138 1.39487 97.8623C0.643365 97.1108 0.221191 96.0916 0.221191 95.0288V4.94064C0.221191 3.87785 0.643365 2.85864 1.39487 2.10713C2.14637 1.35563 3.16563 0.933411 4.22842 0.933411Z" fill="#3C5BA9" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="99" viewBox="0 0 42 99" fill="none">
              <path d="M41.3226 13.1663L17.5333 78.7026C17.3149 79.3076 17.2453 79.9564 17.3305 80.5939C17.4157 81.2315 17.6531 81.8392 18.0226 82.3656C18.3922 82.8921 18.8831 83.3219 19.4537 83.6186C20.0244 83.9154 20.6581 84.0704 21.3013 84.0706H37.5546C38.6174 84.0706 39.6367 84.4928 40.3882 85.2443C41.1397 85.9958 41.5618 87.015 41.5618 88.0778V94.0588C41.5618 95.1216 41.1397 96.1408 40.3882 96.8923C39.6367 97.6438 38.6174 98.066 37.5546 98.066H4.27053C3.20775 98.066 2.18853 97.6438 1.43703 96.8923C0.685525 96.1408 0.263306 95.1216 0.263306 94.0588V86.134C0.297952 85.7218 0.398953 85.3178 0.562372 84.9378L24.3516 19.4015C24.57 18.7965 24.6396 18.1478 24.5545 17.5102C24.4693 16.8727 24.2319 16.265 23.8623 15.7385C23.4928 15.2121 23.0019 14.7823 22.4312 14.4855C21.8606 14.1888 21.2269 14.0337 20.5836 14.0336H4.27053C3.20775 14.0336 2.18853 13.6114 1.43703 12.8599C0.685525 12.1084 0.263306 11.0891 0.263306 10.0263V4.04538C0.263306 2.98259 0.685525 1.96333 1.43703 1.21182C2.18853 0.46032 3.20775 0.038147 4.27053 0.038147H37.5546C38.6174 0.038147 39.6367 0.46032 40.3882 1.21182C41.1397 1.96333 41.5618 2.98259 41.5618 4.04538V11.9702C41.5407 12.3784 41.4601 12.7814 41.3226 13.1663Z" fill="#3C5BA9" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="100" viewBox="0 0 44 100" fill="none">
              <path d="M0.416992 4.94067C0.416992 3.87788 0.839211 2.85866 1.59071 2.10716C2.34222 1.35566 3.36143 0.933438 4.42422 0.933438H21.9634C24.8884 0.800771 27.8074 1.30272 30.5201 2.40481C33.2327 3.50691 35.6747 5.18307 37.6783 7.31814C41.5859 11.5746 43.5347 17.2614 43.5248 24.3788V35.8772C43.5248 42.9945 41.5759 48.6764 37.6783 52.9229C35.6779 55.0631 33.2368 56.7436 30.5236 57.8485C27.8105 58.9534 24.8899 59.4563 21.9634 59.3225H18.1804C17.6549 59.3206 17.1341 59.4224 16.6481 59.6221C16.162 59.8219 15.7201 60.1156 15.3478 60.4865C14.9754 60.8575 14.68 61.2982 14.4785 61.7836C14.2769 62.2689 14.1732 62.7893 14.1732 63.3148V95.1634C14.1732 96.2262 13.751 97.2454 12.9995 97.9969C12.248 98.7484 11.2288 99.1706 10.166 99.1706H4.42422C3.36143 99.1706 2.34222 98.7484 1.59071 97.9969C0.839211 97.2454 0.416992 96.2262 0.416992 95.1634V4.94067ZM21.3503 45.3121C22.5001 45.3812 23.6514 45.2034 24.7269 44.7908C25.8023 44.3781 26.7769 43.7402 27.5855 42.9198C29.1525 41.041 29.9393 38.6327 29.7835 36.1912V24.1246C29.937 21.6788 29.1508 19.2666 27.5855 17.3811C26.7739 16.5657 25.7984 15.9321 24.7235 15.5222C23.6485 15.1123 22.4987 14.9356 21.3503 15.0036H18.2104C17.1476 15.0036 16.1283 15.4258 15.3768 16.1773C14.6253 16.9288 14.2031 17.9481 14.2031 19.0109V41.3049C14.2031 42.3677 14.6253 43.3869 15.3768 44.1384C16.1283 44.8899 17.1476 45.3121 18.2104 45.3121H21.3503Z" fill="#2CB3E8" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="100" viewBox="0 0 45 100" fill="none">
              <path d="M30.2271 96.1203L21.734 61.6551C21.5088 60.7964 21.0048 60.0369 20.3012 59.4956C19.5976 58.9544 18.7342 58.6621 17.8465 58.6646C17.3209 58.6627 16.8002 58.7645 16.3141 58.9642C15.828 59.164 15.3862 59.4577 15.0139 59.8286C14.6416 60.1996 14.3461 60.6403 14.1445 61.1257C13.9429 61.611 13.8392 62.1314 13.8392 62.6569V95.2083C13.8392 96.2685 13.4191 97.2855 12.6708 98.0365C11.9225 98.7876 10.9072 99.2115 9.84696 99.2155H4.09024C3.02745 99.2155 2.00823 98.7933 1.25673 98.0418C0.505227 97.2903 0.0830078 96.2711 0.0830078 95.2083V4.94067C0.0830078 3.87788 0.505227 2.85866 1.25673 2.10716C2.00823 1.35566 3.02745 0.933438 4.09024 0.933438H21.6295C24.5544 0.800771 27.4734 1.30272 30.1861 2.40481C32.8988 3.50691 35.3407 5.18307 37.3443 7.31814C41.2519 11.5746 43.2007 17.2614 43.1908 24.3788V35.1744C43.2776 39.2964 42.4343 43.385 40.7236 47.1363C39.5126 49.7437 37.747 52.0553 35.5501 53.9097C35.0028 54.3934 34.6039 55.0226 34.4001 55.7241C34.1963 56.4255 34.1958 57.1704 34.3988 57.8722L43.9534 94.1766C44.106 94.7701 44.121 95.3907 43.9972 95.9909C43.8733 96.5912 43.614 97.1552 43.239 97.6399C42.8639 98.1246 42.383 98.5171 41.8331 98.7876C41.2831 99.0581 40.6786 99.1993 40.0657 99.2005H34.0847C33.1908 99.1888 32.3264 98.8797 31.6278 98.3219C30.9292 97.7641 30.4364 96.9895 30.2271 96.1203ZM13.7794 40.5722C13.7794 41.635 14.2016 42.6543 14.9531 43.4058C15.7046 44.1573 16.7239 44.5795 17.7867 44.5795H20.9266C22.0751 44.6475 23.2248 44.4708 24.2998 44.0609C25.3747 43.651 26.3502 43.0174 27.1618 42.202C28.7271 40.3165 29.5134 37.9043 29.3598 35.4585V24.0947C29.5134 21.6489 28.7271 19.2367 27.1618 17.3512C26.3502 16.5358 25.3747 15.9021 24.2998 15.4923C23.2248 15.0824 22.0751 14.9057 20.9266 14.9738H17.7867C16.7239 14.9738 15.7046 15.3959 14.9531 16.1474C14.2016 16.8989 13.7794 17.9182 13.7794 18.981V40.5722Z" fill="#2CB3E8" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="102" viewBox="0 0 45 102" fill="none">
              <path d="M6.49245 95.042C2.4254 90.6859 0.391846 84.9591 0.391846 77.8617V24.2574C0.391846 17.14 2.4254 11.4083 6.49245 7.06211C10.7599 2.88221 16.4956 0.541199 22.4691 0.541199C28.4426 0.541199 34.1782 2.88221 38.4457 7.06211C42.5127 11.4182 44.5463 17.15 44.5463 24.2574V77.8617C44.5463 84.969 42.5127 90.6958 38.4457 95.042C34.1819 99.229 28.4449 101.575 22.4691 101.575C16.4932 101.575 10.7562 99.229 6.49245 95.042ZM28.5772 85.0089C30.1649 82.9784 30.9475 80.4335 30.7751 77.8617V24.2574C30.9413 21.6817 30.1596 19.1342 28.5772 17.0952C26.9592 15.4772 24.7647 14.5682 22.4766 14.5682C20.1884 14.5682 17.9939 15.4772 16.376 17.0952C14.7793 19.1275 13.9911 21.6786 14.163 24.2574V77.8617C13.9949 80.4354 14.7829 82.9805 16.376 85.0089C17.9939 86.6269 20.1884 87.5359 22.4766 87.5359C24.7647 87.5359 26.9592 86.6269 28.5772 85.0089Z" fill="#2CB3E8" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="102" viewBox="0 0 45 102" fill="none">
              <path d="M34.6613 32.8717C33.5986 32.8717 32.5793 32.4495 31.8277 31.698C31.0762 30.9465 30.6541 29.9273 30.6541 28.8645V24.633C30.826 22.0542 30.0377 19.5031 28.4411 17.4708C26.8231 15.8528 24.6287 14.9438 22.3406 14.9438C20.0524 14.9438 17.858 15.8528 16.24 17.4708C14.6576 19.5098 13.8757 22.0573 14.0419 24.633V78.2373C13.8785 80.8126 14.66 83.3592 16.24 85.3995C17.8618 87.0102 20.0548 87.9141 22.3406 87.9141C24.6263 87.9141 26.8193 87.0102 28.4411 85.3995C30.0377 83.3672 30.826 80.816 30.6541 78.2373V64.7801C30.6541 63.7173 30.2319 62.6981 29.4804 61.9466C28.7289 61.1951 27.7096 60.7729 26.6468 60.7729H26.3478C25.8191 60.7788 25.2943 60.68 24.8039 60.4822C24.3135 60.2844 23.8672 59.9916 23.4905 59.6204C23.1138 59.2493 22.8143 58.8073 22.6093 58.3199C22.4042 57.8325 22.2976 57.3094 22.2957 56.7806V50.7996C22.2996 49.7394 22.7235 48.724 23.4746 47.9758C24.2257 47.2275 25.2427 46.8073 26.3029 46.8073H40.3732C41.4334 46.8073 42.4503 47.2275 43.2014 47.9758C43.9525 48.724 44.3764 49.7394 44.3804 50.7996V78.2373C44.3804 85.3447 42.3468 91.0764 38.2798 95.4325C34.0123 99.6124 28.2767 101.953 22.3032 101.953C16.3297 101.953 10.594 99.6124 6.32655 95.4325C2.2595 91.0864 0.225952 85.3546 0.225952 78.2373V24.633C0.225952 17.5156 2.2595 11.7839 6.32655 7.43772C10.594 3.25782 16.3297 0.916809 22.3032 0.916809C28.2767 0.916809 34.0123 3.25782 38.2798 7.43772C42.3468 11.7839 44.3804 17.5156 44.3804 24.633V28.9093C44.3804 29.9721 43.9582 30.9914 43.2067 31.7429C42.4552 32.4944 41.436 32.9166 40.3732 32.9166L34.6613 32.8717Z" fill="#2CB3E8" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
