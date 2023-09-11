import React, { useState } from "react";
import { allStyles } from "../../../styles/allStyles";
import { Card } from "../../Reuseable/Card";

export const NewsHome = ({ value: { dataText } }) => {
    // STYLES
    const styles = allStyles.allPagesStyles.homePageStyles.newsHome;

    // LANG DATA
    // const dataText = value;
    const { news, blog, text } = dataText.homePageData.newsData;

    // EMAIL
    const [emailInputValue, setEmailInputValue] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);

    const sendEmail = () => {
        if (validateEmail(emailInputValue)) {
            console.log(emailInputValue);
            setIsEmailValid(true);
        } else {
            console.log("Not validate Email");
            setIsEmailValid(false);
        }
    };
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const isEmailEmpty = emailInputValue === "";

    return (
        <div className={styles.newsComp}>
            <div className={styles.titleNewsHome}>
                <h2>{text.title}</h2>
            </div>
            <div className={styles.insideNews}>
                <div className={styles.cardNewsHome}>
                    {news.slice(0, 6).map((item) => (
                        <Card value={{ item }} key={item.id} />
                    ))}
                </div>
                <div className={styles.asideNewsHome}>
                    <div className={styles.blogAsideNewsHome}>
                        <h3 className={styles.blogTitleAside}>{blog.title}</h3>
                        <div className={styles.blogContentAside}>
                            {blog.content.slice(0, 6).map((item) => (
                                <div className={styles.blogItem} key={item.id}>
                                    <div className={styles.textContentBlogItem}>
                                        <p className={styles.titleBlogItem}>
                                            {item.title}
                                        </p>
                                        <p className={styles.descBlogItem}>
                                            {item.text} <br /> {item.date}
                                        </p>
                                    </div>
                                    <div
                                        className={styles.imageContentBlogItem}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.subsribeAsideNewsHome}>
                        <p className={styles.titleInputsCard}>
                            {text.subscribe.title}
                        </p>
                        <div className={styles.inputSection}>
                            <p
                                className={`${styles.labelInput} ${
                                    !isEmailValid ? styles.wrongEmailLabel : ""
                                }`}
                            >
                                Email
                            </p>
                            <input
                                type="email"
                                value={emailInputValue}
                                className={
                                    !isEmailValid ? styles.wrongEmail : ""
                                }
                                onChange={(event) =>
                                    setEmailInputValue(event.target.value)
                                }
                            />
                        </div>
                        <button
                            disabled={isEmailEmpty}
                            onClick={() => sendEmail()}
                        >
                            {text.subscribe.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
