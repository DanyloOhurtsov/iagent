import React from "react";
import { allStyles } from "../../styles/allStyles";
import { allImages } from "../../images/allImages";

export const Header = ({value}) => {
    const {language, setLanguage} = value
    const logoHeader1 = allImages.logoHeader1
    const styles = allStyles.headerStyles;
    const buttons = {
        topNavigation: [
            {
                id: 0,
                name: "About us",
                destination: "About us",
            },
            {
                id: 1,
                name: "Contacts",
                destination: "Contacts",
            },
            {
                id: 2,
                name: "Become a partner",
                destination: "Become a partner",
            },
            {
                id: 3,
                name: "Investigation",
                destination: "Investigation",
            },
        ],
        bottomNavigation: [
            {
                id: 0,
                name: "Collection",
            },
            {
                id: 1,
                name: "News",
            },
            {
                id: 2,
                name: "Club",
            },
            {
                id: 3,
                name: "Best iAgent",
            },
            {
                id: 4,
                name: "Design",
            },
            {
                id: 5,
                name: "Made in Spain",
            },
            {
                id: 6,
                name: "Forum",
            },
            {
                id: 7,
                name: "Blog",
            },
        ],
    };
    const changeLanguage = (event) =>{
        setLanguage(event.target.value)
    }
    return (
        <div className={styles.headerComp}>
            <div className={styles.insideHeader}>
                <a href="index.html" className={styles.logoHeader}>
                    <img src={logoHeader1} alt="" />
                </a>
                <nav className={styles.navigationHeader}>
                    {buttons.topNavigation.map((item) => (
                        <button className={styles.buttonHeader} key={item.id}>
                            {item.name}
                        </button>
                    ))}
                </nav>
                <div className={styles.optionsHeader}>
                    <select name="" id="" className={styles.langSelector} value={language} onChange={(event)=> changeLanguage(event)}>
                        <option value="English">Eng</option>
                        <option value="Spanish">Spa</option>
                        <option value="Russian">Rus</option>
                    </select>
                    <button className={styles.loginButtonHeader}>
                        <i className="fa-regular fa-user"></i>
                    </button>
                </div>
            </div>
            <hr />
            <div className={styles.bottomHeader}>
                    {buttons.bottomNavigation.map((item) => (
                        <button
                            key={item.id}
                            className={styles.buttonBottomHeader}
                        >
                            {item.name}
                        </button>
                    ))}
            </div>
        </div>
    );
};
