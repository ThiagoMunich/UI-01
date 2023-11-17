import { Text, SafeAreaView, View } from "react-native"

import { useRoute } from "@react-navigation/native"

import LottieView from "lottie-react-native"

import { Header } from "../components/Details/Header"
import { SubHeader } from "../components/Details/SubHeader"

export function CourseDetails() {
  const { params } = useRoute()
  return (
    <SafeAreaView className="flex-1 bg-ui-400 px-5 pt-14 pb-4">
      <Header />

      <SubHeader
        className="mt-5"
        price={params?.course.price}
        course={params?.course.course}
        rating={params?.course.rating}
        numberOfReviews={params?.course.numberOfReviews}
      />

      <LottieView
        loop
        autoPlay
        style={{
          width: "100%",
          backgroundColor: "#29384D",
        }}
        source={require("../../assets/lotties/math-teacher.json")}
      />

      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-2xl text-ui-200">Outline</Text>
        <Text className="text-ui-200">View all</Text>
      </View>
    </SafeAreaView>
  )
}
