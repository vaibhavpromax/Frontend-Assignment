import React, { useEffect, useState } from "react";
import renderForm from "../../utils/renderForm";
import styles from "./FormBuilder.module.scss";
import { useFormValues } from "../../contexts/FormContext";
function FormBuilder({ uiSchema }) {
  const { formValues } = useFormValues();
  const showJsonHandler = () => {
    // alert(JSON.stringify(f ormValues));
    console.log(formValues);
  };
  return (
    <>
      <h2>Dynamic Schema Form</h2>
      <div className={styles.form}>{renderForm(uiSchema)}</div>
      <button onClick={showJsonHandler}> Show output</button>
    </>
  );
}

export default FormBuilder;
