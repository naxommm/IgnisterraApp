import React from 'react';
import { useFormik } from 'formik';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Input, Button, Select, SelectItem } from '@ui-kitten/components';

function Formulario() {

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const formik = useFormik({
    initialValues: { 
      name: '', 
      password: '' ,
      animal: ''
    },
    onSubmit: values => {
      console.log(values);

    },
  });

  
  const handleSelect = (index) => {
    setSelectedIndex(index);
    const selectedAnimal = ['Gato', 'Perro', 'Hamster'][index.row];
    formik.setFieldValue('animal', selectedAnimal);
  };

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <Text category='h1'>Nombre</Text>
        <Input
          placeholder='Ingresa tu nombre'
          value={formik.values.name}
          onChangeText={formik.handleChange('name')}
          onBlur={formik.handleBlur('name')}
          style={{ marginBottom: 16 }}
        />
        <Text category='h1'>Contraseña</Text>
        <Input
          placeholder='Ingresa tu contraseña'
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          secureTextEntry={true}
          style={{ marginBottom: 16 }}
        />

        <Text category='h1'>Animal</Text>
        <Select
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
          value={formik.values.animal}
        >
          <SelectItem title='Gato' />
          <SelectItem title='Perro' />
          <SelectItem title='Hamster' />
        </Select>

        <Button onPress={formik.handleSubmit}>
          Submit
        </Button>
      </Layout>
    </ApplicationProvider>
  );
}

export default Formulario;