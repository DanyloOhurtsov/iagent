import React from "react";
import { allStyles } from "../../styles/allStyles";
import { allImages } from "../../images/allImages";

export const Header = ({ value }) => {
    const { language, setLanguage, dataText } = value;

    const logoHeader1 = allImages.logoHeader1;
    const styles = allStyles.headerStyles;
    const buttonsLang = dataText.headerData;
    
    const changeLanguage = (event) => {
        setLanguage(event.target.value);
    };
    return (
        <div className={styles.headerComp}>
            <div className={styles.insideHeader}>
                <a href="index.html" className={styles.logoHeader}>
                    <img src={logoHeader1} alt="" />
                </a>
                <nav className={styles.navigationHeader}>
                    {buttonsLang.navigationTop.map((item) => (
                        <button className={styles.buttonHeader} key={item.id}>
                            {item.title}
                        </button>
                    ))}
                </nav>
                <div className={styles.optionsHeader}>
                    <select
                        name=""
                        id=""
                        className={styles.langSelector}
                        value={language}
                        onChange={(event) => changeLanguage(event)}
                    >
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
                {buttonsLang.navigationBottom.map((item) => (
                    <button key={item.id} className={styles.buttonBottomHeader}>
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    );
};
