import Link from "next/link";

export default function Header() {
    return (
        <>
            <nav>
                <div>
                    <img src="/logoNav.svg" />
                </div>
                <div>
                    <Link href="">Home</Link>
                    <Link href="">Service</Link>
                    <Link href="">Portofolio</Link>
                    <Link href="">About</Link>
                </div>
            </nav>



        </>
    )
}