import { View, ViewProps, Dimensions } from "react-native"
import { Feather } from "@expo/vector-icons"
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  interpolate,
} from "react-native-reanimated"
import { PanGestureHandler } from "react-native-gesture-handler"

const SCREEN_WIDTH = Dimensions.get("screen").width
const LIMIT_TO_UNLOCK = SCREEN_WIDTH / 2.5

interface UnlockProps extends ViewProps {}
export function Unlock({ ...rest }: UnlockProps) {
  const translateX = useSharedValue(0)

  const onGesture = useAnimatedGestureHandler({
    onStart: (event, context) => {
      // if (event.absoluteX >= LIMIT_TO_UNLOCK) return

      context.translateX = translateX.value
    },
    onActive: (event, context) => {
      if (event.translationX < 0 || event.absoluteX >= SCREEN_WIDTH - 112)
        return

      translateX.value = context.translateX + event.translationX
    },
    onEnd: () => {
      if (translateX.value >= LIMIT_TO_UNLOCK) {
        translateX.value = withTiming(SCREEN_WIDTH - 112)
      } else {
        translateX.value = withSpring(0)
      }
    },
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    }
  })

  const textOpacity = useAnimatedStyle(() => {
    return {
      display: translateX.value >= LIMIT_TO_UNLOCK ? "none" : "flex",
      opacity: interpolate(translateX.value, [0, LIMIT_TO_UNLOCK], [1, 0]),
    }
  })

  const unlockedTextOpacity = useAnimatedStyle(() => {
    return {
      display: translateX.value < LIMIT_TO_UNLOCK ? "none" : "flex",
      opacity: interpolate(
        translateX.value,
        [LIMIT_TO_UNLOCK, SCREEN_WIDTH - 112],
        [0, 1]
      ),
    }
  })

  return (
    <View
      {...rest}
      className="flex-row items-center bg-ui-100 rounded-2xl px-2 py-1"
    >
      <PanGestureHandler onGestureEvent={onGesture}>
        <Animated.View
          className="flex items-center justify-center rounded-xl bg-ui-400 h-14 w-14"
          style={animatedStyle}
        >
          <Feather name="lock" size={28} color="#FFF3D3" />
        </Animated.View>
      </PanGestureHandler>

      <Animated.Text
        style={textOpacity}
        className="font-bold text-2xl text-ui-400 text-center ml-auto mr-auto"
      >
        Slide to unlock
      </Animated.Text>

      <Animated.Text
        style={unlockedTextOpacity}
        className="font-bold text-2xl text-ui-400 text-center ml-auto mr-auto"
      >
        Unlocked!
      </Animated.Text>
    </View>
  )
}
