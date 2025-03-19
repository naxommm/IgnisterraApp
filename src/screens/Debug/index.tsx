import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import 'bootstrap/dist/css/bootstrap.min.css';



function Debug({navigation}) {
  
  const [comments, setComments] = useState('');

  
  //lista de "botones" en el apartado debug
  return (
    <View> 
      <Text>Pestaña de debug</Text>

        {/* Text input que lo que se ingrese se guarde en el estado "comments" (ademas los botones funcionan con el "evt") */}
        <TextInput placeholder="" style={{backgroundColor: "#fff",
          width: '50%', alignSelf: 'center', marginTop: 20, padding: 10}}
        value={comments} onChangeText={(evt) => setComments(evt)}/>

        <TouchableOpacity style={{ backgroundColor: "red" }} onPress={() => navigation.navigate(
          { name: "Home", params: { comments } })}>
            <Text>Enviar comentarios</Text>
        </TouchableOpacity>

        {/* Boton para ir hacia a la pantalla anterior "navigation.goBack" */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Ir a Homeee (Login)</Text>
        </TouchableOpacity>

        {/* Boton para cargar denuevo la pantalla sin importar si estas en ella "navigation.push" */}
        <TouchableOpacity style={{ backgroundColor: "green" }}  onPress={() => navigation.push("Debug")}>
            <Text>navigation push test</Text>
        </TouchableOpacity>

        {/* Boton para ir a la primera pantalla que visitaste "navigation.popToTop" */}
        <TouchableOpacity style={{ backgroundColor: "cyan" }}  onPress={() => navigation.popToTop()}>
            <Text>Volver al principio</Text>
        </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: "gray"}} onPress={() => navigation.navigate("Inicio") }>
            <Text>Ir a inicio(campo de pruebas)</Text>
          </TouchableOpacity>

    </View>
  );
}

export default Debug;