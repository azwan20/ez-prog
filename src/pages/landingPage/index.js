import Link from "next/link";
import Footer from "./footer";
import Header from "./header";

export default function Landingpage() {
    const svg = ["mobile.svg", "web.svg", "ml.svg", "ui.svg", "design.svg"];
    const serviceItem = ["Mobile App", "Web App", "Machine Learning", "UI/UX", "Design"];
    const h1porto = [
        ["PuzDent", "BEMSAPP", "Attance", "ROIMIF"],
        ["Starbucks Clone", "Monitoring", "Portofolio", "MSI"]
    ];
    const prgporto = [
        ["Game ini merupakan game puzzle berbasis mobile yang dapat dimainkan disistem operasi android",
            "Aplikasi ini membantu memonitoring pengiriman sampah daur ulang",
            "Aplikasi ini membantu pengguna mendeteksi jenis jerawatnya",
            "Aplikasi ini merupakan pemesanan kopi lokal untuk membantu pemesanan instan"],
        [
            "Aplikasi ini adalah clone dari Starbucks Web pada sisi Front-End",
            "Aplikasi untuk memonitoring nilai, absesnsi, dan hal akademis  pada FIKOM",
            "Aplikasi menampilkan portofolio pribadi menggunakan React.js",
            "Aplikasi E-commarce untuk pemasaran produk-produk dari MSI"
        ]
    ];
    const portosvg = [
        ["porto.svg", "bemsapp.svg", "attacne.svg", "roimif.svg"],
        ["starbucks.svg", "monitoring.svg", "project.svg", "msi.svg"]
    ];
    const aboutsvg = ["Kontrak-kerja.svg", "Design-about.svg", "website.svg", "ml-about.svg", "Mobile-about.svg", "Proposal-Skripsi.svg"];
    const aboutItem = ["Kontrak Kerja", "Design", "Web Application", "Machine Learning", "Mobile Application", "Proposal/Skripsi"]
    return (
        <>
            <main>
                <article className="umum" id="home">
                    <Header />
                    <div className="conten">
                        <div className="contain">
                            <h1>Solusi Kreatif, dan Produktif Gen-Z</h1>
                            <span className="d-flex">
                                <button className="btn1" aria-label="Chat on WhatsApp" href="https://wa.me/+62 852-4089-9096">
                                    <Link aria-label="Chat on WhatsApp" href="https://wa.me/+6285240899096">Oder Now</Link>
                                </button>
                                <button><Link href="#service">Show More</Link></button>
                            </span>
                        </div>
                    </div>
                    <span className="d-flex rec">
                        <div className="bulat"></div>
                    </span>
                </article>

                <article className="starServ">
                    <button>
                        Start
                    </button>
                    <div className="d-flex star">
                        <span>
                            <p>Halo! Kami adalah EZPROG yang menyediakan jasa pembuatan aplikasi, proposal, skripsi, desain grafis, dan lain-lain. Kami berkomitmen untuk memberikan layanan terbaik dengan harga yang terjangkau dan berkualitas.</p>
                            <p>Kami melayani berbagai jenis pelanggan, mulai dari perorangan hingga perusahaan. Kami juga memiliki tim yang berpengalaman dan profesional di bidangnya.</p>
                        </span>
                        <img src="star.svg" />
                    </div>
                    <button id="service">
                        Service
                    </button>
                    <div className="service d-flex">
                        <span className="d-flex service-item row">
                            {[0, 1, 2, 3, 4].map((index) => (
                                <div className="col-lg-2 col-md-4 col-sm-4 srv">
                                    <div key={index}>
                                        <div className="bg d-flex">
                                            <img src={svg[index]} />
                                        </div>
                                        <p> {serviceItem[index]} </p>
                                    </div>
                                </div>
                            ))}
                        </span>
                    </div>
                </article>

                <article className="porto" id="portofolio">
                    <button>
                        Portofolio
                    </button>
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" >
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="d-flex porto-item row">
                                    {[0, 1, 2, 3].map((index) => (
                                        <span>
                                            <div>
                                                <h1>{h1porto[0][index]}</h1>
                                                <p>{prgporto[0][index]}</p>
                                            </div>
                                            <img src={portosvg[0][index]} />
                                        </span>
                                    ))}
                                    <div className="d-flex pName">
                                        <h2>Mobile Application</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="d-flex porto-item row">
                                    {[0, 1, 2, 3].map((index) => (
                                        <span>
                                            <div>
                                                <h1>{h1porto[1][index]}</h1>
                                                <p>{prgporto[1][index]}</p>
                                            </div>
                                            <img src={portosvg[1][index]} />
                                        </span>
                                    ))}
                                    <div className="d-flex pName">
                                        <h2>Web Application</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="d-flex porto-item row">
                                    {[0, 1, 2, 3].map((index) => (
                                        <span>
                                            <div>
                                                <h1>{h1porto[0][index]}</h1>
                                                <p>{prgporto[0][index]}</p>
                                            </div>
                                            <img src={portosvg[1][index]} />
                                        </span>
                                    ))}
                                    <div className="d-flex pName">
                                        <h2>Machine Learning</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="about" id="about">
                    <button>
                        About
                    </button>
                    <div className=" d-flex about-contain">
                        <span className="about-con row">
                            {[0, 1, 2, 3, 4, 5].map((index) => (
                                <Link href="https://s.id/Info_Selengkapnya" className="">
                                    <div className="d-flex about-conn col-lg-2 col-sm-6">
                                        <span className="about-item">
                                            <img src={aboutsvg[index]} />
                                            <p>{aboutItem[index]}</p>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </span>
                    </div>
                    <div className="sosial">
                        <p>Media Sosial</p>
                        <span className="d-flex">
                            <div className=" d-flex sosial-item">
                                <Link href="https://www.instagram.com/ezprog_/"> <img src="ig.svg" /> </Link>
                                <img src="fb.svg" />
                                <img src="ytb.svg" />
                                <img src="twit.svg" />
                            </div>
                        </span>
                    </div>
                </article>

                <Footer />
            </main>
        </>
    )
}
