import { View, Text, Image, ViewProps } from "react-native"

import { Feather } from "@expo/vector-icons"

interface CardProps extends ViewProps {
  image: any
  title: string
  duration: string
}

export function Card({ title, duration, image, ...rest }: CardProps) {
  return (
    <View
      {...rest}
      className="flex-row bg-ui-300 items-center rounded-2xl px-3 py-2"
    >
      <Image source={image} className="w-12 h-12 mr-3" />

      <View className="gap-y-1 mr-auto">
        <Text className="text-ui-200 font-bold text-lg" numberOfLines={1}>
          {title}
        </Text>
        <Text className="text-ui-200 font-bold text-xs">{duration} min</Text>
      </View>
      <Feather name="play-circle" size={40} color="#FFF3D3" />
    </View>
  )
}
