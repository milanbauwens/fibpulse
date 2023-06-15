import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function CircleSm(props) {
  return (
    <Svg
      width={32}
      height={84}
      viewBox="0 0 32 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={42} cy={42} r={42} fill="#F2F7F7" />
    </Svg>
  );
}

export default CircleSm;
