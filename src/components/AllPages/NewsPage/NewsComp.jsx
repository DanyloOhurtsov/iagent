import React, { useEffect, useState } from "react";
import { allStyles } from "../../../styles/allStyles";
import { PaginationNews } from "./PaginationNews";
import { Card } from "../../Reuseable/Card";
import { SearchNews } from "./SearchNews";

export const NewsComp = ({ value: { images, dataText } }) => {
    const styles = allStyles.allPagesStyles.newsPageStyles.newsCompStyles;
    const dataNews = dataText.dataText.newsPageData.newsData;

    // SEARCH
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchInputChange = (searchValue) => {
        setSearchQuery(searchValue);
        setCurrentPage(1);
    };
    const filteredContent = searchQuery
        ? dataNews.content.filter((item) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : dataNews.content;

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

    // PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const [totalPages, setTotalPages] = useState(
        Math.ceil(dataNews.content.length / itemsPerPage)
    );

    useEffect(() => {
        setTotalPages(Math.ceil(filteredContent.length / itemsPerPage));
    }, [filteredContent, itemsPerPage]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedContent = filteredContent.slice(startIndex, endIndex);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.newsComp}>
            <div className={styles.titleNews}>
                <h2 className={styles.title2}>{dataNews.text.title}</h2>
            </div>
            <div className={styles.contentNews}>
                <SearchNews
                    value={{ searchQuery, handleSearchInputChange, styles, dataNews }}
                />
                <div className={styles.articlesContentNews}>
                    <div className={styles.firstRowArticles}>
                        {paginatedContent.length > 0 ? (
                            paginatedContent
                                .slice(0, 2)
                                .map((item) => (
                                    <Card value={{ item }} key={item.id} />
                                ))
                        ) : (
                            <div className={styles.noResultsFound}>
                                <p>Oops, nothing found</p>
                                <button onClick={() => setSearchQuery("")}>
                                    Ok, reset search
                                </button>
                            </div>
                        )}
                        <div className={styles.subsribeBlockNews}>
                            <p className={styles.titleInputsCardNews}>
                                {dataNews.text.subscribe.title}
                            </p>
                            <div className={styles.inputSectionNews}>
                                <p
                                    className={`${styles.labelInputNews} ${
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
                                {dataNews.text.subscribe.buttonText}
                            </button>
                        </div>
                    </div>
                    <div className={styles.secondRowArticles}>
                        {paginatedContent.slice(2, 8).map((item) => (
                            <Card value={{ item }} key={item.id} />
                        ))}
                    </div>
                </div>
                <PaginationNews
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                    styles={styles}
                />
            </div>
        </div>
    );
};
