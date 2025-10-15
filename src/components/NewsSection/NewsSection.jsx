import { useEffect, useState } from 'react';
import mainArticle from '../../assets/images/main_article.png';
import sideArticle1 from '../../assets/images/side_article1.png';
import sideArticle2 from '../../assets/images/side_article2.png';
import sideArticle3 from '../../assets/images/side_article3.png';
import { ArrowIcon } from '../../components/Arrow/Arrow';
import "./NewsSection.css";

const NewsSection = () => {
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth <= 1024); // נגדיר טווח טאבלט
        };

        handleResize(); // בדיקה ראשונית
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const featuredNews = {
        src: mainArticle,
        alt: "Main article",
        date: "22.08.20",
        title: "לורם איפסום דולור סיט אמט קונסקטרור",
        text: "לורם איפוסום דולור סיט אמט קונסקטורר אדיפיסינג אלית מיחוצים קלאצי",
    };

    const newsList = [
        {
            src: sideArticle1,
            alt: "News 1",
            date: "22.08.20",
            title: "נוסטי קלובר בריקנה סוטום לפריק",
            text: "לורם איפסום דולור סיט אמט קונקטור אדיפיסינג מיחוצים קלאצי סחטיר בלובק תצטנפל בלינדו",
        },
        {
            src: sideArticle2,
            alt: "News 2",
            date: "22.08.20",
            title: "גולר מונפר סוברט לורם שבק יהול",
            text: "לורם איפסום דולור סיט אמט קונקטור אדיפיסינג מיחוצים קלאצי סחטיר בלובק תצטנפל בלינדו",
        },
        {
            src: sideArticle3,
            alt: "News 3",
            date: "22.08.20",
            title: "קונדימנטום קורוס בלקירה נונטסי",
            text: "לורם איפסום דולור סיט אמט קונקטור אדיפיסינג מיחוצים קלאצי סחטיר בלובק תצטנפל בלינדו",
        },
    ];


    return (
        <section className="news-container">
            {!isTablet && (
                <div className="news-header">
                    <button className="all-news-btn" aria-label="לכל החדשות">
                        <span>לכל החדשות</span>
                        <div className="view-more-arrow">
                            <ArrowIcon color="white" />
                        </div>
                    </button>
                </div>
            )}
            <h2 id="news-title" className="news-title" dir='rtl'>
                מה חדש בקנט?
            </h2>
            <div className="news-grid">
                <article className="news-featured">
                    <div style={{
                        overflow: 'hidden',
                        position: "relative",
                        borderRadius: "6px", width: "334px",
                        height: "221px"
                    }}>
                        <img
                            src={featuredNews.src}
                            alt={featuredNews.alt}
                            loading="lazy"
                        />
                        <div className='img-overlay'></div>
                    </div>
                    <div className="news-featured-content">
                        <span className="news-date-main">{featuredNews.date}</span>
                        <h3 className="news-featured-title">{featuredNews.title}</h3>
                        <p className="news-featured-text">{featuredNews.text}</p>
                        <a
                            href="#"
                            className="news-link"
                            aria-label="קרא עוד על הידיעה המובילה"
                        >
                            קרא עוד
                        </a>
                    </div>
                </article>
                <div className="news-list">
                    {newsList.map((news, i) => (
                        <article key={i} className="news-item">
                            <div>
                                <img
                                    src={news.src}
                                    alt={news.alt}
                                    loading="lazy"
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center",
                                    }}
                                />
                            </div>
                            <div className='list-content'>
                                <span className="news-date">{news.date}</span>
                                <h4 className="news-item-title">{news.title}</h4>
                                <p className="news-item-text">{news.text}</p>
                                <a
                                    href="#"
                                    className="news-item-link"
                                    aria-label={`קרא עוד על ${news.title}`}
                                >
                                    קרא עוד
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            {isTablet && (
                <button className="all-news-btn" aria-label="לכל החדשות">
                    <span>לכל החדשות</span>
                    <div className="view-more-arrow">
                        <ArrowIcon color="white" />
                    </div>
                </button>
            )}
        </section>
    );
};

export default NewsSection;
