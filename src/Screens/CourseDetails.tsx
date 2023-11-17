import { View, Text, SafeAreaView } from "react-native"

import { useRoute } from "@react-navigation/native"
import { Header } from "../components/Details/Header"

export function CourseDetails() {
  const { params } = useRoute()
  return (
    <SafeAreaView className="flex-1 bg-ui-400 px-5 pt-14 pb-4">
      <Header />

      <Text className="text-3xl font-bold mt-10 text-ui-200">
        {params?.course.course}
      </Text>
    </SafeAreaView>
  )
}
