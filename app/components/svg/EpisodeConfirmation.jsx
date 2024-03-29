import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import Svg, { Circle, Defs, Ellipse, G, Path } from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: filter */

function EpisodeConfirmation(props) {
  const { height } = useWindowDimensions();

  return (
    <Svg
      width="100%"
      height={height * 0.45}
      viewBox="0 0 350 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M37.736 122.498c23.56-30.42 51.572-51.139 82.876-66.48 31.03-15.501 65.352-25.625 94.244-17.14 28.677 8.542 51.865 35.477 76.397 64.833 24.589 29.572 50.465 61.35 57.035 99.692 6.628 38.558-6.107 83.463-36.084 100.303-29.76 16.783-77.094 5.127-120.161 5.076-42.792.108-81.65 11.447-117.085 1.007-35.434-10.441-67.346-43.151-73.668-79.704-6.539-36.496 12.728-76.892 36.446-107.587z"
        fill="#FBF1EA"
      />
      <Path
        d="M165.733 258.835c34.38 0 62.25-2.67 62.25-5.963 0-3.294-27.87-5.964-62.25-5.964-34.379 0-62.249 2.67-62.249 5.964 0 3.293 27.87 5.963 62.249 5.963z"
        fill="#FBE3C4"
      />
      <Path
        d="M222.597 110.804l-.944 10.903s5.108.427 10.384 5.932c5.22 5.505 5.386 11.652 5.386 11.652l15.882-3.314s-9.551-1.283-12.883-6.253c-3.332-4.971 5.553-17.851 5.553-17.851s-9.885 6.841-14.882 7.108c-5.054.214-8.496-8.177-8.496-8.177z"
        fill="#FEC272"
      />
      <Path
        d="M192.853 125.969c24.678 0 41.259 23.613 41.259 45.641 0 44.61-68.816 81.138-70.062 81.138-1.245 0-70.062-36.528-70.062-81.138 0-22.028 16.582-45.641 41.259-45.641 14.168 0 23.432 7.211 28.803 13.55 5.372-6.339 14.635-13.55 28.803-13.55z"
        fill="#DD1515"
        stroke="#DD1515"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M237.45 174.711c.002-29.354-24.93-58.022-55.891-48.238 16.297 3.259 37.968 20.514 39.597 48.238 0 43.61-57.579 78.898-56.478 78.898 4.891.001 74.403-38.13 72.772-78.898z"
        fill="#BC1010"
      />
      <G filter="url(#filter0_d_1118_3715)">
        <Circle cx={206.795} cy={235.206} r={27.432} fill="#F3FEE7" />
      </G>
      <Ellipse cx={206.795} cy={235.206} rx={21.1015} ry={21.1015} fill="#D0F8AB" />
      <Circle cx={206.795} cy={235.206} r={14.7711} fill="#85E13A" />
      <Path
        d="M212.579 232.137l-7.544 7.316-3.429-3.325"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs />
    </Svg>
  );
}

export default EpisodeConfirmation;
