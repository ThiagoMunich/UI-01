import "react-native-gesture-handler"

import * as NavigationBar from "expo-navigation-bar"

import { NavigationContainer } from "@react-navigation/native"

import { Routes } from "./src/routes"

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}
