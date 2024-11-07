import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Task } from "../../components/cardTask";

export function Home() {
  function handleTaskAdd() {
    console.log("Clicou em adicionar tarefa");
  }
  function handleTaskRemove() {
    console.log("Clicou em remover tarefa");
  }

  const tasks = [
    { id: "1", description: "Tarefa 1" },
    { id: "2", description: "Tarefa 2" },
    { id: "3", description: "Tarefa 3" },
    { id: "4", description: "Tarefa 4" },
    { id: "5", description: "Tarefa 5" },
  ];

  return (
    <View>
      <Image source={require("../../../assets/logo.png")} />
      <View>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"gray"}
        />
        <TouchableOpacity onPress={handleTaskAdd}>
          <Image source={require("../../../assets/plus.png")} />
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Text>Criadas</Text>
          <Text>{tasks.length}</Text>
        </View>
        <View>
          <Text>Concluídas</Text>
          <Text>{tasks.length - 2}</Text>
        </View>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Task description={item.description} onRemove={handleTaskRemove} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
