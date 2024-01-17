import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfileTabIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FFF8F0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.253 17.21a2.866 2.866 0 0 0-.522 0 6.998 6.998 0 0 1-6.761-7.014c0-3.879 3.135-7.03 7.03-7.03 3.879 0 7.03 3.151 7.03 7.03-.016 3.8-3.009 6.888-6.777 7.015ZM11.337 23.053c-3.832 2.566-3.832 6.745 0 9.295 4.354 2.913 11.495 2.913 15.849 0 3.831-2.565 3.831-6.745 0-9.294-4.338-2.898-11.48-2.898-15.85 0Z"
    />
  </Svg>
)
export default ProfileTabIcon
