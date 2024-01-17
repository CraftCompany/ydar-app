import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const TicketTabIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={48}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={25} cy={21} r={21} fill="#F64740" />
    </G>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.5 28.157c0 1.018.992 1.843 2.215 1.843h22.57c1.223 0 2.215-.825 2.215-1.843v-3.39c-1.795-.406-3.115-1.77-3.115-3.392 0-1.622 1.32-2.986 3.115-3.391v-3.39c0-1.019-.992-1.844-2.215-1.844h-22.57c-1.223 0-2.215.825-2.215 1.843v3.383c1.813.395 3.15 1.767 3.15 3.399 0 1.632-1.337 3.004-3.15 3.399v3.383Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M30.1 17.502v-2.967M30.1 28.209V25.24M30.1 22.855v-2.968"
    />
    <Defs></Defs>
  </Svg>
)
export default TicketTabIcon
