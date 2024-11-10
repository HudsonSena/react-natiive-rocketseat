import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    paddingTop: 30,
    paddingBottom: 70,
    backgroundColor: "#0D0D0D",
  },
  imgLogo: {
    width: 110,
    objectFit: "contain",
    marginHorizontal: "auto",
  },
  main: {
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  form: {
    width: "100%",
    height: 54,
    flexDirection: "row",
    gap: 4,
    marginTop: -30,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    fontSize: 16,
    padding: 16,
    borderRadius: 5,
    color: "white",
  },
  button: {
    padding: 18,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
  },
  imgPLus: {
    width: 17,
    height: 17,
    objectFit: "contain",
  },
  txtQnt: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
