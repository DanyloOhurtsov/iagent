import React, { useState } from "react";

export const SearchNews = ({
    value: { searchQuery, handleSearchInputChange, styles, dataNews },
}) => {
    const searchData = dataNews.text.search;
    const [activeFilter, setActiveFilter] = useState("");

    const toggleFilter = (event) => {
        setActiveFilter(event.target.name)
    };

    return (
        <div className={styles.searchNewsComp}>
            <div className={styles.inputSearchSection}>
                <button onClick={() => handleSearchInputChange(searchQuery)}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                    type="text"
                    placeholder={searchData.placeholder}
                    value={searchQuery}
                    onChange={(event) =>
                        handleSearchInputChange(event.target.value)
                    }
                />
            </div>
            <div className={styles.filtersButtonsSearch}>
                {searchData.filters.map((item) => (
                    <button
                        key={item.id}
                        className={styles.buttonFilterSearch}
                        name={item.text}
                        onClick={(event) => toggleFilter(event)}
                    >
                        {item.text === activeFilter ? (
                            <img src={item.iconActive} alt="" />
                        ) : (
                            <img src={item.iconDisable} alt="" />
                        )}
                        <p>{item.text}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};
