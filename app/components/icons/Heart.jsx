import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Heart(props, color) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22 4c-3.86 0-6 2.787-6 2.787S13.86 4 10 4a7.333 7.333 0 00-7.334 7.333c0 .671.1 1.34.27 2h4.62l3.438-2.578 2.667 4 1.894-1.422h2.148A2.655 2.655 0 0120 12a2.666 2.666 0 110 5.333c-.984 0-1.834-.54-2.297-1.333h-1.259l-3.438 2.579-2.667-4L8.443 16H4.03c2.019 3.685 5.71 6.773 7.01 7.987a301.57 301.57 0 004.96 4.48s2.855-2.52 4.958-4.48c1.825-1.703 8.375-7.092 8.375-12.654A7.333 7.333 0 0021.999 4z"
        fill={props.color || "#252525"}
      />
    </Svg>
  );
}

export default Heart;
