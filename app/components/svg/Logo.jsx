import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const Logo = (props) => (
  <Svg
    width={48}
    height={50}
    preserveAspectRatio="xMinYMin slice"
    viewBox="0 0 48 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_393_2376)">
      <Path
        d="M26.713 0H6.678C2.99 0 0 2.975 0 6.646v19.936c0 3.67 2.99 6.645 6.678 6.645h20.035c3.688 0 6.678-2.975 6.678-6.645V6.645c0-3.67-2.99-6.645-6.678-6.645z"
        fill="#B1D4DC"
      />
      <Path
        d="M41.321 15.783H21.287c-3.689 0-6.679 2.976-6.679 6.646v19.936c0 3.67 2.99 6.646 6.679 6.646H41.32c3.689 0 6.679-2.976 6.679-6.646V22.43c0-3.67-2.99-6.646-6.679-6.646z"
        fill="#1D4949"
      />
      <Path d="M24.626 33.227L24 32.812h.835l-.209.415z" fill="#FAFEFF" />
      <Path d="M14.608 33.228v-9.553l10.018 9.553H14.608z" fill="#B1D4DC" />
      <Path d="M14.608 42.78l10.018-9.553H14.608v9.553z" fill="#0F3030" />
      <Path d="M33.391 6.23l-10.226 8.93h10.226V6.23z" fill="#87B1BA" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.618 13.46c-2.504-2.912-6.679-3.696-9.815-1.029-3.137 2.667-3.579 7.126-1.116 10.28 2.049 2.623 8.247 8.154 10.278 9.944.227.2.341.3.474.34a.636.636 0 00.358 0c.132-.04.246-.14.473-.34 2.032-1.79 8.23-7.321 10.278-9.944 2.463-3.154 2.075-7.64-1.115-10.28-3.19-2.639-7.312-1.883-9.815 1.03z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_393_2376">
        <Path fill="#fff" d="M0 0H48V49.0105H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Logo;
