import { useState, useEffect, useCallback } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import heroImage from '../../assets/images/hero_image.png';
import heroLogo from '../../assets/images/hero_logo.png';
import card1 from '../../assets/images/section2_card1.png';
import card2 from '../../assets/images/section2_card2.png';
import card3 from '../../assets/images/section2_card3.png';
import bgSection3Left from '../../assets/images/section3_bg1.png';
import bgSection3Right from '../../assets/images/section3_bg2.png';
import galleryimg1 from '../../assets/images/section3_card1.png';
import galleryimg2 from '../../assets/images/section3_card2.png';
import policyIcon from '../../assets/svgs/policy_icon.svg';
import requestIcon from '../../assets/svgs/request_icon.svg';
import coverageIcon from '../../assets/svgs/coverage_icon.svg';
import updateIcon from '../../assets/svgs/update_icon.svg';
import { ArrowIcon } from '../../components/Arrow/Arrow';
import { PauseIcon } from '../../components/Pause/Pause';
import NewsSection from "../../components/NewsSection/NewsSection"
import FloatingActionButton from "../../components/FloatingActionButton/FloatingActionButton"
import "./Home.css";
import FloatingActionButtons from '../../components/FloatingActionButton/FloatingActionButton';

export const sidebarItems = [
    { text: 'הפוליסות שלי', icon: policyIcon },
    { text: 'הגשת בקשה להודעת נזק', icon: requestIcon },
    { text: 'בירור סטטוס תביעה', icon: coverageIcon },
    { text: 'עדכון פרטים אישיים', icon: updateIcon },
];

const branches = [
    {
        src: card3,
        alt: 'ענפי הצומח',
        num: '01',
        name: 'ענפי הצומח',
    },
    {
        src: card2,
        alt: 'ענפי החי',
        num: '02',
        name: 'ענפי החי',
    },
    {
        src: card1,
        alt: 'ענפים כלליים',
        num: '03',
        name: 'ענפים כלליים',
    },
];

const galleryImages = [
    {
        src: galleryimg1,
        alt: 'תמונת גלריה 1',
        credit: 'צילום: אשר גולן',
    },
    {
        src: galleryimg2,
        alt: 'תמונת גלריה 2',
        credit: 'צילום: בינה כהן',
    },
];

const Home = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 4);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const handleKeyPress = useCallback((e, index) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setCurrentSlide(index);
        }
    }, []);

    return <>
        <Navbar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
        <FloatingActionButton />
        <section className="hero" aria-labelledby="hero-title">
            <img
                src={heroImage}
                alt="תמונת רקע של שדות חקלאיים"
                className="hero-image"
            />
            <div className="alert-banner" role="alert">
                <div alt="pause" className="pause">
                    <PauseIcon />
                </div>
                <span href="#" className="alert-text bold" aria-label="חדשות ועדכונים">
                    חדשות ועדכונים
                </span>
                <span className='alert-text '>
                    כדי להמנע מהמתנה ממושכת במענה הטלפוני שלנו, אנחנו מזמינים אתכם לפנות אלינו בדיגיטל
                </span>
            </div>
            <div className="hero-overlay" aria-hidden="true"></div>
            <div className="hero-content">
                <img
                    src={heroLogo}
                    alt="hero-logo"
                    className="hero-logo"
                />
                <h1 id="hero-title" className="hero-title">
                    קנט - קרן לביטוח נזקי טבע בחקלאות בע"מ
                </h1>
                <h2 className="hero-subtitle">כי לטבע חוקים משלו</h2>
                <p className="hero-text">הגן על העסק שלך עם ביטוח של קנט</p>
                <button
                    className="hero-btn"
                    aria-label="למעבר למידע נוסף"
                    onClick={() => document.querySelector('.branches-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    לפרטים נוספים
                    <span className="arrow-more-info" alt="חץ" >
                        <ArrowIcon color="white" />
                    </span>
                </button>
            </div>
            <div className="slide-indicators" role="tablist" aria-label="Slide indicators">
                {[0, 1, 2].map((i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        onKeyDown={(e) => handleKeyPress(e, i)}
                        className={`slide-dot ${currentSlide === i ? 'active' : ''}`}
                        role="tab"
                        aria-selected={currentSlide === i}
                        aria-label={`מעבר לשקופית ${i + 1}`}
                        tabIndex={0}
                    />
                ))}
                <div className="pause-slide">
                    <PauseIcon strokeWidth='1' />
                </div>
            </div>
            <div className="hero-fab-wrapper">
                <FloatingActionButtons />
            </div>
        </section>
        <aside className="sidebar" aria-label="תפריט צדדי">
            <div className='sidebar-title'>
                <span>שירותים מהירים</span >
                <div className='arrow-more-servies'>
                    <ArrowIcon />
                </div>
            </div>
            <ul className="sidebar-list">
                {sidebarItems.map((item, idx) => (
                    <li key={idx} className="sidebar-item">
                        <button className="sidebar-button" tabIndex={0} aria-label={item.text}>
                            <img src={item.icon} alt={item.text + "photo"} className="sidebar-icon" />
                            <span className="sidebar-text">{item.text}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </aside >
        < section className="branches-section" aria-label="branches-title" >
            <h2 id="branches-title" className="section-title">
                ענפים מבוטחים
            </h2>
            <div className="branches-grid">
                {branches.map((branch, i) => (
                    <div key={i} className="branch-card" role="article">
                        <div className="branch-info">
                            <h3 className="branch-number">{branch.num}</h3>
                            <h4 className="branch-name">{branch.name}</h4>
                        </div>
                        <div className="branch-image">
                            <img src={branch.src} alt={branch.alt} className={`img-${i}`} loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <section className="gallery-section" aria-label="gallery-title" >
            <div className="gallery-container">
                <div className="gallery-images">
                    {galleryImages.map((img, i) => (
                        <figure key={i} className={`gallery-item item-${i}`}>
                            <div className='img-group'>
                                <div className={`img-gallery-${i}`}>
                                    <img src={img.src} alt={img.alt} className={`img-gallery-${i}`} loading="lazy" width="277px" height="282px" />
                                </div>
                                <figcaption className="image-credit">{img.credit}</figcaption>
                            </div>
                        </figure>
                    ))}
                </div>
                <div className="gallery-content">
                    <h2 id="gallery-title" className="gallery-title">
                        הגלרייה החקלאית
                    </h2>
                    <p className="gallery-text">
                        תחרות "הגלריה החקלאית" של קנט חושפת לציבור הרחב את תרומתה הגדולה של החקלאות לפיתוחה של המדינה ואת יופיים המרהיב של החקלאות, הטבע והנוף בישראל.
                    </p>
                    <button className="gallery-btn" aria-label="לצפייה בגלריה">
                        <span>לצפייה בגלריה</span>
                        <div className='view-gallery-arrow'>
                            <ArrowIcon color='white' />
                        </div>
                    </button>
                </div>
            </div>
            <img
                src={bgSection3Right}
                alt="תמונת רקע של עלה"
                className="bg-section3-right"
            />
            <img
                src={bgSection3Left}
                alt="תמונת רקע של מצלמה"
                className="bg-section3-left"
            />
        </section >
        <NewsSection />
        <Footer />
    </>;
};

export default Home;
