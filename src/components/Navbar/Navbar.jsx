// 
import { useState, useCallback } from 'react';
import navbarLogo from "../../assets/images/logo_main.png"
import profileIcon from "../../assets/svgs/icon_profile.svg"
import modeIcon from "../../assets/svgs/icon_dark_mode.svg"
import arrowIcon from "../../assets/svgs/arrow.svg"
import closeIcon from "../../assets/svgs/close_icon.svg"
import humburgerIcon from "../../assets/svgs/humburger.svg"
import { SearchIcon } from '../SearchIcon/Search';
import "./Navbar.css";

const navLinks = [
    { label: "ענפי ביטוח", href: "#" },
    { label: "אודות", href: "#" },
    { label: "?מה חדש", href: "#" },
    { label: "שירות לקוחות", href: "#" },
];

const Navbar = ({ isSearchOpen, setIsSearchOpen }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSearchChange = useCallback((e) => {
        setSearchQuery(e.target.value);
    }, []);

    const handleSearchSubmit = useCallback((e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
        }
    }, [searchQuery]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return <>
        <nav className="navbar" role="navigation" aria-label="תפריט ראשי">
            {!isSearchOpen ? <>
                <div className="navbar-actions desktop-only">
                    <button className="login-btn" aria-label="כניסה לאזור אישי">
                        <span>כניסה לאזור אישי</span>
                        <img src={profileIcon} alt="Profile icon" />
                    </button>
                    <div className="setting-buttons">
                        <button className="mode-btn setting-btn" aria-label="mode">
                            <img src={modeIcon} alt="mode" />
                        </button>
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="search-btn setting-btn"
                            aria-label="פתח חיפוש"
                        >
                            <SearchIcon color="#452A7A" alt="פתח חיפוש" />
                        </button>
                        <button
                            className="language-selector setting-btn"
                            aria-haspopup="listbox"
                            aria-label="שינוי שפה"
                        >
                            <span>English</span>
                            <img src={arrowIcon} alt="שינוי שפה" />
                        </button>
                    </div>
                </div>

                {/* Mobile/Tablet Hamburger Menu */}
                <div className="mobile-actions mobile-only">
                    <button
                        className="hamburger-btn"
                        onClick={toggleMobileMenu}
                        aria-label="תפריט"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <img src={humburgerIcon} alt="תפריט" />
                    </button>
                    {/* <div className="mobile-settings"> */}
                    <button className="mode-btn setting-btn" aria-label="mode">
                        <img src={modeIcon} alt="mode" />
                    </button>
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="search-btn setting-btn"
                        aria-label="פתח חיפוש"
                    >
                        <SearchIcon color="#452A7A" />
                    </button>
                </div>

                <div className="navbar-end">
                    <ul className="navbar-links desktop-only" role="menubar">
                        {navLinks.map((link, index) => (
                            <li key={index} role="none">
                                <a
                                    href={link.href}
                                    className="nav-link"
                                    role="menuitem"
                                    tabIndex={0}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <img
                        src={navbarLogo}
                        alt="navbar logo"
                        className="navbar-logo"
                    />
                </div>
                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu-overlay">
                        <div className="mobile-menu">
                            <div className="mobile-menu-header">
                                <button
                                    className="close-menu-btn"
                                    onClick={toggleMobileMenu}
                                    aria-label="סגור תפריט"
                                >
                                    <img src={closeIcon} alt="close" />
                                </button>
                            </div>
                            <div className="mobile-menu-content">
                                <button className="login-btn mobile-login-btn" aria-label="כניסה לאזור אישי">
                                    <span>כניסה לאזור אישי</span>
                                    <img src={profileIcon} alt="Profile icon" />
                                </button>
                                <ul className="mobile-nav-links">
                                    {navLinks.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                className="mobile-nav-link"
                                                onClick={toggleMobileMenu}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </> : <>
                <form
                    className="search-bar-container"
                    role="search"
                    aria-label="חיפוש באתר"
                    onSubmit={handleSearchSubmit}
                >
                    <button
                        onClick={() => setIsSearchOpen(false)}
                        className="close-btn"
                        aria-label="סגור חיפוש"
                        type="button"
                    >
                        <img src={closeIcon} alt="close" />
                    </button>
                    <div className="search-bar">
                        <input
                            id="site-search"
                            type="search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="מה ברצונכם לחפש?"
                            className="search-input"
                            autoFocus
                            aria-label="הקלד מונח לחיפוש"
                            dir="rtl"
                        />
                        <button
                            className="search-submit-btn"
                            type="submit"
                            aria-label="בצע חיפוש"
                        >
                            <SearchIcon color='#0AB285' width={"24px"} height={"24px"} />
                        </button>
                    </div>
                </form>
            </>}
        </nav>
    </>;
};

export default Navbar;