import React from "react";
import styles from "./Header.module.css";

const HeaderContainer = props => {
  // TODO: Remove iconClassName and styleClass
  const {
    headerStyle,
    headerTextStyle,
    headerIconStyle,
    onHeaderClick,
    styleClass,
    headerText,
    iconClassName,
    headerAltChildren
  } = props;

  const headerIconClassName = props.headerIconIsOpen
    ? `${styles["header-img-container"]} ${styles.open}`
    : `${styles["header-img-container"]}`;

  return (
    <header
      style={headerStyle}
      onClick={onHeaderClick}
      className={styles["collapse-header"]}
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
