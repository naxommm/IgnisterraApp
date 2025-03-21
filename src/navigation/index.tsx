import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";


//Screens
import Home from "../screens/Home";
import LoginForm from "../screens/Home";
import Debug from "../screens/Debug";
import Inicio from "../screens/Debug/test/inicio";
import Formulario from "../screens/Debug/test/Formulario";
/* import LoginForm from "../Login";  */


const Stack = createNativeStackNavigator();

//Rutas 
function ContainerRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ title: "" }} name="Home"
          component={Home} 
        />
        <Stack.Screen 
        initialParams={{ name:'' }} name="Debug" 
        component={Debug}/>

        <Stack.Screen name="Login" component={LoginForm} 
        />

        <Stack.Screen options={{ title: "" }} name="Inicio" component={Inicio}
        />

        <Stack.Screen name="Formulario" component={Formulario} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ContainerRoutes;
