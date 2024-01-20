import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LikeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="M17.944 7.507a4.727 4.727 0 0 1-1.314 3.281c-1.939 2.01-3.82 4.107-5.83 6.044a1.164 1.164 0 0 1-1.635-.035l-5.796-6.008c-1.751-1.816-1.751-4.748 0-6.563a4.433 4.433 0 0 1 6.42 0l.21.218.211-.218a4.459 4.459 0 0 1 3.21-1.376c1.207 0 2.362.496 3.21 1.376a4.727 4.727 0 0 1 1.314 3.281Z"
    />
  </Svg>
)
export default LikeIcon
