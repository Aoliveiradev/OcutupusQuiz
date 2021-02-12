import React, { useState, Component, useEffect } from "react";
import { render } from "react-dom";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MultipleChoice from "./MultipleChoice";
import styles from "../Components/Styles";
import { DashedProgress } from "react-native-dashed-progress";

export default function Quiz({ navigation }) {
  const quizzes = [
    {
      photo: require("../assets/QuizPhotos/quizphoto1.jpg"),
      question: "ONDE FICA ESTE LOCAL ?",
      options: ["COLOMBIA", "HOLANDA", "PORTUGAL", "BRASIL", "PERU"],
      answer: 4,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto2.png"),
      question: "QUE ESPORTE É ESTE ?",
      options: ["VOLEI", "NATAÇÃO", "FUTEBOL", "TENNIS", "MUSCULAÇÃO"],
      answer: 2,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto3.jpg"),
      question: "QUAL NOME DESTE ANIMAL ?",
      options: ["CACHORRO", "CARNEIRO", "GATO", "VACA", "GOLFINHO"],
      answer: 3,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto4.jpg"),
      question: "ONDE FICA ESTE LOCAL ?",
      options: [
        "RIO DE JANEIRO",
        "SÃO PAULO",
        "ESPIRITO SANTO",
        "BAHIA",
        "PORTO ALEGRE",
      ],
      answer: 0,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto5.jpg"),
      question: "QUEM É ESTE JOGADOR?",
      options: ["VANDIK", "ROBINHO", "NEYMAR", "LEWANDOVISK", "RONALDINHO"],
      answer: 2,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto6.png"),
      question: "DE QUEM É ESTE EMBLEMA ?",
      options: ["ADMINISTRAÇÃO", "LETRAS", "FARMÁCIA", "MEDICINA", "CONTÁBEIS"],
      answer: 3,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto7.jpg"),
      question: "QUE PAÍS E ESTE ?",
      options: ["BRASIL", "CHILE", "PORTUGAL", "ALEMANHA", "ISLANDIA"],
      answer: 2,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto8.png"),
      question: "QUEM UTILIZA ESTE ICONE ?",
      options: ["GITHUB", "LINKEDIN", "FACEBOOK", "TWITTER", "GOOGLE"],
      answer: 0,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto9.jpg"),
      question: "QUE BANDA É ESTA ?",
      options: ["RESTART", "OLODUM", "RAMONES", "AVANTASIA", "AXÉ BRASIL"],
      answer: 1,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto10.jpg"),
      question: "QUANDO OCORREU ESTE FATO?",
      options: ["1989", "1988", "1990", "1998", "2008"],
      answer: 0,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto11.jpg"),
      question: "QUEM É ESTE CANTOR ?",
      options: [
        "PABLO VITTAR",
        "RAFAEL NADAL",
        "ROBERTO CARLOS",
        "ERASMO CARLOS",
        "FALCÃO",
      ],
      answer: 2,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto12.jpg"),
      question: "QUE CARRO É ESTE ?",
      options: ["FUSCA", "CORSA", "GOL", "VOYAGE", "A3"],
      answer: 0,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto13.jpg"),
      question: "QUAL NOME DESTE PLANETA ?",
      options: ["URANUS", "VENUS", "TERRA", "NETUNO", "SATURNO"],
      answer: 4,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto14.png"),
      question: "QUAL NOME DESTE VIRUS ?",
      options: ["COVID-29", "COVID-20", "COVID-19", "COVID-99", "COVID-00"],
      answer: 2,
    },
    {
      photo: require("../assets/QuizPhotos/quizphoto15.jpg"),
      question: "QUE ANIMAL É ESTE ?",
      options: ["FRANGO", "CANÁRIO", "FALCÃO", "ÁGUIA", "GALINHA"],
      answer: 3,
    },
  ];

  const [quiz, setQuiz] = useState(0);
  const [points, setPoints] = useState(0);
  const [selectedOption, setSelectedOption] = useState(-1);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.ImageBackground}
          source={quizzes[quiz].photo}
        >
          <View style={{ left: 270 }}>
              <DashedProgress
                fill={50}
                countBars={50}
                radius={50}
                strokeThickness={2}
                strokeColor="#030303"
                showTooltip={false}
                trailColor="transparent"
                showIndicator={false}
                duration={6000}
              


              />
            
          </View>
        </ImageBackground>
        <View animation="fadeInUpBig" style={styles.footer}>
          <View>
            <Text style={styles.textFooter}>{quizzes[quiz].question}</Text>
            <MultipleChoice
              direction={"column"}
              choices={quizzes[quiz].options}
              chosenColor="#00a8f0"
              chosenTextColor="#00a8f0"
              chosenIndex={selectedOption}
              onPress={(selectedOption) => {
                setSelectedOption(selectedOption);
              }}
            />

            <View style={styles.buttonbox}>
              <View style={styles.buttonStart}>
                <TouchableOpacity onPress={() => navigation.goBack(null)}>
                  <Text style={styles.textSign}>Voltar</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonStart}>
                <TouchableOpacity
                  onPress={() => {
                    if (selectedOption === quizzes[quiz].answer) {
                      setPoints(points + 1);
                    }

                    if (quiz + 1 >= quizzes.length) {
                      // mudar para tela de pontos
                      navigation.navigate("CountScreen", {
                        points: points + 1,
                      });
                    } else {
                      // muda de quiz
                      setQuiz(quiz + 1);
                    }
                  }}
                >
                  <Text style={styles.textSign}>Próximo</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  firstButton: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "#00a8f0",
    borderWidth: 1,
    marginTop: 15,
    backgroundColor: "#00a8f0",
    marginHorizontal: 10,
  },
});
