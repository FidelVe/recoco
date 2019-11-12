import React from "react";
import styles from "./Header.module.css";

const HeaderContainer = props => {
  const {
    headerStyle,
    headerTextStyle,
    headerIconStyle,
    onHeaderClick,
    headerText,
    headerAltChildren,
    id
  } = props;

  const headerIconClassName = props.headerIconIsOpen
    ? `${styles["header-img-container"]} ${styles.open}`
    : `${styles["header-img-container"]}`;

  return (
    <header
      style={headerStyle}
      onClick={onHeaderClick}
      className={styles["collapse-header"]}
      id={id}
    >
      <div>
        <p style={headerTextStyle} className={styles["header-label"]}>
          {headerText}
        </p>
        {headerAltChildren || null}
      </div>
      <div style={headerIconStyle} className={headerIconClassName}></div>
    </header>
  );
};
export default HeaderContainer;
