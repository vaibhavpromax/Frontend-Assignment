import React, { useEffect, useState } from "react";
import styles from "./Switch.module.scss";
import { useFormValues } from "../../contexts/FormContext";
import AdvancedFieldSwitch from "../AdvancedFieldSwitch/AdvancedFieldSwitch";

const Switch = ({
  hasOptionalFields,
  label,
  description,
  validate,
  jsonKey,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(
    hasOptionalFields ? false : true
  );
  const { formValues, setFormValues, handleChange } = useFormValues();
  const { required, immutable, defaultValue } = validate;
  const currentFormValue = formValues[jsonKey] || defaultValue;
  useEffect(() => {
    handleChange(jsonKey, currentFormValue, "mount");
  }, []);

  const handleSwitchValueChange = (e) => {
    setFormValues({ ...formValues, [jsonKey]: e.target.checked });
  };
  return (
    <>
      {showAdvanced && (
        <div className={styles.switchWrapper}>
          <div className={styles.label}>{label}</div>
          <label className={styles.switchContainer}>
            <input
              type="checkbox"
              checked={formValues[jsonKey] || defaultValue}
              onChange={(e) => {
                handleSwitchValueChange(e);
              }}
            />
<div className={styles.checkmark}></div>
          </label>
        </div>
      )}
      <AdvancedFieldSwitch
        hasOptionalFields={hasOptionalFields}
        setShowAdvanced={setShowAdvanced}
        showAdvanced={showAdvanced}
      />
    </>
  );
};

export default Switch;
