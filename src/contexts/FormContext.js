import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({});
  const [disabledFormValues, setDisabledFormValues] = useState([]);
  const handleChange = (key, value, action) => {
    if (action === "mount") {
      setFormValues((prevValues) => ({
        ...prevValues,
        [key]: value,
      }));
    }
  };

  const generateFinalJson = () => {
    const finalFormValues = { ...formValues };
    disabledFormValues.forEach((key) => {
      delete finalFormValues[key];
    });
    return finalFormValues;
  };

  return (
    <FormContext.Provider
      value={{
        formValues,
        setFormValues,
        handleChange,
        disabledFormValues,
        setDisabledFormValues,
        generateFinalJson,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export const useFormValues = () => {
  const contextValue = useContext(FormContext);
  if (contextValue === undefined) {
    throw new Error("useFormValues must be within a FormContext");
  }

  return contextValue;
};
