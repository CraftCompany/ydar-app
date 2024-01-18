import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ArrowHomeScreen = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#F64740"
        d="M9.87 19.883c5.408 0 9.792-4.384 9.792-9.792 0-5.408-4.384-9.793-9.793-9.793C4.461.298.077 4.683.077 10.091c0 5.408 4.384 9.792 9.792 9.792Z"
      />
    </G>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.546}
      d="M6.442 10.09h6.855M9.87 6.663l3.427 3.427-3.427 3.428"
    />
    <Defs></Defs>
  </Svg>
)
export default ArrowHomeScreen
