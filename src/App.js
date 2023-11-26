import { FormProvider } from "./contexts/FormContext";
import styles from "./App.module.scss";
import FormBuilder from "./components/FormBuilder/FormBuilder";
import { useState } from "react";
import pizzaSchema from "./pizza.json";
function App() {
  const [uiSchema, setUiSchema] = useState(pizzaSchema);

  return (
    <FormProvider>
      <div className={styles.app}>
        <div className={styles.editor}>
          <textarea
            fullWidth
            multiline
            rows={25}
            variant="outlined"
            placeholder="Paste your UI Schema here"
            value={JSON.stringify(uiSchema, null, 2)}
            onChange={(e) => setUiSchema(JSON.parse(e.target.value))}
          />
        </div>
        <div className={styles.formBuilder}>
          <FormBuilder uiSchema={uiSchema} />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
