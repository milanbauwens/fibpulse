import * as React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

function Medication(props) {
  return (
    <Svg
      width={96}
      height={96}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={48} cy={48} r={48} fill="#F2F7F7" />
      <Path
        d="M65.186 36.526L77.532 50.45c4.214 4.752 3.779 12.02-.973 16.234-4.752 4.214-12.02 3.779-16.234-.973L47.978 51.788l17.208-15.262z"
        fill="#FEC272"
      />
      <Path
        d="M65.186 36.526L52.838 22.604c-4.214-4.752-11.483-5.188-16.234-.973-4.752 4.214-5.188 11.482-.974 16.234l12.348 13.922 17.208-15.26z"
        fill="#FBE3C4"
      />
      <Circle cx={29} cy={58} r={12} fill="#57818A" />
      <Rect
        x={24.6855}
        y={49.7417}
        width={17.9918}
        height={5}
        rx={2.5}
        transform="rotate(47.252 24.686 49.742)"
        fill="#15615f"
      />
    </Svg>
  );
}

export default Medication;
