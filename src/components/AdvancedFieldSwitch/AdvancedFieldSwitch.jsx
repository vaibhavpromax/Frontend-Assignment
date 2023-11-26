import React from "react";
import styles from "./AdvancedFieldSwitch.module.scss";
const AdvancedFieldSwitch = ({
  hasOptionalFields,
  showAdvanced,
  setShowAdvanced,
}) => {
  return (
    <div className={styles.advSwitch}>
      {hasOptionalFields && (
        <>
          <label>Show Advanced Fields</label>
          <label className={styles.switchContainer}>
            <input
              type="checkbox"
              checked={showAdvanced}
              onChange={() => setShowAdvanced(!showAdvanced)}
            />
            <div className={styles.checkmark}></div>
          </label>
        </>
      )}
    </div>
  );
};

export default AdvancedFieldSwitch;
