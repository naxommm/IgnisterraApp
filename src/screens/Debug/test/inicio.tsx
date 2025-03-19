import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, ActivityIndicator } from "react-native";
import styles from './style';


function Inicio({ navigation }) {
  const [showModal, setShowModal] = useState(false); 

  console.info("Mostrar modal :", showModal);
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
  );
}

export default Inicio;