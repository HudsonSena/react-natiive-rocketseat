import { CheckBox } from "react-native-btr";
import { styles } from "./styles";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  description: string;
  onRemove: () => void;
};

export function Task({ description, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <CheckBox color="#4EA8DE" borderRadius={50} borderWidth={1} />
      </View>

      <Text style={styles.txtDescription}>{description}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image
          style={styles.buttonImg}
          source={require("../../../assets/remove.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
