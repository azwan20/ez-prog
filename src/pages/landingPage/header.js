import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false); // State untuk mengontrol tampilan menu

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <>
            <nav>
                <div>
                    <img src="/logoNav.svg" />
                </div>
                <div className="menu">
                    <button className="burger" onClick={toggleMenu}>
                        <span class="material-symbols-outlined">menu</span>
                    </button>
                    <div className={`links ${menuVisible ? "active" : ""}`}>
                        <Link href="#home">Home</Link>
                        <Link href="#service">Service</Link>
                        <Link href="#portofolio">Portofolio</Link>
                        <Link href="#about">Price List</Link>
                    </div>
                </div>
            </nav>



        </>
    )
}
