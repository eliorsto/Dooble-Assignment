import footerLogo from '../../assets/images/footer_logo.png';
import facebookIcon from '../../assets/svgs/facebook.svg';
import instagramIcon from '../../assets/svgs/instagram.svg';
import linkedinIcon from '../../assets/svgs/linkedin.svg';
import telegramIcon from '../../assets/svgs/telegram.svg';
import twitterIcon from '../../assets/svgs/twitter.svg';
import youtubeIcon from '../../assets/svgs/youtube.svg';
import { ArrowIcon } from '../../components/Arrow/Arrow';
import { useIsTablet } from '../../hooks/useIsTablet';
import "./Footer.css";

const socialLinks = [
    { href: "#", src: facebookIcon, alt: "facebook icon" },
    { href: "#", src: twitterIcon, alt: "twitter icon" },
    { href: "#", src: instagramIcon, alt: "instagram icon" },
    { href: "#", src: youtubeIcon, alt: "youtube icon" },
    { href: "#", src: linkedinIcon, alt: "linkedin icon" },
    { href: "#", src: telegramIcon, alt: "telegram icon" },
];

const Footer = () => {
    const isTablet = useIsTablet();

    return (
        <footer className="footer">
            <div className="footer-grid" style={{
                gridTemplateColumns: isTablet ? "1fr" : "repeat(4, 1fr)",
            }}>
                <div className="footer-section">
                    {isTablet &&
                        <img
                            src={footerLogo}
                            alt="קנט לוגו"
                            loading="lazy"
                            width="150"
                            height="115"
                        />
                    }
                    <h3 className="footer-title">אנחנו פה בשבילך ונשמח לעזור!</h3>
                    <button className="contact-btn">
                        <span>
                            צרו איתנו קשר
                        </span>
                        <div className='contact-us-arrow'>
                            <ArrowIcon color='white' />
                        </div>
                    </button>
                    <div className="contact-info">
                        <p style={{
                            lineHeight: "0"
                        }}>כתובת: דרך מנחם בגין 74,ת.ד 51232</p>
                        <p>תל-אביב 6721516</p>
                        <p>טלפון: 03-6270200</p>
                        <p>פקס: 03-6270206</p>
                        <p className="email-link">דוא"ל: kanat@kanat.co.il</p>
                    </div>
                </div>

                {!isTablet ? <>
                    <div className="footer-section footer-center">
                        <div className='section'>
                            <h3 className="footer-title">מידע כללי</h3>
                            <ul className="footer-links">
                                <li><a href="#">ארכיון חוזי ביטוח</a></li>
                                <li><a href="#">פניות המידע</a></li>
                                <li><a href="#">הצהרת חופש החזרתי</a></li>
                                <li><a href="#">אמנת שירות</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-section">
                        <div className='last-section'>
                            <h3 className="footer-title invisible-title">a</h3>
                            <ul className="footer-links">
                                <li><a href="#">מאגר ספקים</a></li>
                                <li><a href="#">שירות לקוחות</a></li>
                                <li><a href="#">מדריך שאלות ותשובות</a></li>
                                <li><a href="#">פרסום הסדרי נגישות</a></li>
                                <li><a href="#">מכרזים</a></li>
                                <li><a href="#">דרושים</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-left">
                        <div>
                            <img
                                src={footerLogo}
                                alt="קנט לוגו"
                                loading="lazy"
                                width="150"
                                height="115"
                            />
                        </div>
                        <div className="social-links">
                            {socialLinks.map((link, i) => (
                                <a key={i} href={link.href}>
                                    <img src={link.src} alt={link.alt} loading="lazy" />
                                </a>
                            ))}
                        </div>
                    </div>
                </> : <>
                    <button className='more-info-btn'>
                        <span>מידע כללי</span>
                        <div className='more-info-arrow'>
                            <ArrowIcon color='white' />
                        </div>
                    </button>
                    <div className="social-links">
                        {socialLinks.map((link, i) => (
                            <a key={i} href={link.href}>
                                <img src={link.src} alt={link.alt} loading="lazy" />
                            </a>
                        ))}
                    </div>

                </>}
            </div>
            <div className="footer-credit">
                <div className='footer-text' style={{
                    flexDirection: isTablet ? "column" : "row-reverse",
                    gap: isTablet ? "1rem" : "0"
                }}>
                    <div className="footer-legal">
                        <span>כל הזכויות שמורות לקנט ©2021</span>
                        <a href="#">מפת אתר</a>
                        <a href="#">תנאי שימוש ופרטיות</a>
                        <a href="#">הצהרת נגישות</a>
                    </div>
                    <a href="#" className='credit-company'>dooble</a>
                </div>
            </div>
        </footer >
    );
};
export default Footer;
