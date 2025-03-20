import React from 'react';
import { useFormik } from 'formik';
import { Text } from 'react-native';
import { Form, View, Item, Label, Input } from '@gluestack-ui/nativewind-utils';




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
    <View>
    <Form>
      <Item>
        <Label></Label>
      </Item>
    </Form>
    </View>
  );
}
export default Formulario;