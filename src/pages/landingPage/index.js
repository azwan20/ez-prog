import Link from "next/link";
import Footer from "./footer";
import Header from "./header";

export default function Landingpage() {
    const svg = ["mobile.svg", "web.svg", "ml.svg", "ui.svg", "design.svg"];
    const serviceItem = ["Mobile App", "Web App", "Machine Learning", "UI/UX", "Design"];
    const aboutsvg = ["Kontrak-kerja.svg", "Design-about.svg", "website.svg", "ml-about.svg", "Mobile-about.svg", "Proposal-Skripsi.svg"];
    const aboutItem = ["Kontrak Kerja", "Harga Design", "Web Application", "Machine Learning", "Mobile Application", "Proposal/Skripsi"]
    return (
        <>
            <main>
                <article className="umum">
                    <Header />
                    <div className="conten">
                        <div className="contain">
                            <h1>Solusi Kreatif, dan Produktif Gen-Z</h1>
                            <span className="d-flex">
                                <button className="btn1" >Oder Now</button>
                                <button>Show More</button>
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
                    <button>
                        Service
                    </button>
                    <div className="service d-flex">
                        <span className="d-flex service-item row">
                            {[0, 1, 2, 3, 4].map((index) => (
                                <div className="col-lg-2 col-sm-4 srv">
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

                <article className="porto">
                    <button>
                        Portofolio
                    </button>
                    {/* <marquee className=""> */}
                    <div className="d-flex porto-item row">
                        {[0, 1, 2, 3].map((index) => (
                            <span>
                                <div>
                                    <h1>PuzDent</h1>
                                    <p>Game ini merupakan game puzzle berbasis mobile yang dapat dimainkan disistem operasi android</p>
                                </div>
                                <img src="porto.svg" />
                            </span>
                        ))}
                    </div>
                    {/* </marquee> */}
                </article>

                <article className="about">
                    <button>
                        About
                    </button>
                    <div className=" d-flex about-contain">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                            <Link href="https://s.id/Info_Selengkapnya">
                                <div className="d-flex about-con">
                                    <span className="about-item">
                                        <img src={aboutsvg[index]} />
                                        <p>{aboutItem[index]}</p>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="sosial">
                        <p>Media Sosial</p>
                        <span className="d-flex">
                            <div className=" d-flex sosial-item">
                                <img src="ig.svg" />
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
