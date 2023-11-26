import React, { useEffect } from "react";
import { useFormValues } from "../../contexts/FormContext";
import styles from "./IgnoreComponent.module.scss";
import renderForm from "../../utils/renderForm";

const IgnoreComponent = ({ label, subParameters, conditions }) => {
  const { formValues, setDisabledFormValues } = useFormValues();
  const subComponent = renderForm(subParameters);
  let displayIgnoredElement = conditions?.every((condition) => {
    const { op, value } = condition;
    const fieldValue = formValues.type;
    switch (op) {
      case "==":
        return fieldValue == value;
      case "!=":
        return fieldValue != value;
      default:
        return false;
    }
  });
  let keysOfSubParams = subParameters
    .filter((param) => {
      return !param.disable;
    })
    .map((param) => {
      return param.jsonKey;
    });
  useEffect(() => {
    if (displayIgnoredElement) {
      setDisabledFormValues((prevValues) => {
        return prevValues.filter((item) => {
          return !keysOfSubParams.includes(item);
        });
      });
    } else {
      setDisabledFormValues((prevValues) => {
        return [...prevValues, ...keysOfSubParams];
      });
    }
  }, [displayIgnoredElement]);

  return (
    <>
      {displayIgnoredElement && (
        <div className={styles.ignore}>
          <label>{label}</label>
          <div>{subComponent}</div>
        </div>
      )}
    </>
  );
};

export default IgnoreComponent;
