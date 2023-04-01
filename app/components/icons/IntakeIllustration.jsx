import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function IntakeIllustration(props) {
  return (
    <Svg
      width={338}
      height={176}
      viewBox="0 0 338 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.843 147.631c-17.415-43.413 1.064-59.295 25.69-85.69C85.428 21.219 116.63-7.461 196.429 1.718c65.893 7.584 109.085 43.093 123 60.223 22.127 27.224 22.965 73.694 9.639 89.581-22.364 26.665-109.02.621-159.139-.304-50.119-.924-128.994 32.378-163.085-3.587z"
        fill="#FBF1EA"
      />
      <Path
        d="M40.074 51.622c9.25-7.18 21.5-5.793 26.469-4.202M123.307 95.274c5.796 10.175 2.684 22.104.404 26.797M264.211 166.942c-11.7-.49-20.157-9.46-22.924-13.884M296.502 53.669c11.703-.392 20.812 7.916 23.904 12.118"
        stroke="#FEC272"
        strokeWidth={8}
        strokeLinecap="round"
      />
      <Circle cx={59} cy={110.218} r={38} fill="#87B1BA" />
      <Circle cx={59.0723} cy={110.218} r={34} fill="#366" />
      <Circle cx={282.928} cy={110.218} r={38} fill="#87B1BA" />
      <Circle cx={283} cy={110.218} r={34} fill="#366" />
      <Circle cx={169} cy={51.2183} r={38} fill="#87B1BA" />
      <Circle cx={169.072} cy={51.2183} r={34} fill="#366" />
      <Path
        d="M230.954 74.585l-6.925-5.848 58.05-65.895c3.829-1.042 7.601 4.882 6.478 5.908l-57.603 65.835z"
        fill="#345961"
      />
      <Path
        d="M229.917 75.72l-6.925-5.848 58.05-65.895c3.829-1.042 7.601 4.882 6.478 5.908L229.917 75.72z"
        fill="#B1D4DC"
      />
      <Path
        d="M229.859 75.872l-11.317 5.92 4.453-11.91c3.988-1.234 8.291 3.654 6.864 5.99z"
        fill="#87B1BA"
      />
      <Path
        d="M221.473 80.27l-2.994 1.664 1.266-3.333c.834.021 1.586 1.019 1.728 1.67z"
        fill="#1B3C43"
      />
      <Path
        d="M175 36.418c0-1.12 0-1.68-.218-2.108a2.003 2.003 0 00-.874-.874c-.428-.218-.988-.218-2.108-.218h-5.6c-1.12 0-1.68 0-2.108.218a2.003 2.003 0 00-.874.874c-.218.428-.218.988-.218 2.108v5.6c0 1.12 0 1.68-.218 2.108a2.003 2.003 0 01-.874.874c-.428.218-.988.218-2.108.218h-5.6c-1.12 0-1.68 0-2.108.218a2.003 2.003 0 00-.874.874c-.218.428-.218.988-.218 2.108v5.6c0 1.12 0 1.68.218 2.108.192.377.498.683.874.874.428.218.988.218 2.108.218h5.6c1.12 0 1.68 0 2.108.218.376.192.682.498.874.874.218.428.218.988.218 2.108v5.6c0 1.12 0 1.68.218 2.108.192.377.498.682.874.874.428.218.988.218 2.108.218h5.6c1.12 0 1.68 0 2.108-.218.376-.192.682-.497.874-.874.218-.428.218-.988.218-2.108v-5.6c0-1.12 0-1.68.218-2.108.192-.376.498-.682.874-.874.428-.218.988-.218 2.108-.218h5.6c1.12 0 1.68 0 2.108-.218.376-.191.682-.497.874-.874.218-.428.218-.988.218-2.108v-5.6c0-1.12 0-1.68-.218-2.108a2.003 2.003 0 00-.874-.874c-.428-.218-.988-.218-2.108-.218h-5.6c-1.12 0-1.68 0-2.108-.218a2.003 2.003 0 01-.874-.874c-.218-.428-.218-.988-.218-2.108v-5.6z"
        fill="#fff"
      />
      <Path
        d="M303 100.218l-15.737 15.738c-.792.792-1.188 1.188-1.645 1.336-.402.13-.834.13-1.236 0-.457-.148-.853-.544-1.645-1.336l-5.474-5.475c-.792-.792-1.188-1.188-1.645-1.336a1.993 1.993 0 00-1.236 0c-.457.148-.853.544-1.645 1.336L263 120.218m40-20h-14m14 0v14M79 110.218h-8l-6 18-12-36-6 18h-8"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M177.565 157.425a5.459 5.459 0 01-3.422-1.22 5.495 5.495 0 01-1.907-3.103c-1.013-4.586-1.656-8.087-.762-11.362 1.073-3.884 3.905-6.159 6.955-8.333 2.057-1.463 3.484-3.685 3.643-5.653.1-1.307-.357-2.408-1.44-3.458-3.2-3.116-8.379 1.732-8.611 1.941 0 0-4.352 3.698-7.584-.179-3.233-3.877 0-7.721 0-7.721a25.132 25.132 0 017.094-4.656c6.223-2.66 12.151-1.662 16.695 2.744 3.398 3.305 5.077 7.631 4.729 12.18-.401 5.247-3.471 10.398-8.217 13.77-2.229 1.586-2.649 2.148-2.752 2.327-.255.812.586 4.613.904 6.046a5.52 5.52 0 01-1.073 4.616 5.477 5.477 0 01-4.252 2.061zM180.197 175.916c3.499 0 6.336-2.848 6.336-6.361s-2.837-6.361-6.336-6.361-6.336 2.848-6.336 6.361 2.837 6.361 6.336 6.361z"
        fill="#B1D4DC"
      />
    </Svg>
  );
}

export default IntakeIllustration;
