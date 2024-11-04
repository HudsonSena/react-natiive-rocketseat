import { Text, View } from "react-native";

type Props = {
  name: string;
};

export function Task({ name }: Props) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
