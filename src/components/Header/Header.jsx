import React from "react";
import { allStyles } from "../../styles/allStyles";
import { allImages } from "../../images/allImages";

export const Header = ({
    value: {
        dataText,
        language,
        setLanguage,
        isOpenChangeLangHeader,
        setIsOpenChangeLangHeader,
        currentPage,
        setCurrentPage,
    },
}) => {
    const logoHeader1 = allImages.logoHeader1;
    const styles = allStyles.headerStyles;
    const buttonsLang = dataText.headerData;

    const togglePage = (name) => {
        setCurrentPage(name);
    };

    const toggleChangeSelector = () => {
        setIsOpenChangeLangHeader(!isOpenChangeLangHeader);
    };
    const changeLanguage = (event) => {
        setLanguage(event.target.value);
        toggleChangeSelector();
    };
    return (
        <div className={styles.headerComp}>
            <div className={styles.insideHeader}>
                <button
                    className={styles.logoHeader}
                    name="Homepage"
                    onClick={() => togglePage("Homepage")}
                >
                    <img src={logoHeader1} alt="" />
                </button>
                <nav className={styles.navigationHeader}>
                    {buttonsLang.navigationTop.map((item) => (
                        <button
                            className={`${styles.buttonHeader}`}
                            key={item.id}
                            name={item.title}
                        >
                            {item.title}
                        </button>
                    ))}
                </nav>
                <div className={styles.optionsHeader}>
                    <div className={styles.selectorLangHeader}>
                        <button
                            className={styles.topSelector}
                            onClick={toggleChangeSelector}
                        >
                            {language}
                            <span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </button>
                        {isOpenChangeLangHeader && (
                            <div className={styles.boxVariants}>
                                <div className={styles.left}>
                                    <button
                                        className={styles.variant}
                                        value={"English"}
                                        onClick={(event) =>
                                            changeLanguage(event)
                                        }
                                    >
                                        Eng
                                    </button>
                                    <button
                                        className={styles.variant}
                                        value={"Spanish"}
                                        onClick={(event) =>
                                            changeLanguage(event)
                                        }
                                    >
                                        Spa
                                    </button>
                                    <button
                                        className={styles.variant}
                                        value={"Russian"}
                                        onClick={(event) =>
                                            changeLanguage(event)
                                        }
                                    >
                                        Rus
                                    </button>
                                </div>
                                <button
                                    className={styles.arrowButton}
                                    onClick={toggleChangeSelector}
                                >
                                    <i className="fa-solid fa-chevron-up"></i>
                                </button>
                            </div>
                        )}
                    </div>
                    <button className={styles.loginButtonHeader}>
                        <i className="fa-regular fa-user"></i>
                    </button>
                </div>
            </div>
            <hr />
            <div className={styles.bottomHeader}>
                {buttonsLang.navigationBottom.map((item) => (
                    <button
                        key={item.id}
                        className={`${styles.buttonBottomHeader} ${
                            currentPage === item.class ? styles[item.class] : ""
                        }`}
                        name={item.class}
                        onClick={(event) => togglePage(event.target.name)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    );
};
