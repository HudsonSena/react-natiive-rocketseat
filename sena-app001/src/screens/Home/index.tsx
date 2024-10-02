import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Quarta, 02 de Outubro de 2024</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor={"#6b6b6b"}
      />
    </View>
  );
}
