import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import styles from "../Components/Styles"

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.containerWelcome}>
      <View style={styles.headerWelcome}>
        <Animatable.Image
          animation="bounceIn"
          duraton="3500"
          source={{ uri: "https://octupus.me/img/Octupus.png" }}
          style={styles.logoWelcome}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={styles.footerWelcome} animation="fadeInUpBig">
        <Text style={styles.titleWelcome}>OctupusQuiz</Text>

        <View style={styles.buttonWelcome}>
          <TouchableOpacity
            onPress={() => navigation.navigate("StartScreen")}
            style={styles.buttonsigninWelcome}
          >
            <Text style={styles.textSignWelcome}>Start</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default WelcomeScreen;
