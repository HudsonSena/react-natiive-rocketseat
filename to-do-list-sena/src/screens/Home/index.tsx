import {
  FlatList,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { style } from "./styles";
import { Task } from "../../components/Task";
import LogoSvg from "../../../assets/logo.svg";

export function Home() {
  const tarefas = ["tarefa 1", "tarefa 2", "tarefa 3"];

  return (
    <View style={style.container}>
      <View style={style.header}>
        <LogoSvg />
      </View>
      <View style={style.form}>
        <TextInput
          style={style.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"grey"}
        />
        <TouchableOpacity style={style.buttonText}></TouchableOpacity>
      </View>
      <View>
        <View>
          <Text>Criadas</Text>
          <Text>0</Text>
        </View>
        <View>
          <Text>Concluídas</Text>
          <Text>0</Text>
        </View>
      </View>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            name={item}
            //onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <View>
            <Text>Você ainda não tem tarefas cadastradas</Text>
            <Text>Crie tarefas e organize suas items a fazer</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
