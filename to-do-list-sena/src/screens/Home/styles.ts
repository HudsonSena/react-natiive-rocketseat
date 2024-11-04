import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
  },
  header: {
    padding: 24,
    alignItems: "center",
    height: 173,
    width: "100%",
    backgroundColor: "#0D0D0D",
  },
  form: {
    width: "100%",
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginTop: -50,
  },
  input: {
    flex: 1,
    width: "100%",
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#ffffff",
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
