import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HeartIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.884 6.68a3.977 3.977 0 0 1-1.12 2.781c-1.652 1.692-3.255 3.458-4.97 5.086a.993.993 0 0 1-1.392-.048L3.463 9.314c-1.492-1.567-1.492-4.066 0-5.593a3.71 3.71 0 0 1 1.248-.85 3.75 3.75 0 0 1 1.488-.287 3.807 3.807 0 0 1 1.487.325c.47.208.895.508 1.248.883l.18.188.18-.183a3.732 3.732 0 0 1 1.247-.85 3.77 3.77 0 0 1 1.487-.287 3.847 3.847 0 0 1 2.736 1.208 4.081 4.081 0 0 1 1.12 2.812Z"
    />
  </Svg>
)
export default HeartIcon
