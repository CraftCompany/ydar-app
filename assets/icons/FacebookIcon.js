import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FacebookIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#1877F2"
      d="M24 12.073c0-6.628-5.373-12-12-12s-12 5.372-12 12c0 5.99 4.388 10.954 10.125 11.854V15.54H7.078v-3.468h3.047V9.429c0-3.008 1.791-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z"
    />
  </Svg>
)
export default FacebookIcon
