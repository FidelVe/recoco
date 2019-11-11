import React, { useEffect } from "react";
import Prism from "prismjs";

// Import CSS module
import styles from "./PrismWrapper.module.css";

const PrismWrapper = ({ children, lang = "jsx" }) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  });
  return (
    <div className={styles["prism-container"]}>
      <pre>
        <code className={`language-${lang}`}>{children}</code>
      </pre>
    </div>
  );
};

export default PrismWrapper;
