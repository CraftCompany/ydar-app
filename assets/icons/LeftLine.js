import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LeftLine = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={1}
    fill="none"
    {...props}
  >
    <Path
      stroke="#C9CDC9"
      strokeLinecap="round"
      strokeOpacity={0.5}
      d="M.5.5h79"
    />
  </Svg>
)
export default LeftLine
