import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg";
import colors from "../../../theme/colors";

function CheckCircle(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={16} cy={16} r={16} fill={colors.green[500]} />
      <G clipPath="url(#clip0_421_1070)">
        <Path
          d="M13 20.17L9.53 16.7a.996.996 0 10-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0l10.58-10.58a.996.996 0 10-1.41-1.41L13 20.17z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_421_1070">
          <Path fill="#fff" transform="translate(4 4)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CheckCircle;
