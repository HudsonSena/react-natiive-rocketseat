import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingBottom: 12,
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
    marginTop: -50,
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
  },
  txtQnt2: {
    flexDirection: "row",
    gap: 4,
    color: "white",
    alignItems: "center",
  },
  txtCreated: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  txtComplete: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },
  txtNumber: {
    color: "white",
    borderRadius: 50,
    backgroundColor: "#262626",
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  list: {
    paddingHorizontal: 24,
  },
  emptyBox: {
    padding: 40,
    alignItems: "center",
    borderTopWidth: 0.5,
    borderColor: "gray",
  },
  txtEmpty: {
    color: "#808080",
    fontWeight: "bold",
  },
  txtEmpty2: {
    color: "#808080",
  },
  imgEmpty: {
    width: 56,
    objectFit: "contain",
  },
});
