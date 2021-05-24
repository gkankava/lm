import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import CardInput from "../../shared/inputs/CardInput";

const FormField = (props) => {
  const { name, ...restOfProps } = props;
  const { control, errors } = useFormContext();
  return (
    <Controller
      control={control}
      render={({ onChange, onBlur, value }) => (
        <CardInput
          // passing everything down to CardInput
          // to be able to support all TextInput props
          {...restOfProps}
          errorText={errors[name]?.message}
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          value={value}
        />
      )}
      name={name}
    />
  );
};
export default FormField;
