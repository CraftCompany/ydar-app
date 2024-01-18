import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ProfileHomeScreen = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={132}
    height={132}
    fill="none"
    {...props}
  >
    <G
      stroke="#FFF8F0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      filter="url(#a)"
    >
      <Path d="M66.88 59.785a9.998 9.998 0 0 0-1.815 0C51.975 59.345 41.58 48.62 41.58 35.42 41.58 21.945 52.47 11 66 11c13.475 0 24.42 10.945 24.42 24.42-.055 13.2-10.45 23.925-23.54 24.365ZM39.38 80.08c-13.31 8.91-13.31 23.43 0 32.285 15.125 10.12 39.93 10.12 55.055 0 13.31-8.91 13.31-23.43 0-32.285-15.07-10.065-39.875-10.065-55.055 0Z" />
    </G>
    <Defs></Defs>
  </Svg>
)
export default ProfileHomeScreen
