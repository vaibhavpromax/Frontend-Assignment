import React, { useEffect, useState } from "react";
import styles from "./Select.module.scss";
import { useFormValues } from "../../contexts/FormContext";
import AdvancedFieldSwitch from "../AdvancedFieldSwitch/AdvancedFieldSwitch";
import Tooltip from "../Tooltip/Tooltip";

const Select = ({
  hasOptionalFields,
  jsonKey,
  label,
  validate,
  description,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(
    hasOptionalFields ? false : true
  );
  const { formValues, handleChange } = useFormValues();
  const { options, defaultValue } = validate;
  const currentFormValue = formValues[jsonKey] || defaultValue;
  useEffect(() => {
    handleChange(jsonKey, currentFormValue, "mount");
  }, []);
  return (
    <>
      {showAdvanced && (
        <div className={styles.selectContainer}>
          <div className={styles.label}>{label}</div>
          {description.length === 0 ? null : (
            <Tooltip description={description} />
          )}
          <select
            className={styles.select}
            value={currentFormValue}
            onChange={(e) => {
              handleChange(jsonKey, e.target.value, "mount");
            }}
          >
            {options.map(({ label, value }, key) => {
              return (
                <option key={key} value={value}>
                  {label}
                </option>
              );
            })}
          </select>
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

export default Select;
