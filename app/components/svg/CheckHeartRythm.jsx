import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function CheckHeartRythm(props) {
  return (
    <Svg
      width={72}
      height={72}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={35.8252} cy={35.8252} r={35.8252} fill="#FFF" />
      <Path
        d="M46.87 14.927c9.464 0 15.823 8.963 15.823 17.325 0 16.933-26.391 30.799-26.869 30.799-.478 0-26.869-13.866-26.869-30.8 0-8.36 6.36-17.324 15.823-17.324 5.433 0 8.986 2.737 11.046 5.143 2.06-2.406 5.613-5.143 11.046-5.143z"
        fill="#C7D3D3"
        stroke="#C7D3D3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M43.803 21.645c6.835 0 11.428 6.473 11.428 12.512 0 12.23-19.06 22.243-19.406 22.243-.345 0-19.405-10.014-19.405-22.243 0-6.04 4.592-12.512 11.427-12.512 3.925 0 6.49 1.976 7.978 3.714 1.488-1.738 4.054-3.715 7.978-3.715z"
        fill="#366"
        stroke="#366"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.42 37.629h9.409l3.908-10.014 7.537 17.167L42.3 34.196l3.07 7.152 1.676-3.72h8.932"
        stroke="#C7D3D3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M53.754 28.637a2.749 2.749 0 002.754-2.743 2.749 2.749 0 00-2.754-2.743A2.749 2.749 0 0051 25.894a2.749 2.749 0 002.754 2.743zM56.356 21.714l-1.552-.61a1.39 1.39 0 01-.852-1.61l4.306-18.419A1.403 1.403 0 0160.072.074l5.99 1.98c.808.262 1.202 1.198.808 1.96L58.127 21.04a1.406 1.406 0 01-1.77.675z"
        fill="#FEC272"
      />
    </Svg>
  );
}

export default CheckHeartRythm;
