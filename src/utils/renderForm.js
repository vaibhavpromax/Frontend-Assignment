import Group from "../components/Group/Group";
import IgnoreComponent from "../components/IgnoreComponent/IgnoreComponent";
import Radio from "../components/Radio/Radio";
import Select from "../components/Select/Select";
import Switch from "../components/Switch/Switch";
import TextInput from "../components/TextInput/TextInput";

const renderForm = (uiJson) => {
  let sortedUiJson = uiJson?.sort((a, b) => {
    return a.order - b.order;
  });
  let hasOptionalFields = false;
  const formComponents = sortedUiJson?.map((item) => {
    const isRequired = item.validate && item.validate.required;
    if (!isRequired) {
      hasOptionalFields = true;
    }

    switch (item.uiType) {
      case "Input":
        return (
          <TextInput
            description={item?.description}
            disable={item?.disable}
            label={item?.label}
            jsonKey={item?.jsonKey}
            validate={item?.validate}
            placeholder={item?.placeholder}
            hasOptionalFields={hasOptionalFields}
          />
        );
      case "Group":
        return (
          <Group
            label={item?.label}
            subParameters={item?.subParameters}
            hasOptionalFields={hasOptionalFields}
          />
        );

      case "Select":
        return (
          <Select
            description={item?.description}
            disable={item?.disable}
            label={item?.label}
            jsonKey={item?.jsonKey}
            validate={item?.validate}
            placeholder={item?.placeholder}
            item={item}
            hasOptionalFields={hasOptionalFields}
          />
        );
      case "Switch":
        return (
          <Switch
            description={item?.description}
            disable={item?.disable}
            label={item?.label}
            jsonKey={item?.jsonKey}
            validate={item?.validate}
            placeholder={item?.placeholder}
            hasOptionalFields={hasOptionalFields}
          />
        );
      case "Radio":
        return (
          <Radio
            description={item?.description}
            disable={item?.disable}
            label={item?.label}
            jsonKey={item?.jsonKey}
            validate={item?.validate}
            placeholder={item?.placeholder}
            hasOptionalFields={hasOptionalFields}
          />
        );
      case "Ignore":
        return (
          <IgnoreComponent
            label={item?.label}
            subParameters={item?.subParameters}
            conditions={item?.conditions}
          />
        );
      default:
        return null;
    }
  });
  return formComponents;
};

export default renderForm;
