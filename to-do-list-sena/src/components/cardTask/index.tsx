import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-btr";

type Props = {
  description: string;
  onRemove: () => void;
  //completed: () => void;
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkBox: {
    width: 20,
  },
});

export function Task({ description, onRemove }: Props) {
  function toogle() {}
  return (
    <View style={styles.card}>
      <View style={styles.checkBox}>
        <CheckBox borderWidth={2} borderRadius={3} onPress={toogle} />
      </View>

      <Text>{description}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image source={require("../../../assets/remove.png")} />
      </TouchableOpacity>
    </View>
  );
}
