import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";


//Screens
import Home from "../screens/Home";
import LoginForm from "../screens/Home";
import Debug from "../screens/Debug";
/* import LoginForm from "../Login";  */


const Stack = createNativeStackNavigator();

function ContainerRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ title: "" }}
          name="Home"
          component={Home}
          initialParams={{ comments:'' }}
        />
        <Stack.Screen 
        initialParams={{ name:'' }} 
        name="Debug" 
        component={Debug}/>
        <Stack.Screen name="Login" component={LoginForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ContainerRoutes;
