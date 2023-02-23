import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function Home(props, color) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_270_608)">
        <Path
          d="M13.333 26.667v-8h5.333v8h6.667V16h4L15.999 4 2.666 16h4v10.667h6.667z"
          fill={props.color || "#252525"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_270_608">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Home;
