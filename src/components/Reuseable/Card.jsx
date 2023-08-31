import React from "react";
import { allStyles } from "../../styles/allStyles";

export const Card = ({ value }) => {
    const styles = allStyles.reuseableStyles.cardStyles;
    const data = value.item;
    return (
        <div className={styles.cardComp} key={data.id}>
            <div className={styles.imageCard}>
                <img src={data.image} alt={data.name} />
            </div>
            <div className={styles.textCard}>
                <div className={styles.dateInfo}>
                    <p>{data.dateNumber}</p>
                    <p>
                        <i className="fa-regular fa-eye"></i>
                        <span>{data.viewed}</span>
                    </p>
                </div>
                <p className={styles.titleCard}>{data.title}</p>
                <p className={styles.descriptionCard}>{data.desc}</p>
                <div className={styles.linksCard}>
                    <button>
                        <i className="fa-solid fa-message"></i>
                    </button>
                    <button>
                        <i className="fa-solid fa-share"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
