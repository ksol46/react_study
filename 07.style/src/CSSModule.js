import React from "react";
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  return (
    <div>
      className={styles.wrapper}
      안녕하세요. 저는 <span className="something">css module</span>
    </div>
  );
};

export default CSSModule;
