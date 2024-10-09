import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "Hudson",
    "Diego",
    "Sena",
    "Souza",
    "Cristina",
    "Maria",
    "Joao",
    "Socorro",
    "Harrison",
    "Corró",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Sena")) {
      return Alert.alert("Participante ja existe");
    }
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Quarta, 02 de Outubro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptytext}>Ninguem esta no evento</Text>
        )}
      />
    </View>
  );
}
