import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const Facebook = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
      fill="url(#paint0_linear_393_2354)"
    />
    <Path
      d="M13.354 14.65h2.588l.406-2.629h-2.994v-1.437c0-1.092.357-2.06 1.378-2.06h1.642V6.23c-.289-.039-.899-.124-2.051-.124-2.407 0-3.818 1.271-3.818 4.167v1.749H8.03v2.629h2.474v7.226c.49.073.987.123 1.496.123.46 0 .91-.042 1.354-.102V14.65z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_393_2354"
        x1={4.9965}
        y1={4.9965}
        x2={20.3075}
        y2={20.3075}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2AA4F4" />
        <Stop offset={1} stopColor="#007AD9" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Facebook;
