import { View, Text, Image, TouchableOpacity } from "react-native"

import { AntDesign } from "@expo/vector-icons"
import { CourseProps } from "../../../@types/Courses"

export function Card({
  icon,
  price,
  course,
  rating,
  numberOfReviews,
  ...rest
}: CourseProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.8}
      className="bg-ui-300 flex items-center rounded-xl py-3 w-40 overflow-hidden"
    >
      <Image className="w-16 h-16 mb-2" source={icon} />
      <Text className="text-ui-200 font-bold text-base">{course}</Text>
      <Text className="text-ui-200 my-2 text-sm">${price}/month</Text>

      <View className="flex-row gap-x-1 items-center">
        <AntDesign name="star" color="#FFD250" />
        <Text className="text-ui-200 font-light text-xs">
          {rating}({numberOfReviews} reviews)
        </Text>
      </View>
    </TouchableOpacity>
  )
}
