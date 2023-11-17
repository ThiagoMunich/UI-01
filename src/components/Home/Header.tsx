import { View, Text } from "react-native"

import { AntDesign } from "@expo/vector-icons"

export function Header() {
  return (
    <View className="flex-row justify-between items-center">
      <View>
        <Text className="text-ui-200 text-base">Welcome</Text>
        <Text className="text-3xl font-bold text-ui-200">Find your course</Text>
      </View>

      <View className="flex items-center justify-center rounded-lg bg-ui-200 h-11 w-11">
        <AntDesign name="search1" size={24} color="black" />
      </View>
    </View>
  )
}
