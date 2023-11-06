export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="d-flex foot">
                <div className="d-flex foot-item">
                    <img src="/logo.svg" />
                    <p>EZPROG</p>
                </div>
                <p className="footbot">Copyright &copy; {currentYear} EZprog Company</p>
            </div>
        </>
    )
}