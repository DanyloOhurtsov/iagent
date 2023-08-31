import React, { useState } from "react";
import { allStyles } from "../styles/allStyles";
import { Header } from "./Header/Header";
import { HomePage } from "./HomePage/HomePage";
import { Footer } from "./Footer/Footer";

export const Main = () => {
    const styles = allStyles.mainPage;
    const [language, setLanguage] = useState("English");
    const [
        isOpenChangeLangFooter,
        setIsOpenChangeLangFooter,
    ] = useState(false);
    const [
        isOpenChangeLangHeader,
        setIsOpenChangeLangHeader,
    ] = useState(false);


    return (
        <div className={styles.mainComp}>
            <Header
                value={{
                    language,
                    setLanguage,
                    isOpenChangeLangHeader,
                    setIsOpenChangeLangHeader,
                }}
            />
            <HomePage />
            <Footer
                value={{
                    language,
                    setLanguage,
                    isOpenChangeLangFooter,
                    setIsOpenChangeLangFooter,
                }}
            />
        </div>
    );
};
