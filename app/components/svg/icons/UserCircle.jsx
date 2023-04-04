import * as React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../../theme/colors";

function UserCircle(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.316 19.438A4.001 4.001 0 019 17h6a4.001 4.001 0 013.684 2.438M16 9.5a4 4 0 11-8 0 4 4 0 018 0zm6 2.5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        stroke={colors.turquoise[700]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default UserCircle;
