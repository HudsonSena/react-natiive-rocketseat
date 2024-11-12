import { CheckBox } from "react-native-btr";
import { styles } from "./styles";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

type TaskType = {
  title: string;
  color: string;
  checked: boolean;
  disabled: boolean;
};

type Props = {
  task: TaskType;
  onRemove: () => void;
  onToggleComplete: (taskTitle: string) => void;
};

export function Task({ task, onRemove, onToggleComplete }: Props) {
  const [isChecked, setIsChecked] = useState(task.checked);

  function handleToggleComplete() {
    setIsChecked((prev) => !prev);
    onToggleComplete(task.title);
  }

  return (
    <View
      style={[
        styles.container,
        isChecked ? { borderColor: "#2b2b2b" } : { borderColor: task.color },
      ]}
    >
      <CheckBox
        color="#5E60CE"
        borderRadius={50}
        borderWidth={1}
        checked={isChecked}
        onPress={handleToggleComplete}
      />

      <Text
        style={[
          styles.txtDescription,
          isChecked && { textDecorationLine: "line-through", color: "#808080" },
        ]}
      >
        {task.title}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Image
          style={styles.buttonImg}
          source={require("../../../assets/remove.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
