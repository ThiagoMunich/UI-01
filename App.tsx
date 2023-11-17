import "react-native-gesture-handler"

import { StatusBar } from "expo-status-bar"
import { SafeAreaView, Text, View } from "react-native"

import { Routes } from "./src/routes"
import { DarkTheme, NavigationContainer } from "@react-navigation/native"

const coursesData = [
  {
    id: 0,
    course: "Mathematics",
    price: 10,
    rating: 4.9,
    numberOfReviews: 689,
  },
  {
    id: 1,
    course: "Chemistry",
    price: 14,
    rating: 4.8,
    numberOfReviews: 464,
  },
  {
    id: 2,
    course: "Chemistry",
    price: 14,
    rating: 4.8,
    numberOfReviews: 464,
  },
  {
    id: 3,
    course: "Chemistry",
    price: 14,
    rating: 4.8,
    numberOfReviews: 464,
  },
]

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}
