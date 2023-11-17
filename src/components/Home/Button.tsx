import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native"

interface ButtonProps extends TouchableOpacityProps {
  title: string
}
export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.8}
      className="flex items-center justify-center bg-ui-400 rounded-full py-2"
    >
      <Text className="text-ui-200">{title}</Text>
    </TouchableOpacity>
  )
}
