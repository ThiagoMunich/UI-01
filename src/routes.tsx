import { createStackNavigator } from "@react-navigation/stack"

import { Home } from "./Screens/Home"
import { CourseDetails } from "./Screens/CourseDetails"
import { View } from "react-native"

const Stack = createStackNavigator()

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardOverlay: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: "#29384D",
            }}
          />
        ),
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="details" component={CourseDetails} />
    </Stack.Navigator>
  )
}
