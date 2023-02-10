import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const ArrowLeft = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <G
        clipPath="url(#b)"
        stroke="#252525"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M19 12H5.5M9.5 16.5l-4.667-4.667L9.5 7.167" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="rotate(-180 12 12)" d="M0 0h24v24H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" transform="rotate(-180 10 10)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ArrowLeft;
