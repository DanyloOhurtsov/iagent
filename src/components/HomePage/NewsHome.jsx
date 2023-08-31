import React, { useState } from "react";
import { allStyles } from "../../styles/allStyles";
import { dataForTest } from "../../data/infoForTest";
import { Card } from "../Reuseable/Card";

export const NewsHome = () => {
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
    const dataForNews = dataForTest.newsData;
    const styles = allStyles.homePageStyles.newsHome;
    return (
        <div className={styles.newsComp}>
            <div className={styles.titleNewsHome}>
                <h2>News</h2>
            </div>
            <div className={styles.insideNews}>
                <div className={styles.cardNewsHome}>
                    {dataForNews.map((item) => (
                        <Card value={{ item }} key={item.id} />
                    ))}
                </div>
                <div className={styles.asideNewsHome}>
                    <div className={styles.inputsTopCard}>
                        <p className={styles.titleInputsCard}>
                            Subscribe to
                            <br />
                            the newsletter
                        </p>
                        <div className={styles.inputSection}>
                            <p className={styles.labelInput}>Email</p>
                            <input
                                type="email"
                                value={emailInputValue}
                                onChange={(event) =>
                                    setEmailInputValue(event.target.value)
                                }
                            />
                        </div>
                        <button
                            disabled={isEmailEmpty}
                            onClick={() => sendEmail()}
                        >
                            subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
