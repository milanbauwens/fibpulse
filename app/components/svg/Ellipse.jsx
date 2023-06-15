import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Ellipse(props) {
  return (
    <Svg
      width={128}
      height={357}
      viewBox="0 0 128 357"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M134.287.087a185 185 0 001.374 356.212l14.475-52.308a130.725 130.725 0 01-.971-251.709L134.287.087z"
        fill="#F2F7F7"
      />
    </Svg>
  );
}

export default Ellipse;
