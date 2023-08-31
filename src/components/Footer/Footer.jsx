import React from "react";
import { allStyles } from "../../styles/allStyles";

export const Footer = ({ value }) => {
    const {
        language,
        setLanguage,
        isOpenChangeLangFooter,
        setIsOpenChangeLangFooter,
    } = value;
    const styles = allStyles.footerStyles;
    const footerData = [
        {
            id: 0,
            name: "IAGENT",
            buttons: [
                {
                    id: 0,
                    nameButtons: "О нас",
                },
                {
                    id: 1,
                    nameButtons: "Контакты",
                },
                {
                    id: 2,
                    nameButtons: "Раследование",
                },
                {
                    id: 3,
                    nameButtons: "Блог",
                },
                {
                    id: 4,
                    nameButtons: "Форум",
                },
            ],
        },
        {
            id: 1,
            name: "CATEGORIES",
            buttons: [
                {
                    id: 0,
                    nameButtons: "Collection",
                },
                {
                    id: 1,
                    nameButtons: "News",
                },
                {
                    id: 2,
                    nameButtons: "Club",
                },
                {
                    id: 3,
                    nameButtons: "Best iAgent",
                },
                {
                    id: 4,
                    nameButtons: "Design",
                },
                {
                    id: 5,
                    nameButtons: "Made in Spain",
                },
            ],
        },
        {
            id: 2,
            name: "FOR BUSINESS",
            buttons: [
                {
                    id: 0,
                    nameButtons: "Стать партнером",
                },
            ],
        },
    ];
    const toggleChangeSelector = () => {
        setIsOpenChangeLangFooter(!isOpenChangeLangFooter);
    };
    const changeLanguage = (event) => {
        setLanguage(event.target.value);
        toggleChangeSelector()
    };

    return (
        <div className={styles.footerComp}>
            <div className={styles.insideFooter}>
                <div className={styles.leftContentFooter}>
                    {footerData.map((item) => (
                        <div className={styles.itemFooter} key={item.id}>
                            <h4 className={styles.tiltleItemFooter}>
                                {item.name}
                            </h4>
                            <div className={styles.buttonsItem}>
                                {item.buttons.map((button) => (
                                    <button
                                        className={styles.button}
                                        key={button.id}
                                    >
                                        {button.nameButtons}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className={styles.itemFooter}>
                        <h4 className={styles.tiltleItemFooter}>Contacts</h4>
                        <div className={styles.buttonsItem}>
                            <a href="tel:+380985005252">098 500 52 52</a>
                            <a href="tel:+380985005252">098 500 52 52</a>
                            <address>adress 23 street 234</address>
                        </div>
                    </div>
                </div>
                <div className={styles.selectorLangFooter}>
                    <button
                        className={styles.topSelector}
                        onClick={toggleChangeSelector}
                    >
                        {language}
                        <span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </button>
                    {isOpenChangeLangFooter && (
                        <div className={styles.boxVariants}>
                            <div className={styles.left}>
                                <button
                                    className={styles.variant}
                                    value={"English"}
                                    onClick={(event) => changeLanguage(event)}
                                >
                                    Eng
                                </button>
                                <button
                                    className={styles.variant}
                                    value={"Spanish"}
                                    onClick={(event) => changeLanguage(event)}
                                >
                                    Spa
                                </button>
                                <button
                                    className={styles.variant}
                                    value={"Russian"}
                                    onClick={(event) => changeLanguage(event)}
                                >
                                    Rus
                                </button>
                            </div>
                            <button
                                className={styles.arrowButton}
                                onClick={toggleChangeSelector}
                            >
                                <i class="fa-solid fa-chevron-up"></i>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
