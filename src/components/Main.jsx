import React, { useState } from "react";
import { allStyles } from "../styles/allStyles";
import { Header } from "./Header/Header";
// import { HomePage } from "./HomePage/HomePage";
import { Footer } from "./Footer/Footer";
import { allData } from "../data/languagesData";
import { AllPages } from "./AllPages/AllPages";

export const Main = () => {
    const [currentPage, setCurrentPage] = useState("Homepage");

    const styles = allStyles.mainPage;
    const { Eng, Spa, Rus } = allData;
    const [language, setLanguage] = useState("English");
    let dataText;
    if (language === "English") {
        dataText = Eng;
    }
    if (language === "Spanish") {
        dataText = Spa;
    }
    if (language === "Russian") {
        dataText = Rus;
    }

    const [isOpenChangeLangFooter, setIsOpenChangeLangFooter] = useState(false);
    const [isOpenChangeLangHeader, setIsOpenChangeLangHeader] = useState(false);

    return (
        <div className={styles.mainComp}>
            <Header
                value={{
                    dataText,
                    language,
                    setLanguage,
                    isOpenChangeLangHeader,
                    setIsOpenChangeLangHeader,
                    currentPage,
                    setCurrentPage
                }}
            />
            <AllPages value={{ dataText, currentPage, setCurrentPage }} />
            <Footer
                value={{
                    dataText,
                    language,
                    setLanguage,
                    isOpenChangeLangFooter,
                    setIsOpenChangeLangFooter,
                }}
            />
        </div>
    );
};
