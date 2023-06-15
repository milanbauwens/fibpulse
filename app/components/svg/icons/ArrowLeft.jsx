import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

const ArrowLeft = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#clip0_188_605)"
      stroke="#1B3C43"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M25.334 16h-18M12.667 22l-6.222-6.222 6.222-6.222" />
    </G>
    <Defs>
      <ClipPath id="clip0_188_605">
        <Path fill="#fff" transform="rotate(-180 13.334 13.333)" d="M0 0H21.3333V21.3333H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ArrowLeft;
