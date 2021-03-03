import { StyleSheet } from "react-native";
import { red } from "ansi-colors";

const Style = StyleSheet.create({
  mainPageBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0A75AD",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  fontSizeTitle: {
    fontSize: 20
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    height: 50,
    width: 300,
    marginBottom: 30
  },
  logo: {
    width: 200,
    height: 200,
    backgroundColor: "#ffffff"
  }
});

export default Style;
