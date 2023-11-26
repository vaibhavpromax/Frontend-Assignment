import React from "react";
import styles from "./Tooltip.module.scss";

const Tooltip = ({ description }) => {
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipIcon}>◎</span>
      <span className={styles.tooltipText}>{description}</span>
    </div>
  );
};

export default Tooltip;
