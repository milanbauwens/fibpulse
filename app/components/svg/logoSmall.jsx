import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function LogoSmall(props) {
  return (
    <Svg
      width={32}
      height={33}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_522_1804)">
        <Path
          d="M17.809 0H4.452C1.993 0 0 1.984 0 4.43v13.291c0 2.447 1.993 4.43 4.452 4.43H17.81c2.459 0 4.452-1.983 4.452-4.43V4.431C22.26 1.983 20.268 0 17.809 0z"
          fill="#B1D4DC"
        />
        <Path
          d="M27.547 10.522H14.19c-2.458 0-4.452 1.983-4.452 4.43v13.291c0 2.447 1.994 4.43 4.453 4.43h13.356c2.459 0 4.452-1.983 4.452-4.43v-13.29c0-2.447-1.993-4.431-4.452-4.431z"
          fill="#1D4949"
        />
        <Path d="M16.417 22.151L16 21.875h.556l-.139.276z" fill="#FAFEFF" />
        <Path d="M9.738 22.152v-6.369l6.678 6.369H9.738z" fill="#B1D4DC" />
        <Path d="M9.738 28.52l6.678-6.368H9.738v6.368z" fill="#0F3030" />
        <Path d="M22.26 4.153l-6.817 5.954h6.818V4.153z" fill="#87B1BA" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.412 8.973C14.743 7.032 11.96 6.51 9.87 8.287s-2.386 4.751-.743 6.854c1.365 1.748 5.497 5.436 6.851 6.63.152.133.228.2.316.226a.423.423 0 00.239 0c.088-.027.164-.093.315-.227 1.355-1.193 5.487-4.88 6.852-6.63 1.642-2.102 1.384-5.093-.743-6.853-2.127-1.759-4.875-1.255-6.544.686z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_522_1804">
          <Path fill="#fff" d="M0 0H32V32.6737H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default LogoSmall;
