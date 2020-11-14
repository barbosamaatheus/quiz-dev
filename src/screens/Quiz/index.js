import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Alert, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";

import Button from "../../components/Button";

import api from "../../services/api";

import styles from "./styles";

const defalt = [
  {
    id: 1063,
    question: "What is service container in Laravel?",
    description: null,
    answers: {
      answer_a:
        "Service container is a tool used for performing dependency injection in Laravel.",
      answer_b:
        "Dockerized Laravel applications are called service containers.",
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [
      {
        name: "Laravel",
      },
    ],
    category: "Code",
    difficulty: "Easy",
  },
];

const Quiz = () => {
  const [data, setData] = useState(defalt);
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const onPress = (answer) => {
    //setData(data.shift())
    verifyCorrect(answer) ? setPoints(points + 1) : null;
    setIndex(index + 1);
  };

  const verifyCorrect = (answer) => {
    return data[index].correct_answer === answer ? true : false;
  };

  const renderItem = ({ item }) => {
    return item[1] !== null ? (
      <Button
        style={styles.buttons}
        title={item[1]}
        onPress={(item) => onPress(item[0])}
      />
    ) : null;
  };

  const getData = async () => {
    try {
      const response = await api.get("/questions");
      setData(response.data);
    } catch (err) {
      Alert.alert("Error", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.quizBoarder}>
          <View style={styles.detailsContainer}>
            <Text style={styles.details}>{index + 1}/10</Text>
            <Text style={[styles.details, styles.points]}>{points}</Text>
            <Text style={styles.details}>{data[index].difficulty}</Text>
          </View>

          <Text style={styles.theme}>{data[index].category}</Text>
          <Text numberOfLines={5} style={styles.statement}>
            {data[index].question}
          </Text>

          <FlatList
            style={styles.buttonContainer}
            data={Object.entries(data[index].answers)}
            renderItem={renderItem}
            keyExtractor={(item) => item[0]}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Quiz;
