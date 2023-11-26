import React, { useState } from "react";
import styles from "./Group.module.scss";
import { useFormValues } from "../../contexts/FormContext";
import renderForm from "../../utils/renderForm";
import Tooltip from "../Tooltip/Tooltip";
import AdvancedFieldSwitch from "../AdvancedFieldSwitch/AdvancedFieldSwitch";
const Group = ({ label, subParameters, hasOptionalFields }) => {
  const [showAdvanced, setShowAdvanced] = useState(
    hasOptionalFields ? false : true
  );
  const subcomponents = renderForm(subParameters);
  return (
    <>
      {showAdvanced && (
        <div className={styles.group}>
          <div className={styles.label}>{label}</div>
          {subcomponents}
        </div>
      )}
      <AdvancedFieldSwitch
        hasOptionalFields={hasOptionalFields}
        showAdvanced={showAdvanced}
        setShowAdvanced={setShowAdvanced}
      />
    </>
  );
};

export default Group;
