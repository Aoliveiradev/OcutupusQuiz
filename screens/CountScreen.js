import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

export default function CountScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUpBig">
        <View style={styles.textcontainer}>
          <Text style={styles.texCount}>VOCÊ ACERTOU</Text>
          <Text style={styles.textMarquer}>{route.params.points}</Text>
          <Text style={styles.texCount}>QUESTÃO(ÕES)</Text>
          <Text style={styles.texCount}> PARABENS!!</Text>
        </View>
      </Animatable.View>
      <View style={styles.buttonStart}>
        <TouchableOpacity onPress={() => navigation.navigate("StartScreen")}>
          <Text style={styles.textSign}>Início</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  textMarquer: {
    alignSelf: "center",
    color: "green",
    fontSize: 140,
    fontWeight: "bold",
  },

  texCount: {
    fontSize: 40,
    fontWeight: "bold",
    position: "relative",
    alignSelf: "center",
  },
  textQuiz: {
    fontSize: 40,
    fontWeight: "bold",
    position: "relative",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  textexp: {
    marginTop: 140,
    alignSelf: "center",
    position: "relative",
    textAlign: "justify",
    margin: 20,
    fontSize: 20,
  },
  buttonStart: {
    marginTop: 250,
    alignSelf: "center",
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "#00a8f0",
    borderWidth: 1,
    backgroundColor: "#00a8f0",
  },
  textSign: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  textcontainer: {
    borderRadius: 1,
    borderColor: "#030303",
  },
});
