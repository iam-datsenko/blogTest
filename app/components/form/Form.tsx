import React from 'react';
import {Formik} from 'formik';
import Yup, {AnyObject} from 'yup';

type Props = {
  children: React.ReactNode;
  initialValues: Object;
  onSubmit: () => void;
  validationSchema: Yup.ObjectSchema<AnyObject>;
};

function Form({children, initialValues, onSubmit, validationSchema}: Props) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
}

export default Form;
