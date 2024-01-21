import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TaskCheckMarkIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={57}
    height={57}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F64740"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M51.386 22.151a23.749 23.749 0 0 1-43.902 17.41 23.75 23.75 0 0 1 34.46-30.64"
    />
    <Path
      stroke="#F64740"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.475 28.742 8.662 8.76 26.53-27.422"
    />
  </Svg>
)
export default TaskCheckMarkIcon