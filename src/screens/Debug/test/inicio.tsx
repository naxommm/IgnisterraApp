import React, { useState } from 'react';
/* import { View, Text, TouchableOpacity, TextInput, Modal, ActivityIndicator, StyleSheet } from "react-native"; */
import { StyleSheet } from 'react-native';
/* import styles from './style'; */
import { ApplicationProvider, Layout, Text, Button, IconRegistry, Icon, Card } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { StatusBar } from 'expo-status-bar';
import { default as theme } from "../../../../theme.json";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
 
const testIcons = (props) => {
  return <Icon name="done-all-outline" {...props} />;
}

function Inicio({ navigation }) { //aaaa

  return (
    <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}} >
    <Layout style={styles.container}>
      <Text status="primary"category="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore assumenda quisquam tempore recusandae doloremque et atque reiciendis placeat a expedita distinctio accusantium nemo labore, impedit repudiandae dolor consequuntur, iste nam?</Text>
      <Button accessoryLeft={testIcons} onPress={() => navigation.navigate("Formss")}>Ir a forms test con Formik</Button>
      <Card status="warning">
        <Text>Card Card Card Card Card Card Card Card Card Card </Text>
      </Card>
      <StatusBar style="light"/>
    </Layout>
    </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

  /* const [showModal, setShowModal] = useState(false);  */
  
  /* console.info("Mostrar modal :", showModal);
  return (
    <View>
      <Text>Inicio</Text>

      <TouchableOpacity onPress={() => setShowModal(!showModal)}>
        <Text>Abrir modal</Text>
      </TouchableOpacity>

      <Modal visible={showModal} transparent={true} animationType="fade">
        <View style={styles.containerModal}>
          <View style={styles.modal}>
            <Text style={styles.titleHome}>Titulo modal</Text>
            <TextInput placeholder='ooo'></TextInput>
            <TouchableOpacity onPress={() => setShowModal(false)}>
                
              <Text>Cerrar modal</Text>
            </TouchableOpacity>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </View>
      </Modal>
    </View>
  ); */


export default Inicio;