import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Pill(props, color) {
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
        d="M21.334 2.677c-2.05 0-4.1.778-5.656 2.334L5.01 15.677c-3.114 3.113-3.113 8.2 0 11.313v.002a7.994 7.994 0 005.656 2.341c2.046 0 4.1-.787 5.656-2.343L26.99 16.326v-.003c3.112-3.112 3.113-8.2 0-11.312a7.976 7.976 0 00-5.656-2.334zm0 2.649c1.362 0 2.724.523 3.77 1.57a5.312 5.312 0 010 7.542l-5 5-7.54-7.542 5-5a5.317 5.317 0 013.77-1.57z"
        fill={props.color || "#252525"}
      />
    </Svg>
  );
}

export default Pill;
