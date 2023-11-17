import { View, Text, ViewProps } from "react-native"

import { Button } from "./Button"

import LottieView from "lottie-react-native"

interface BannerProps extends ViewProps {}
export function Banner({ ...rest }: BannerProps) {
  return (
    <View
      {...rest}
      className="rounded-2xl bg-ui-100 px-4 flex-row overflow-hidden"
    >
      <View className="flex justify-center">
        <Text className="text-ui-400 font-extrabold text-4xl">60% off</Text>
        <Text className="text-ui-400 font-semibold text-base mb-5">
          Feb 14 - Mar 20
        </Text>

        <Button title="Join Course" />
      </View>

      <LottieView
        autoPlay
        style={{
          width: 208,
          height: 240,
          backgroundColor: "#FFF3D3",
          transform: [{ translateX: 6 }],
        }}
        source={require("../../../assets/lotties/bike-guy.json")}
      />
    </View>
  )
}
