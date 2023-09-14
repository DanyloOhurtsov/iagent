import React from "react";
import { allStyles } from "../../styles/allStyles";

export const Card = ({
    value: { item, options, setCurrentItem, setCurrentPage },
}) => {
    const styles = allStyles.reuseableStyles.cardStyles;
    const numbers = options.numbers;
    const bottomButtons = options.bottomButtons;


    function togglePage () {
        setCurrentItem(item)
    }
    // console.log(setCurrentItem, setCurrentPage);

    return (
        <div className={styles.cardComp} onClick={()=>togglePage()}>
            <div className={styles.imageCard}>
                <img src={item.image} alt={item.name} />
                {numbers && (
                    <div className={styles.numberRate}>
                        <p>{item.rateNumber}</p>
                    </div>
                )}
            </div>
            <div className={styles.textCard}>
                <div className={styles.dateInfo}>
                    <p>{item.dateNumber}</p>
                    <p>
                        <i className="fa-regular fa-eye"></i>
                        <span>{item.viewed}</span>
                    </p>
                </div>
                <p className={styles.titleCard}>{item.title}</p>
                <p className={styles.descriptionCard}>{item.desc}</p>
                {bottomButtons && (
                    <div className={styles.linksCard}>
                        <button>
                            <i className="fa-solid fa-message"></i>
                        </button>
                        <button>
                            <i className="fa-solid fa-share"></i>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
