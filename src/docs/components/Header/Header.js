import React from "react";
import styles from "./Header.module.css";

// variables
const headerElem = [
  // { title: "EXAMPLES", url: "#examples" },
  { title: "INSTALLATION", url: "#about" },
  { title: "PROPS", url: "#props" },
  { title: "GITHUB", url: "https://www.github.com/FidelVe/recoco" }
];

const Header = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["elem-container"]}>
        <p className={styles["element"]}>RECOCO</p>
        <p className={styles["elem-description"]}>
          React Collapsible Container
        </p>
      </div>
      <div className={styles["sub-container"]}>
        {headerElem.map((elem, key) => {
          return (
            <div className={styles["elem-container"]} key={key}>
              <p className={styles["element"]}>
                <a href={elem.url}>{elem.title}</a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
