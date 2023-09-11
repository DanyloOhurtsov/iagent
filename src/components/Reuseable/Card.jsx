import React from "react";
import { allStyles } from "../../styles/allStyles";

export const Card = ({ value: { item, optionsForCard } }) => {
    const styles = allStyles.reuseableStyles.cardStyles;

    return (
        <div className={styles.cardComp}>
            <div className={styles.imageCard}>
                <img src={item.image} alt={item.name} />
                {item.rateNumber && (
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
                {optionsForCard && (
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
