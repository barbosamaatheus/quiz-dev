import React from "react";
import { View, ImageBackground } from "react-native";

import Button from "../../components/Button";

import styles from "./styles";

const Home = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("Quiz");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.backgroundImage}
      >
        <Button style={styles.button} title="Start Playing" onPress={onPress} />
      </ImageBackground>
    </View>
  );
};

export default Home;
