import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export function Home() {
  const tasks = [];
  const size = 50;
  for (let i = 0; i < size; i++) {
    tasks.push({
      id: `${i}`,
      description: `Tarefa ${i}`,
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imgLogo}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
          />
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.imgPLus}
              source={require("../../../assets/plus.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.txtQnt}>
          <Text>
            <Text>Criadas</Text>
            <Text>10</Text>
          </Text>
          <Text>
            <Text>Concluídas</Text>
            <Text>10</Text>
          </Text>
        </View>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>
            {item.id}
            {item.description}
          </Text>
        )}
      />
    </View>
  );
}
