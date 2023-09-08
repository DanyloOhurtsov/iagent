import React from "react";
import { HomePage } from "./HomePage/HomePage";
import { NewsPage } from "./NewsPage/NewsPage";

export const AllPages = ({
    value: { dataText, currentPage, setCurrentPage },
}) => {
    return (
        <div className="allpagesComp">
            {currentPage === "Homepage" && <HomePage value={{ dataText }} />}
            {currentPage === "news" && <NewsPage value={{ dataText }} />}
        </div>
    );
};
