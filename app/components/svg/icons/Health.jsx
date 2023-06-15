import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Health(props, color) {
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
        d="M17.333 2.667a2.667 2.667 0 100 5.333 2.667 2.667 0 000-5.333zM14.35 9.332l-6.107 3.055-1.508 4.523 2.526.844 1.16-3.474 2.366-1.185-3.434 16.237h2.726l1.841-8.703c.639.759 1.614 1.986 2.078 2.482v6.221h2.667v-7.07l-1.565-2.347 1.11-4.661a6.725 6.725 0 001.364 1.727 6.534 6.534 0 004.424 1.684V16c-1.025 0-1.89-.33-2.645-1.005-.677-.604-1.177-1.54-1.485-2.779-.57-2.281-2.78-2.883-3.87-2.883h-1.648z"
        fill={props.color || '#252525'}
      />
    </Svg>
  );
}

export default Health;
