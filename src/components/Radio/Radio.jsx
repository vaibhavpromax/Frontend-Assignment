import React, { useEffect, useState } from "react";
import { useFormValues } from "../../contexts/FormContext";
import styles from "./Radio.module.scss";
import AdvancedFieldSwitch from "../AdvancedFieldSwitch/AdvancedFieldSwitch";
import Tooltip from "../Tooltip/Tooltip";

const Radio = ({ description, validate, jsonKey, hasOptionalFields }) => {
  const [showAdvanced, setShowAdvanced] = useState(
    hasOptionalFields ? false : true
  );
  const { formValues, handleChange } = useFormValues();
  const { options, required, immutable, pattern, defaultValue } = validate;
  const currentFormValue = formValues[jsonKey] || defaultValue;
  useEffect(() => {
    handleChange(jsonKey, currentFormValue, "mount");
  }, []);

  return (
    <div>
      {showAdvanced && (
        <>
          {description.length === 0 ? null : (
            <Tooltip description={description} />
          )}
          <div className={styles.radioGroup}>
            {options.map(({ label, value } , index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleChange(jsonKey, value, "mount");
                  }}
                  className={`${
                    value === formValues[jsonKey] && styles.activeTab
                  } ${styles.tab}`}
                >
                  {label}
                </div>
              );
            })}
          </div>
        </>
      )}
      <AdvancedFieldSwitch
        hasOptionalFields={hasOptionalFields}
        showAdvanced={showAdvanced}
        setShowAdvanced={setShowAdvanced}
      />
    </div>
  );
};

export default Radio;
