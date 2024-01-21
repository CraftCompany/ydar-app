import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowSettingsScreen = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#1D1D1B"
      fillRule="evenodd"
      d="M9.593 9.103c0 .319-.13.614-.343.84l-7.095 7.094A1.174 1.174 0 0 1 .5 17.013a1.174 1.174 0 0 1-.024-1.655l6.232-6.315L.476 2.848A1.174 1.174 0 0 1 .5 1.192a1.174 1.174 0 0 1 1.655-.023L9.25 8.263c.106.118.189.248.248.39.06.142.095.296.095.45Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ArrowSettingsScreen
