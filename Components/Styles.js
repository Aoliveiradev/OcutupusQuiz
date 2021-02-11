import * as React from "react";
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
 
  buttonbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  ImageBackground: {
    flex: 1,
    width: "100%",
    marginTop: 70,
    marginBottom: 20,
   },

  image: {
    flex: 1,
    alignSelf: "center",
    width: "90%",
    marginTop: 70,
    marginBottom: 20,
    borderRadius: 70,
  },
  container: {
    flex: 1,
    backgroundColor: "#00a8f0",
  },
  header: {
    marginTop: 330,
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textFooter: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 25,
  },
  firstButton: {
    left: 250,
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
  buttonStart: {
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
  textSign: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  textQuiz: {
    fontSize: 40,
    fontWeight: "bold",
    position: "relative",
  },
  containerStart: {
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
  buttonStartScreen: {
    left: 250,
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "#00a8f0",
    borderWidth: 1,
    marginTop: 15,
    backgroundColor: "#00a8f0",
  },
  textSignScreen: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  textcontainerScreen: {
    borderRadius: 1,
    borderColor: "#030303",
  },
  containerWelcome: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  headerWelcome: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footerWelcome: {
    flex: 1,
    backgroundColor: "#00a8f0",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logoWelcome: {
    width: "70%",
    height: "50%",
    backgroundColor: "#ffff",
  },
  titleWelcome: {
    color: "#ffff",
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textWelcome: {
    color: "grey",
    marginTop: 5,
  },
  buttonWelcome: {
    alignItems: "flex-end",
    marginTop: 100,
  },
  textSignWelcome: {
    color: "#00a8f0",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonsigninWelcome: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    borderColor: "#ffff",
    borderWidth: 1,
    marginTop: 15,
    backgroundColor: "#ffff",
  },
 
});
export default styles;
