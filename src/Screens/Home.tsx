import { SafeAreaView, Text, View } from "react-native"

import { useNavigation } from "@react-navigation/native"

import { Card } from "../components/Home/Card"
import { Header } from "../components/Home/Header"
import { Banner } from "../components/Home/Banner"

const coursesData = [
  {
    id: 0,
    icon: require("../../assets/images/math.png"),
    course: "Mathematics",
    price: 10,
    rating: 4.9,
    numberOfReviews: 689,
    lottie: require("../../assets/lotties/math.json"),
  },
  {
    id: 1,
    icon: require("../../assets/images/chemistry.png"),
    course: "Chemistry",
    price: 14,
    rating: 4.8,
    numberOfReviews: 464,
    lottie: require("../../assets/lotties/chemistry.json"),
  },
  {
    id: 2,
    icon: require("../../assets/images/biology.png"),
    course: "Biology",
    price: 16,
    rating: 4.9,
    numberOfReviews: 769,
    lottie: require("../../assets/lotties/biology.json"),
  },
  {
    id: 3,
    icon: require("../../assets/images/language.png"),
    course: "Language",
    price: 16,
    rating: 4.9,
    numberOfReviews: 834,
    lottie: require("../../assets/lotties/language.json"),
  },
]

export function Home() {
  const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 bg-ui-400 px-5 pt-14 pb-4">
      <Header />

      <Banner className="mt-5" />

      <View className="flex-row justify-between items-center my-5">
        <Text className="font-bold text-2xl text-ui-200">Subject</Text>
        <Text className="text-ui-200">See all</Text>
      </View>

      <View className="flex-row justify-between gap-y-4 flex-wrap">
        {coursesData.map((course) => (
          <Card
            key={course.id}
            icon={course.icon}
            price={course.price}
            course={course.course}
            rating={course.rating}
            numberOfReviews={course.numberOfReviews}
            onPress={() => navigation.navigate("details", { course: course })}
          />
        ))}
      </View>
    </SafeAreaView>
  )
}
