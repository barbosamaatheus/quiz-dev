import React from "react";
import { StyleSheet } from "react-native";

import { metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a1b9a",
  },
  backgroundImage: {
    flex: 1,
    width: metrics.screenWidth,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    marginBottom: 20,
  },
});

export default styles;
