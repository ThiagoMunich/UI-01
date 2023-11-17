import { TouchableOpacityProps } from "react-native"

export interface CourseProps extends TouchableOpacityProps {
    icon?: any
    price: number
    course: string
    rating: number
    numberOfReviews: number
  }