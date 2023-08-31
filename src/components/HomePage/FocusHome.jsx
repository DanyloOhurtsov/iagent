import React from "react";
import { allStyles } from "../../styles/allStyles";
import { dataForTest } from "../../data/infoForTest";
import { Card } from "../Reuseable/Card";
import { useState } from "react";

export const FocusHome = () => {
    const dataForTestFocus = dataForTest.focusData.slice(0, 5); // Вибираємо перші 5 елементів
    const styles = allStyles.homePageStyles.focusHome;

    const firstRow = dataForTestFocus.slice(0, 2);
    const secondRow = dataForTestFocus.slice(2, 5);

    return (
        <div className={styles.focusHomeComp}>
            <div className={styles.titleFocusHome}>
                <h2>Focus</h2>
            </div>
            <div className={styles.contentFocusHome}>
                {firstRow.map((item) => (
                    <Card value={{ item }} key={item.id} />
                ))}
                <div className={styles.shareCardFocus}>
                    <p className={styles.titleInputsCard}>
                        Got ideas for our investigation?
                    </p>
                    <button>Share it!</button>
                </div>
                {secondRow.map((item) => (
                    <Card value={{ item }} key={item.id} />
                ))}
            </div>
        </div>
    );
};
