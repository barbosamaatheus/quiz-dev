import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height * 0.08,
    width: Dimensions.get("window").width / 1.3,
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#888",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default styles;
