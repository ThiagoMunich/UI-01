import { View, Text } from "react-native"

import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const ICON_SIZE = 24
const ICON_COLOR = "#E3F9F6"

export function Header() {
  const navigation = useNavigation()
  return (
    <View className="flex-row justify-between items-center">
      <Ionicons
        size={ICON_SIZE}
        color={ICON_COLOR}
        name="arrow-back"
        onPress={() => navigation.goBack()}
      />

      <Text className="font-bold text-lg text-ui-200">Details</Text>

      <Ionicons name="heart-outline" size={ICON_SIZE} color={ICON_COLOR} />
    </View>
  )
}
