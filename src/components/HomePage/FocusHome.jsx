import React from "react";
import { allStyles } from "../../styles/allStyles";
import { dataForTest } from "../../data/infoForTest";
import { Card } from "../Reuseable/Card";
import { useState } from "react";

export const FocusHome = () => {
    const [emailInputValue, setEmailInputValue] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const dataForTestFocus = dataForTest.focusData;
    const styles = allStyles.homePageStyles.focusHome;

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
        <div className={styles.focusHomeComp}>
            <div className={styles.titleFocusHome}>
                <h2>Focus</h2>
            </div>
            <div className={styles.contentFocusHome}>
                <div className={styles.cardsFocusHome}>
                    {dataForTestFocus.map((item) => (
                        <Card value={{ item }} key={item.id} />
                    ))}
                </div>
                <div className={styles.inputsFocusHome}>
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
                    <div className={styles.inputsBottomCard}>
                        <p className={styles.titleInputsCard}>
                            Got ideas for our investigation?
                        </p>
                        <button>
                        Share it!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
