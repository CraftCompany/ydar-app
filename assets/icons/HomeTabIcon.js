import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeTabIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      fill={props.focused ? "#F86A63" : "#FFF8F0"}
      d="M33.999 15.001a1 1 0 1 0-2 0h2Zm-27.998 0a1 1 0 1 0-2 0h2Zm30.29 4.708a1.001 1.001 0 0 0 1.416-1.416l-1.416 1.416ZM19 1.002l.708-.708a1 1 0 0 0-1.416 0l.708.708ZM.293 18.292A1.001 1.001 0 0 0 1.71 19.71L.293 18.293ZM9.001 38h19.998v-2H9.001v2Zm24.998-5V15.001h-2v18h2ZM6.001 33V15.001H4v18h2Zm31.706-14.707-17.999-18-1.416 1.417 17.999 17.999 1.416-1.416Zm-19.415-18-17.999 18 1.416 1.416 17.999-18L18.292.295ZM28.999 38a5 5 0 0 0 5-5h-2a3 3 0 0 1-3 3v2ZM9.001 36a3 3 0 0 1-3-3H4a5 5 0 0 0 5 5v-2Z"
    />
  </Svg>
)
export default HomeTabIcon
