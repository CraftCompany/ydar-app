import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const RangImage = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <Rect
      width={66}
      height={66}
      x={2}
      y={2}
      fill="#F5F5F5"
      stroke="#DD403A"
      strokeWidth={4}
      rx={18}
    />
    <Path
      stroke="#DD403A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M61 36 36 11 11 36"
    />
    <Path
      stroke="#DD403A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M61 51 36 26 11 51"
    />
    <Path
      fill="#DD403A"
      stroke="#DD403A"
      strokeLinejoin="round"
      d="M35.975 38.846a.5.5 0 0 0-.95 0l-2.47 7.6h-7.992a.5.5 0 0 0-.294.905l6.466 4.697-2.47 7.601a.5.5 0 0 0 .77.56L35.5 55.51l6.466 4.697a.5.5 0 0 0 .77-.559l-2.47-7.6 6.465-4.698a.5.5 0 0 0-.294-.905h-7.992l-2.47-7.6Z"
    />
  </Svg>
)
export default RangImage
