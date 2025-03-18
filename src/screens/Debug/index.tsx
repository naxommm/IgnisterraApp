import { View, Text, TouchableOpacity } from "react-native";

function Debug({route, navigation}) {
  const { name } = route.params;

  console.info("name Debug :", name);

  return (
    <View>
      <Text>Debug</Text>

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

    </View>
  );
}

export default Debug;