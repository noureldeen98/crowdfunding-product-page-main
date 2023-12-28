import React from "react";
import styles from "./card.module.css";

export const CardInLandingPage = (props) => {
  return (
    <React.Fragment>
      <div className={styles.mainDiv}>
        <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>
            <h2>HI</h2>
            <p>No</p>
          </div>
          <div className={styles.cardDesc}>{props.cardDesc}</div>
          <div className={styles.cardActionButtons}>
            <h2>HI</h2>
            <p>No</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
