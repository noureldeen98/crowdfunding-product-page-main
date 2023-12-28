import React from "react";
import styles from "./masterCraft.module.css";
import { AboutUs } from "../aboutUS/AboutUs";
export const MasterCraft = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        {/* MasterCraft div */}
        <div className={styles.mainDiv} style={{ backgroundColor: "red" }}>
          <div className={styles.logo}></div>
          <header className={styles.header}>
            <h2>MasterCraft Bamboo Monitor Riser</h2>
            <p>
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
          </header>
          <div className={styles.actionsDiv}>
            <div>
              <button className="btn btn-primary">Back this project</button>
            </div>
            <div>
              <button className={styles.bookmarkedButton}>
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                    <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                  </g>
                </svg>
                Bookmarked
              </button>
            </div>
          </div>
        </div>
        <div
          className={styles.secondMainDiv}
          style={{ backgroundColor: "purple" }}
        >
          <div className={styles.firstDiv}>
            <h2>$89,914</h2>
            <p>Of 100,000 backed</p>
          </div>
          <div className={styles.secondDiv}>
            {" "}
            <h2>$89,914</h2>
            <p>Of 100,000 backed</p>
          </div>
          <div className={styles.thirdDiv}>
            {" "}
            <h2>$89,914</h2>
            <p>Of 100,000 backed</p>
          </div>
        </div>

        <AboutUs />
      </div>
    </React.Fragment>
  );
};
