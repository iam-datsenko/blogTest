import React from 'react';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';
import TextInput from './TextInput';

type Props = {
  icon: boolean;
  name: string;
  placeholder: string;
  autoCapitalize: string;
  autoCorrect: boolean;
  keyboardType?: string;
  textContentType: string;
};

const FormField = ({icon, name, placeholder}: Props) => {
  const {errors, setFieldTouched, setFieldValue, touched, values}: any =
    useFormikContext();

  return (
    <>
      <TextInput
        icon={icon}
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        placeholder={placeholder}
        value={values[name]}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
