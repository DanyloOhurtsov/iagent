import React, { useState } from "react";
import { allStyles } from "../styles/allStyles";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { allData } from "../data/languagesData";
import { AllPages } from "./AllPages/AllPages";

export const Main = () => {
  const styles = allStyles.mainPage;
  const { Eng, Spa, Rus } = allData;
  

  const [currentPage, setCurrentPage] = useState("Homepage");
  const [language, setLanguage] = useState("English");
  const [isOpenChangeLangFooter, setIsOpenChangeLangFooter] = useState(false);
  const [isOpenChangeLangHeader, setIsOpenChangeLangHeader] = useState(false);

  const dataText = {
    English: Eng,
    Spanish: Spa,
    Russian: Rus,
  }[language];

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
          setCurrentPage,
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
