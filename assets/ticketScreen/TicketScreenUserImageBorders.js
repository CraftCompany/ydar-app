import * as React from "react"
import Svg, { Path } from "react-native-svg"
const TicketScreenUserImageBorders = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={260}
    height={260}
    fill="none"
    {...props}
  >
    <Path
      stroke="#DD403A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10}
      d="M255 197.308v38.461c0 5.101-2.026 9.992-5.633 13.598A19.226 19.226 0 0 1 235.769 255h-38.461m0-250h38.461A19.228 19.228 0 0 1 255 24.23v38.462m-250 0V24.231A19.23 19.23 0 0 1 24.23 5h38.462m0 250H24.231A19.229 19.229 0 0 1 5 235.769v-38.461"
    />
  </Svg>
)
export default TicketScreenUserImageBorders
