import React from "react";
import { StyleSheet, Dimensions } from "react-native";

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
    justifyContent: "center",
  },
  quizBoarder: {
    flex: 0.7,
    width: Dimensions.get("window").width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 30,
    elevation: 10,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    marginBottom: 8,
  },
  details: {
    textAlign: "center",
    flex: 1,
    fontWeight: "bold",
  },
  points: {
    fontSize: 20,
    flex: 1,
    backgroundColor: "#ffb300",
    borderRadius: 30,
  },
  theme: {
    fontWeight: "bold",
    color: "gray",
    marginBottom: 2,
  },
  statement: {
    flex: 2,
    textAlign: "center",
    maxHeight: 150,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 16,
  },
  buttons: {
    marginBottom: 8,
  },
});

export default styles;
