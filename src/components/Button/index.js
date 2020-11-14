import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <Text numberOfLines={3} style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
