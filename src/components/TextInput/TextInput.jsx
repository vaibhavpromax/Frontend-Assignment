import React from "react";
import styles from "./TextInput.module.scss";
import { useFormValues } from "../../contexts/FormContext";
import Tooltip from "../Tooltip/Tooltip";

const TextInput = ({
  label,
  description,
  validate,
  jsonKey,
  placeholder,
  disable,
}) => {
  const { formValues, handleChange } = useFormValues();
  const { required, immutable, pattern } = validate;

  if (disable) return null;

  return (
    <div className={styles.input}>
      <label>{label}</label>
      {description.length === 0 ? null : <Tooltip description={description} />}

      <input
        type="text"
        value={formValues[jsonKey] || ""}
        onChange={(e) => {
          handleChange(jsonKey, e.target.value, "mount");
        }}
        required={required}
        readOnly={immutable}
        pattern={pattern}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
