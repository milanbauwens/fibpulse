import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import Svg, { Circle, Defs, G, LinearGradient, Mask, Path, Rect, Stop } from 'react-native-svg';

function MeasurePulse(props) {
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
        d="M54.766 84.619c28.095-18.26 66.855-16.62 104.589-23.8 37.734-7.182 74.443-22.775 107.46-15.389 33.018 7.387 62.549 37.958 71.572 72.838 9.229 34.88-1.845 74.274-19.482 106.281-17.637 32.007-41.836 56.423-68.701 62.579-26.865 6.36-56.601-5.95-94.13-5.745-37.324.205-82.646 12.515-111.357-2.462-28.71-14.978-40.81-57.45-38.144-97.664 2.666-40.215 20.097-78.377 48.193-96.638z"
        fill="#FBF1EA"
      />
      <Path
        d="M235.812 226.081c4.439 2.074 33.88 34.143 54.247 61.405 20.125-17.796 23.554-29.022 23.554-29.022-6.789-2.37-50.123-54.311-48.818-58.756 1.306-4.444-1.305-15.705-2.35-18.668-1.044-2.963-1.044-8.889-.783-9.778.261-5.038 5.222-21.335 10.966-26.076 2.089-1.186 8.199-7.764-1.827-11.557-12.534-4.741-22.456 14.816-22.195 18.076.261 3.259-1.828 9.778-3.394 9.778-1.567 0-13.825-15.452-14.883-16.89-5.296-7.195-21.926-39.414-24.538-41.192 0 0-4.24-6.749-7.896-4.378-5.47 3.547-4.049 8.388-4.049 8.388 0 1.778 22.644 42.812 22.905 43.701.261.889-3.413 2.687-3.152 2.391.209-.237-21.828-29.841-32.708-44.756 0 0-4.257-6.374-10.262-1.336-6.006 5.037-1.661 11.402-1.661 11.402 11.489 15.014 34.571 45.159 34.988 45.633l-2.614 2.375c-.784.296-27.952-25.995-28.736-26.884-.783-.889-4.86-4.137-6.34-5.019 0 0-5.552-1.443-8.424 4.187-2.872 5.63 1.184 9.363 1.184 9.363l36.571 33.169c.174 1.778.578 5.507-.257 5.033-.836-.474-16.936-11.076-25.553-14.534 0 0-4.038-1.527-5.888 3.246-1.851 4.774 2.86 8.21 2.86 8.21s16.831 11.672 33.02 21.746c23.238 24.595 31.594 18.669 36.033 20.743z"
        fill="#F8DEBC"
      />
      <Path
        d="M304.418 268.952l-49.872-56.597 2.872-3.259 49.872 56.597c.696.592 1.442 1.362 1.947.789 0 0-1.01 1.909-3.653 5 .119-.99-.905-2.233-1.166-2.53z"
        fill="#DD1515"
      />
      <Path
        d="M254.807 212.651c-2.667-3.026-7.886-10.081-9.424-11.826l2.374-2.693 9.922 11.26-2.872 3.259z"
        fill="url(#paint0_linear_1118_4251)"
      />
      <Mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={43}
        width={342}
        height={246}
      >
        <Path
          d="M49.452 84.618c28.616-18.26 68.093-16.62 106.526-23.8 38.433-7.182 75.822-22.775 109.45-15.389 33.629 7.387 63.707 37.958 72.898 72.838 9.399 34.88-1.88 74.274-19.843 106.281-17.964 32.007-42.611 56.423-69.974 62.579-27.362 6.36-57.649-5.95-95.873-5.745-38.015.205-84.176 12.516-113.419-2.462C9.975 263.942-2.349 221.47.367 181.256c2.715-40.215 20.469-78.377 49.085-96.638z"
          fill="#FBF1EA"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M274.925 140.828c2.49-2.258 5.077-3.811 6.112-2.258.518 1.553-.517 2.071-3.624 4.142-1.362.908-3.106 5.177-4.66 4.66-.695-.232-.253-4.343 2.172-6.544z"
          fill="#FFF2E0"
        />
        <Path
          d="M257.104 243.018c-7.859 19.639-23.633 59.086-23.859 59.763 7.376-1.087 10.479 10.489 10.651 11.009.284.091 18.5-44.792 26.526-63.753 0 0 3.591-7.7-3.09-11.252-6.68-3.552-10.228 4.233-10.228 4.233z"
          fill="#E0BB89"
        />
        <Path
          d="M255.868 242.611c-7.862 19.638-23.642 59.083-23.868 59.76 7.376-1.087 9.861 10.533 10.032 11.053.285.091 19.124-44.832 27.153-63.792 0 0 3.592-7.699-3.088-11.252-6.68-3.553-10.229 4.231-10.229 4.231z"
          fill="#F8DEBC"
        />
        <Path
          d="M266.49 249.507c-.619-.608-6.815-2.636-9.087-1.622.344-1.555 1.57-5.11 3.718-6.894 2.684-2.231 6.608.811 7.228 1.419.619.608-1.239 7.705-1.859 7.097z"
          fill="#FFF2E0"
        />
        <Path
          d="M245.635 231.528c-7.859 19.639-23.634 59.087-23.859 59.763 7.375-1.087 10.386 9.898 10.558 10.418.284.091 18.592-44.201 26.618-63.162 0 0 3.591-7.7-3.089-11.252-6.681-3.552-10.228 4.233-10.228 4.233z"
          fill="#E0BB89"
        />
        <Path
          d="M243.887 230.851c-7.859 19.639-23.633 59.086-23.859 59.763 7.295-1.075 10.571 8.888 10.809 9.611l.007.02c.284.092 18.335-43.414 26.361-62.375 0 0 3.591-7.7-3.09-11.252-6.68-3.552-10.228 4.233-10.228 4.233z"
          fill="#F8DEBC"
        />
        <Path
          d="M254.098 238.154c-.619-.608-6.815-2.636-9.087-1.622.345-1.555 1.57-5.11 3.718-6.894 2.685-2.231 6.609.811 7.228 1.419.62.608-1.239 7.705-1.859 7.097z"
          fill="#FFF2E0"
        />
      </G>
      <Path
        d="M279.446 206.438l-.105-8.783c.056-.91.853-1.572 1.767-1.518.914.053 1.577.847 1.521 1.758.019.069-.033.158-.033.158l-1.602 8.568c-.047.386-.48.726-.886.611-.387-.046-.639-.427-.662-.794zM283.54 210.802l11.493-11.666c.639-.694 1.693-.678 2.299-.093.695.635.677 1.685.089 2.29-.051.089-.121.108-.191.126l-12.832 10.308c-.312.233-.769.206-1.002-.105-.056-.209-.08-.576.144-.86zM286.701 217.247l9.712-5.44c.784-.433 1.735-.24 2.132.4.396.64.112 1.538-.653 2.042-.07.018-.191.125-.261.144l-10.459 3.773c-.28.075-.597.011-.672-.268-.144-.26-.06-.506.201-.651z"
        fill="#FEC272"
      />
      <Path
        d="M87.052 246.915c33.78 0 61.164-2.654 61.164-5.928s-27.384-5.928-61.164-5.928-61.164 2.654-61.164 5.928 27.384 5.928 61.164 5.928z"
        fill="#FBE3C4"
      />
      <Rect x={78} y={133.755} width={13} height={8} rx={2} fill="#73B3B7" />
      <Circle cx={85} cy={189.755} r={45} fill="#F2F7F7" />
      <Path
        d="M85.257 150.274v5.514M56.997 162.681l3.9 3.899M111.901 162.681l-3.899 3.899M111.901 216.206l-3.899-3.899M58.379 216.206l3.899-3.899M45.969 190.25h5.514M123.167 190.25h-5.515M85.257 227.471v-5.514"
        stroke="#082727"
        strokeLinecap="round"
      />
      <Path
        d="M45.381 204.072c10.225 23.345 33.631 26.195 41.112 26.498.245.01.272-.337.032-.386-5.79-1.198-21.138-5.5-30.734-18.689-11.7-17.913-11.295-30.644-10.616-35.181.035-.237-.306-.35-.393-.126-1.481 3.769-4.173 13.64.6 27.884z"
        fill="#E4E8E8"
      />
      <Path d="M85.798 161.303a.5.5 0 00-1 0h1zm0 27.878v-27.878h-1v27.878h1z" fill="#082727" />
      <Path
        d="M99.454 198.938a.5.5 0 00.555-.832l-.555.832zm-14.474-9.65l14.474 9.65.555-.832-14.474-9.65-.555.832z"
        fill="#082727"
      />
      <Path
        d="M131.597 173.24c8.685 25.921-5.288 53.976-31.21 62.661-25.922 8.685-53.976-5.288-62.661-31.21-8.685-25.922 5.288-53.976 31.21-62.661 25.921-8.685 53.976 5.288 62.661 31.21zm-85.689 28.709c7.171 21.403 30.335 32.94 51.737 25.769 21.403-7.171 32.94-30.334 25.769-51.737-7.171-21.403-30.334-32.94-51.737-25.769-21.403 7.171-32.94 30.335-25.769 51.737z"
        fill="#45999F"
      />
      <Path
        d="M38.39 207.253c11.429 26.801 35.828 30.671 43.218 31.225.243.018.287-.322.051-.382-5.745-1.464-21.909-6.784-32.358-22.141-12.754-20.719-12.679-35.048-12.136-39.96.026-.239-.314-.327-.39-.099-1.367 4.088-3.835 15.092 1.614 31.357z"
        fill="#12666C"
      />
      <Circle cx={85} cy={188.755} r={3} fill="#168087" />
      <Rect x={75} y={130.755} width={20} height={5} rx={2.5} fill="#168087" />
      <Rect x={78} y={132.755} width={1} height={3} rx={0.5} fill="#12666C" />
      <Rect x={81} y={132.755} width={1} height={3} rx={0.5} fill="#12666C" />
      <Rect x={84} y={132.755} width={1} height={3} rx={0.5} fill="#12666C" />
      <Rect x={87} y={132.755} width={1} height={3} rx={0.5} fill="#12666C" />
      <Rect x={90} y={132.755} width={1} height={3} rx={0.5} fill="#12666C" />
      <Path
        d="M59.84 132.255c3.999-6.723 11.955-8.851 15.433-9.075M61.501 122.5c1.972-3.315 5.894-4.365 7.61-4.475"
        stroke="#FEC272"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <Path
        d="M132.851 204.383c6.759 0 11.3 6.467 11.3 12.501 0 12.218-18.848 22.222-19.189 22.222-.341 0-19.189-10.004-19.189-22.222 0-6.034 4.542-12.501 11.3-12.501 3.881 0 6.418 1.975 7.889 3.711 1.471-1.736 4.009-3.711 7.889-3.711z"
        fill="#DD1515"
        stroke="#DD1515"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M145.068 217.175c.001-8.224-6.853-15.991-15.533-13.25 4.569.913 10.508 5.482 10.965 13.25 0 12.218-15.844 22.843-15.535 22.843 1.372 0 20.561-11.422 20.103-22.843z"
        fill="#BC1010"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1118_4251"
          x1={246.321}
          y1={199.761}
          x2={257.492}
          y2={209.605}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.0520833} stopColor="#DD1515" stopOpacity={0} />
          <Stop offset={1} stopColor="#DD1515" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default MeasurePulse;
