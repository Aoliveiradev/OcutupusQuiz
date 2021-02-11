import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import styles from "../Components/Styles"

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.containerStart}>
      <Animatable.View animation="fadeInUpBig">
        <Image
          style={{ alignSelf: "center" }}
          source={require("../assets/quiz.png")}
        />

        <View style={styles.textcontainerStart}>
          <Text style={styles.textexp}>
            Bem Vindo ao Octupus Quiz. Aqui você terá um game de CONHECIMENTOS
            GERAIS, selecione 01(uma) das 05(cinco) opções e descubra se você
            está atualizado com o que acontece pelo mundo.
          </Text>
        </View>
        <View style={styles.buttonStartScreen}>
          <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
            <Text style={styles.textSign}>Start</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

