import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import StartScreen from "./screens/StartScreen";
import Quiz from "./screens/Quiz";
import CountScreen from "./screens/CountScreen";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }}/>
        <Stack.Screen name="CountScreen" component={CountScreen} options={{ headerShown: false }}/>

       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
