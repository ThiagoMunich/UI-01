import { Text, SafeAreaView, View } from "react-native"

import { useRoute } from "@react-navigation/native"

import LottieView from "lottie-react-native"

import { Card } from "../components/Details/Card"
import { Header } from "../components/Details/Header"
import { SubHeader } from "../components/Details/SubHeader"
import { Unlock } from "../components/Details/Unlock"

const cardsData = [
  {
    id: 0,
    title: "Welcome to this course",
    duration: "16:54",
    image: require("../../assets/images/welcome.png"),
  },
  {
    id: 1,
    title: "Learning and growing",
    duration: "24:36",
    image: require("../../assets/images/learn.png"),
  },
]

export function CourseDetails() {
  const { params } = useRoute()
  return (
    <View className="flex-1 bg-ui-400">
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
        source={params?.course.lottie}
      />

      <View className="flex-row justify-between items-center mb-3">
        <Text className="font-bold text-2xl text-ui-200">Outline</Text>
        <Text className="text-ui-200">View all</Text>
      </View>

      {cardsData.map((card) => (
        <Card
          className="mb-3"
          key={card.id}
          title={card.title}
          image={card.image}
          duration={card.duration}
        />
      ))}

      <Unlock className="mt-auto" />
    </View>
  )
}
