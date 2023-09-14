import React, { useState } from "react";
import { allStyles } from "../styles/allStyles";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { AllPages } from "./AllPages/AllPages";
import { newDataBase } from "../data/newDataBase";

export const Main = () => {
    const styles = allStyles.mainPage;

    const { eng, spa, rus } = newDataBase;

    const [currentPage, setCurrentPage] = useState("home");
    const [currentItem, setCurrentItem] = useState({});
    const [language, setLanguage] = useState("English");
    const [isOpenChangeLangFooter, setIsOpenChangeLangFooter] = useState(false);
    const [isOpenChangeLangHeader, setIsOpenChangeLangHeader] = useState(false);

    
    const dataNew = {
        English: eng,
        Spanish: spa,
        Russian: rus,
    }[language];

    return (
        <div className={styles.mainComp}>
            <Header
                value={{
                    dataNew,
                    language,
                    setLanguage,
                    isOpenChangeLangHeader,
                    setIsOpenChangeLangHeader,
                    currentPage,
                    setCurrentPage,
                }}
            />
            <AllPages
                value={{
                    dataNew,
                    currentPage,
                    setCurrentPage,
                    setCurrentItem,
                    currentItem,
                }}
            />
            <Footer
                value={{
                    dataNew,
                    language,
                    setLanguage,
                    isOpenChangeLangFooter,
                    setIsOpenChangeLangFooter,
                }}
            />
        </div>
    );
};
