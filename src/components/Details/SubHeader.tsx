import { View, Text, ViewProps } from "react-native"

import { AntDesign, Entypo } from "@expo/vector-icons"

import { CourseProps } from "../../../@types/Courses"

export function SubHeader({
  price,
  course,
  rating,
  numberOfReviews,
  ...rest
}: CourseProps & ViewProps) {
  return (
    <View
      {...rest}
      className="flex-row bg-ui-300 items-center justify-between rounded-2xl px-4 py-2"
    >
      <View>
        <Text className="text-ui-200 font-bold text-2xl">{course}</Text>
        <View className="flex-row items-center mt-2">
          <AntDesign name="star" color="#FFD250" />

          <Text className="text-ui-200 ml-2">{rating}</Text>

          <Entypo name="dot-single" size={20} color="#E3F9F6" />

          <Text className="text-ui-200">{numberOfReviews} reviews</Text>
        </View>
      </View>

      <View className="flex items-center justify-center rounded-2xl bg-ui-100 h-16 w-16">
        <Text className="text-ui-400 text-xs font-semibold">Fee</Text>

        <Text className="text-ui-400 font-bold text-xl">${price}</Text>
      </View>
    </View>
  )
}
