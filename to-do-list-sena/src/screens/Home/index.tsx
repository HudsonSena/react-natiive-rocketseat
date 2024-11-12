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

type TaskType = {
  title: string;
  color: string;
  checked: boolean;
  disabled: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [description, setDescription] = useState("");

  function handleTaskAdd() {
    if (tasks.some((task) => task.title === description)) {
      return Alert.alert("Tarefa já existe");
    }

    if (!description.trim()) {
      return Alert.alert("Digite a tarefa");
    }

    const newTask = {
      title: description,
      color: "#6b6b6b",
      checked: false,
      disabled: false,
    };

    setTasks((prevState) => [newTask, ...prevState]);
    setDescription("");
  }

  function handleTaskRemove(taskTitle: string) {
    Alert.alert("Remover", "Remover essa tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.title !== taskTitle)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleToggleComplete(taskTitle: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.title === taskTitle ? { ...task, checked: !task.checked } : task
      )
    );
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
            onChangeText={setDescription}
            value={description}
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
            <Text style={styles.txtNumber}>
              {tasks.filter((task) => task.checked).length}
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Task
            task={item}
            onRemove={() => handleTaskRemove(item.title)}
            onToggleComplete={handleToggleComplete}
          />
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
