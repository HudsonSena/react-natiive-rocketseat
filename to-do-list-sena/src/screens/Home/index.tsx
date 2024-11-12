import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [description, setDescription] = useState("");

  function handleTaskAdd() {
    if (tasks.includes(description)) {
      return Alert.alert("Tarefa ja existe");
    }
    setTasks((prevState) => [...prevState, description]);
    setDescription("");
  }

  function handleTaskRemove(description: string) {
    Alert.alert("Remover", "Remover essa tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task != description)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  //Descrição com mais de uma linha de conteúdo para verificar o posicionamento no card
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
            onChangeText={setDescription}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Image
              style={styles.imgPLus}
              source={require("../../../assets/plus.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.txtQnt}>
          <View style={styles.txtQnt2}>
            <Text style={styles.txtCreated}>Criadas</Text>
            <Text style={styles.txtNumber}>{tasks.length}</Text>
          </View>
          <View style={styles.txtQnt2}>
            <Text style={styles.txtComplete}>Concluídas</Text>
            <Text style={styles.txtNumber}>10</Text>
          </View>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task description={item} onRemove={() => handleTaskRemove(item)} />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyBox}>
            <Image
              style={styles.imgEmpty}
              source={require("../../../assets/empty.png")}
            />
            <Text style={styles.txtEmpty}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.txtEmpty2}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
