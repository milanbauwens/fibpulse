import * as React from 'react';
import Svg, { Circle, G, Mask, Path } from 'react-native-svg';

function Sports(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 125 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G opacity={1}>
        <Path
          d="M116.81 33.406c12.35 21.3 10.259 50.762-3.087 68.279-13.247 17.418-37.848 22.893-59.66 21.3-21.812-1.592-40.835-10.152-49.102-24.684C-3.306 83.77-.716 63.166 8.845 43.56 18.407 23.85 34.84 5.038 56.453 2.153 77.967-.733 104.56 12.206 116.81 33.406z"
          fill="#FBF1EA"
        />
        <Circle cx={76.5} cy={61.1534} r={29.5} fill="#FEC272" />
        <Path
          d="M80.662 89.802c0-17.4 7.036-23.285 26.611-20.47M52.16 80.037c23.55-5.541 40.518-25.28 43.288-40.518M47.314 52.332c17.662 9.004 35.323 2.078 38.44-19.739M66.709 31.9c-.347 9.35 13.85 42.25 30.82 51.945"
          stroke="#301D04"
          strokeWidth={0.75}
        />
        <Circle
          cx={35.5959}
          cy={73.9671}
          r={16}
          transform="rotate(-15 35.596 73.967)"
          fill="#12666C"
        />
        <Mask
          id="a"
          style={{
            maskType: 'alpha',
          }}
          maskUnits="userSpaceOnUse"
          x={19}
          y={57}
          width={33}
          height={33}
        >
          <Circle
            cx={35.5959}
            cy={73.9671}
            r={16}
            transform="rotate(-15 35.596 73.967)"
            fill="#FBF1EA"
          />
        </Mask>
        <G mask="url(#a)" fill="#FBF1EA">
          <Path d="M27.282 92.597c1.896-2.233 3.204-5.036 3.791-8.129.587-3.093.433-6.366-.448-9.49-.88-3.125-2.455-5.991-4.566-8.311-2.112-2.32-4.686-4.012-7.463-4.907l-.488 2.566c2.373.764 4.572 2.21 6.376 4.192 1.804 1.982 3.15 4.431 3.902 7.1.752 2.67.884 5.467.382 8.11-.502 2.642-1.619 5.037-3.24 6.944l1.754 1.925zM50.515 86.128c-2.759-.985-5.293-2.76-7.348-5.144-2.054-2.385-3.557-5.297-4.357-8.443-.8-3.146-.87-6.416-.201-9.48.669-3.066 2.052-5.818 4.01-7.981l1.706 1.978c-1.674 1.848-2.855 4.2-3.426 6.818-.572 2.619-.513 5.413.171 8.1.684 2.689 1.968 5.176 3.723 7.214 1.756 2.038 3.92 3.553 6.278 4.395l-.556 2.543z" />
        </G>
      </G>
    </Svg>
  );
}

export default Sports;
