import React from 'react';
import { useFormik } from 'formik';
import { Text } from 'react-native';




const Formulario = () => {

  const {values, isSubmitting, setFieldValue} = useFormik({
    initialValues: {
        name:'',
        password:'',
        email:'',
    },
    onSubmit: values => {

    },
}); 
  return (
    <Text>asdadasd</Text>
  );
}
export default Formulario;