import React from "react";
// import styles from "./Recoco.module.css";

// constant declarations
// const LARGE_HEIGHT = "58px";
// const LARGE_FONT = "20px";
// const SMALL_HEIGHT = "34px";
// const SMALL_FONT = "15px";

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
      className={styleClass.collapseHeader}
    >
      <div>
        <p style={headerTextStyle} className={styleClass.headerLabel}>
          {headerText}
        </p>
        {headerAltChildren || null}
      </div>
      <div style={headerIconStyle} className={iconClassName}></div>
    </header>
  );
};
export default HeaderContainer;
