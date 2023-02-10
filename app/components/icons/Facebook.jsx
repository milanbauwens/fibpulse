import * as React from "react";
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const Facebook = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16S8.637 29.333 16 29.333c7.364 0 13.334-5.97 13.334-13.333 0-7.364-5.97-13.334-13.334-13.334Z"
      fill="url(#a)"
    />
    <Path
      d="M17.805 19.534h3.45l.543-3.506h-3.993v-1.916c0-1.456.476-2.747 1.838-2.747h2.189V8.306c-.385-.052-1.198-.165-2.735-.165-3.21 0-5.09 1.695-5.09 5.556v2.332h-3.3v3.505h3.299v9.635a13.49 13.49 0 0 0 1.994.164c.614 0 1.214-.056 1.805-.136v-9.663Z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={6.662}
        y1={6.662}
        x2={27.077}
        y2={27.076}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2AA4F4" />
        <Stop offset={1} stopColor="#007AD9" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Facebook;
