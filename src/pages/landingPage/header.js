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
                        <Link href="">Home</Link>
                        <Link href="">Service</Link>
                        <Link href="">Portofolio</Link>
                        <Link href="">About</Link>
                    </div>
                </div>
            </nav>



        </>
    )
}
