export function Home() {
    return <div className="home">
        <header className="header">
            <div>
                <h2 className="h2-header">Instaflan</h2>
                {/* <img src="../images/flan.png" alt="Icon flan" /> */}
            </div>
            <div className="div-search">
                <input className="search-input" type="text" placeholder="search..." />
                <button className="search-button">🔍</button>
            </div>
        </header>
        <main className="main-home"></main>
        <footer className="footer">
            <a className="footer-emogis" href="#">🏠</a>
            <a className="footer-emogis" href="#">🌍</a>
            <a className="footer-emogis" href="#">➕</a>
            <a className="footer-emogis" href="#">✉️</a>
            <a className="footer-emogis" href="#">❤️</a>
            <a className="footer-emogis" href="#">🧒</a>
        </footer>
    </div>
}