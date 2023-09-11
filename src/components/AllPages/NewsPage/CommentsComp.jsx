import React, { useEffect, useState } from "react";
import { allStyles } from "../../../styles/allStyles";
import { Card } from "../../Reuseable/Card";
import { Pagination } from "../../Reuseable/Pagination.jsx";

export const CommentsComp = ({ value: { dataText } }) => {
    const styles = allStyles.allPagesStyles.newsPageStyles.commentsCompStyles;
    const dataComments = dataText.dataText.newsPageData.commentsData;
    const optionsForCard = false;

    // PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const [totalPages, setTotalPages] = useState(
        Math.ceil(dataComments.content.length / itemsPerPage)
    );

    useEffect(() => {
        setTotalPages(Math.ceil(dataComments.content.length / itemsPerPage));
    }, [dataComments.content, itemsPerPage]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedContent = dataComments.content.slice(startIndex, endIndex);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.commentsComp}>
            <div className={styles.commentsHeader}>
                <h2 className={styles.commentsTitle}>
                    {dataComments.text.title}
                </h2>
            </div>
            <div className={styles.commentsList}>
                {paginatedContent.slice(0, 3).map((item) => (
                    <div className={styles.commentItem} key={item.id}>
                        <Card value={{ item, optionsForCard }} key={item.id} />
                        <div className={styles.commentDetails}>
                            {item.dataComments.slice(0, 2).map((com) => (
                                <div className={styles.comment} key={com.id}>
                                    <div className={styles.commentAuthor}>
                                        <div className={styles.authorPhoto}>
                                            <img src={com.personPhoto} alt="" />
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <p className={styles.authorName}>
                                                {com.personName}
                                            </p>
                                            <p className={styles.commentDate}>
                                                {com.date}
                                            </p>
                                        </div>
                                    </div>
                                    <p className={styles.commentText}>
                                        {com.text}
                                    </p>
                                    <div className={styles.commentOptions}>
                                        <div className={styles.buttonsSection}>
                                            <button>
                                                <i className="fa-solid fa-heart"></i>
                                                <p>{com.likes}</p>
                                            </button>
                                            <button>
                                                <i className="fa-solid fa-message"></i>
                                                <p>{com.comments}</p>
                                            </button>
                                            <button>
                                                <i className="fa-solid fa-share"></i>
                                                <p>Repost</p>
                                            </button>
                                        </div>
                                        <button className={styles.reportButton}>
                                            Report
                                        </button>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                    styles={styles}
                />
            </div>
        </div>
    );
};
