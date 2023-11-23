import "react-native-gesture-handler"

import { useEffect } from "react"

import { NavigationContainer } from "@react-navigation/native"

import * as NavigationBar from "expo-navigation-bar"

import { Routes } from "./src/routes"
import { SafeAreaView, View } from "react-native"

export default function App() {
  const hideNavigationBarOnAndroidDevices = async () => {
    await NavigationBar.setVisibilityAsync("hidden")
    await NavigationBar.setBehaviorAsync("overlay-swipe")
  }

  useEffect(() => {
    hideNavigationBarOnAndroidDevices()
  }, [])

  return (
    <NavigationContainer>
      <View className="flex-1 bg-ui-400 px-5 pt-12 pb-4">
        <Routes />
      </View>
    </NavigationContainer>
  )
}
