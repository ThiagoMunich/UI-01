import { View, Text, ViewProps } from "react-native"

import { Feather } from "@expo/vector-icons"
import Animated, { SlideInDown } from "react-native-reanimated"

interface UnlockProps extends ViewProps {}
export function Unlock({ ...rest }: UnlockProps) {
  return (
    <View
      {...rest}
      className="flex-row items-center justify-between bg-ui-100 rounded-2xl px-2 py-1"
    >
      <View className="flex items-center justify-center rounded-2xl bg-ui-400 h-14 w-14">
        <Feather name="lock" size={28} color="#FFF3D3" />
      </View>

      <Text className="font-bold text-xl text-ui-400">Unlock Course Now</Text>

      <Feather name="chevrons-right" size={32} color="#455262" />
    </View>
  )
}
