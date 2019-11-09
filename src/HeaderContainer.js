import React from "react";
import styles from "./HeaderContainer.module.css";

const HeaderContainer = props => {
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
      <div style={headerIconStyle} className={iconClassName}></div>
    </header>
  );
};
export default HeaderContainer;
