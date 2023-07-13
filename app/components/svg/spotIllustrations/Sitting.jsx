import * as React from 'react';
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Mask, Path } from 'react-native-svg';

function Sitting(props) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 125 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1118_3569)">
        <Path
          d="M115.316 37.889c10.571 19.555 10.407 44.31-.328 61.39-10.735 17.162-31.958 26.569-51.707 25.661-22.612-1.039-38.104-11.882-49.658-29.457C2.151 77.99-2.437 53.979 6.74 35.248 15.918 16.6 38.862 3.233 61.069 3.728c22.207.413 43.594 14.688 54.247 34.16z"
          fill="#FBF1EA"
        />
        <Path
          d="M62.502 124.999c-15.363 0-24.821-6.463-30.088-9.357l66.473-.345c-12.395 8.73-25.874 9.702-36.386 9.702z"
          fill="#12666C"
        />
        <Path fill="#73B3B7" d="M32.9065 74.7115H75.59880000000001V109.64160000000001H32.9065z" />
        <Path
          d="M76.808 74.415h-44.84c-.515 0-.927-1.73-.927-3.892 0-2.161.412-3.89.928-3.89h44.84c.514 0 .927 1.729.927 3.89.013 2.108-.413 3.892-.928 3.892z"
          fill="#73B3B7"
        />
        <Path d="M32.987 78.306v-3.892H75.79v1.668l-42.803 2.224z" fill="#45999F" />
        <Path d="M35.812 53.013h38.033v13.619" stroke="#168087" />
        <Path
          d="M31.168 72.447l-7.77-49.62c-.09-.57 1.614-1.305 3.833-1.652 2.22-.348 4.066-.17 4.155.4l7.77 49.621c.09.57-1.614 1.305-3.833 1.652-2.162.353-4.066.17-4.155-.4z"
          fill="#73B3B7"
        />
        <Mask
          id="a"
          style={{
            maskType: 'alpha',
          }}
          maskUnits="userSpaceOnUse"
          x={3}
          y={80}
          width={113}
          height={37}
        >
          <Path
            d="M47.87 106.098C36.468 60.672 2.568 83.848 3.491 116.296h111.564c-23.423-30.284-41.297-23.794-51.468-8.035-5.177-6.427-12.635-4.12-15.717-2.163z"
            fill="#45999F"
          />
        </Mask>
        <G mask="url(#a)">
          <Ellipse cx={65.4108} cy={65.5237} rx={60.6425} ry={59.6723} fill="#12666C" />
        </G>
        <Circle cx={83.8462} cy={16.0096} r={16.0096} fill="#FEC272" />
        <Path
          d="M68.7 12.512a16.17 16.17 0 0021.468 19.221c.02-.011.003-.045-.018-.038-2.56.875-5.105-.126-7.807-.62A15.346 15.346 0 0170.397 20.38c-.81-2.711-2.422-5.132-1.698-7.867z"
          fill="#C0883D"
        />
        <Path
          d="M98.754 32.35c-2.96 4.188-7.614 5.42-9.57 5.514"
          stroke="#FEC272"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Path
          d="M62.909 13.16c-.329-3.033 1.233-5.405 2.054-6.211"
          stroke="#FEC272"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1118_3569">
          <Path fill="#fff" d="M0 0H125V125H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Sitting;
