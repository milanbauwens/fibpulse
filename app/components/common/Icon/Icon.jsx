import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';

import colors from '../../../theme/colors';

export const Icon = ({ name, size, color = colors.turquoise[700], onPress, props }) => {
  let icon;

  switch (name) {
    case 'home':
      icon = (
        <Path
          d="M12.982 2.764c-.351-.273-.527-.41-.72-.463a1 1 0 00-.523 0c-.194.053-.37.19-.721.463L4.235 8.039c-.453.353-.68.529-.843.75a2 2 0 00-.318.65C3 9.703 3 9.99 3 10.565V17.8c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C4.52 21 5.08 21 6.2 21h2c.28 0 .42 0 .527-.055a.5.5 0 00.218-.218C9 20.62 9 20.48 9 20.2v-6.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437c.214-.11.494-.11 1.054-.11h2.8c.56 0 .84 0 1.054.11a1 1 0 01.437.437C15 12.76 15 13.04 15 13.6v6.6c0 .28 0 .42.055.527a.5.5 0 00.218.218c.107.055.247.055.527.055h2c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C21 19.48 21 18.92 21 17.8v-7.235c0-.575 0-.862-.074-1.126a2.002 2.002 0 00-.318-.65c-.163-.221-.39-.397-.843-.75l-6.783-5.275z"
          fill="#A2CCCF"
          stroke="#168087"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'play-outline':
      icon = (
        <Path
          d="M5.576 5.467c0-.971 0-1.457.203-1.724a1 1 0 01.738-.395c.335-.02.739.25 1.547.788l10.515 7.01c.668.445 1.002.668 1.118.948a1 1 0 010 .767c-.116.28-.45.503-1.118.948l-10.515 7.01c-.808.539-1.212.808-1.547.788a1 1 0 01-.738-.395c-.203-.267-.203-.753-.203-1.724V5.468z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'loop':
      icon = (
        <Path
          d="M9.123 20.245A8.5 8.5 0 0019.938 8.228l-.25-.433M5.213 16.728A8.5 8.5 0 0116.03 4.711M3.07 16.81l2.732.733.732-2.732m12.086-4.668l.732-2.732 2.732.732"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'pause':
      icon = (
        <Path
          d="M7 20V4m10 16V4"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'compass-outline':
      icon = (
        <>
          <Path
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M14.722 8.266c.489-.163.733-.244.895-.186a.5.5 0 01.303.303c.058.162-.023.406-.186.895l-1.488 4.463c-.046.139-.07.208-.109.266a.5.5 0 01-.13.13c-.058.04-.127.063-.266.11l-4.463 1.487c-.489.163-.733.244-.895.186a.5.5 0 01-.303-.303c-.058-.162.023-.406.186-.895l1.488-4.463c.046-.139.07-.208.109-.266a.5.5 0 01.13-.13c.058-.04.127-.063.266-.11l4.463-1.487z"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
      break;

    case 'compass':
      icon = (
        <>
          <Path
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            fill="#A2CCCF"
          />
          <Path
            d="M14.722 8.266c.489-.163.733-.244.895-.186a.5.5 0 01.303.303c.058.162-.023.406-.186.895l-1.488 4.463c-.046.139-.07.208-.109.266a.5.5 0 01-.13.13c-.058.04-.127.063-.266.11l-4.463 1.487c-.489.163-.733.244-.895.186a.5.5 0 01-.303-.303c-.058-.162.023-.406.186-.895l1.488-4.463c.046-.139.07-.208.109-.266a.5.5 0 01.13-.13c.058-.04.127-.063.266-.11l4.463-1.487z"
            fill="#A2CCCF"
          />
          <Path
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            stroke="#168087"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M14.722 8.266c.489-.163.733-.244.895-.186a.5.5 0 01.303.303c.058.162-.023.406-.186.895l-1.488 4.463c-.046.139-.07.208-.109.266a.5.5 0 01-.13.13c-.058.04-.127.063-.266.11l-4.463 1.487c-.489.163-.733.244-.895.186a.5.5 0 01-.303-.303c-.058-.162.023-.406.186-.895l1.488-4.463c.046-.139.07-.208.109-.266a.5.5 0 01.13-.13c.058-.04.127-.063.266-.11l4.463-1.487z"
            stroke="#168087"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M14.801 8.186c.489-.162.733-.244.895-.186a.5.5 0 01.303.303c.058.162-.023.407-.186.895l-1.488 4.463c-.046.139-.07.209-.109.266a.5.5 0 01-.13.13c-.058.04-.127.063-.267.11l-4.462 1.487c-.489.163-.733.245-.895.187a.5.5 0 01-.303-.303c-.058-.163.023-.407.186-.896l1.487-4.462c.047-.14.07-.209.11-.267a.5.5 0 01.13-.13c.058-.04.127-.063.267-.11L14.8 8.187z"
            fill="#fff"
            stroke="#168087"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
      break;

    case 'calendar-outline':
      icon = (
        <Path
          d="M21 10H3m13-8v4M8 2v4m-.2 16h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 22 6.12 22 7.8 22z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'calendar-heart-outline':
      icon = (
        <Path
          d="M21 10H3m18 1.5V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 22 6.12 22 7.8 22h4.7M16 2v4M8 2v4m9.498 9.712c-.7-.78-1.867-.989-2.744-.275-.877.713-1 1.906-.311 2.75.688.844 3.055 2.813 3.055 2.813s2.366-1.97 3.055-2.813c.688-.844.58-2.044-.312-2.75-.892-.706-2.044-.504-2.743.275z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'calendar-check-outline':
      icon = (
        <Path
          d="M21 10H3m18 2.5V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 22 6.12 22 7.8 22H12m4-20v4M8 2v4m6.5 13l2 2 4.5-4.5"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'calendar-heart':
      icon = (
        <>
          <Path fill="#A2CCCF" d="M4 5H20V10H4z" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.498 15.712c-.7-.78-1.867-.989-2.744-.275-.877.713-1 1.906-.311 2.75.688.844 3.055 2.813 3.055 2.813s2.366-1.97 3.055-2.813c.688-.844.58-2.044-.312-2.75-.892-.706-2.044-.504-2.743.275z"
            fill="#A2CCCF"
          />
          <Path
            d="M21 10H3m18 1.5V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 22 6.12 22 7.8 22h4.7M16 2v4M8 2v4m9.498 9.712c-.7-.78-1.867-.989-2.744-.275-.877.713-1 1.906-.311 2.75.688.844 3.055 2.813 3.055 2.813s2.366-1.97 3.055-2.813c.688-.844.58-2.044-.312-2.75-.892-.706-2.044-.504-2.743.275z"
            stroke="#168087"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
      break;

    case 'chevron-right':
      icon = (
        <Path
          d="M9 18l6-6-6-6"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'chevron-left':
      icon = (
        <Path
          d="M15 6l-6 6 6 6"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'chevron-skip-back':
      icon = (
        <Path
          d="M17.25 5v14m-10.5-1l4.938-4.75c.534-.428.801-.641.898-.9a1 1 0 000-.7c-.097-.259-.364-.472-.898-.9L6.75 6"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'eye-outline':
      icon = (
        <>
          <Path
            d="M2.42 12.713c-.136-.215-.204-.323-.242-.49a1.173 1.173 0 010-.446c.038-.167.106-.274.242-.49C3.546 9.505 6.895 5 12 5s8.455 4.505 9.58 6.287c.137.215.205.323.243.49.029.125.029.322 0 .446-.038.167-.106.274-.242.49C20.455 14.495 17.105 19 12 19c-5.106 0-8.455-4.505-9.58-6.287z"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M12 15a3 3 0 100-6 3 3 0 000 6z"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
      break;

    case 'eye-off-outline':
      icon = (
        <Path
          d="M10.743 5.092C11.149 5.032 11.569 5 12 5c5.105 0 8.455 4.505 9.58 6.287.137.215.205.323.243.49.029.125.029.322 0 .447-.038.166-.107.274-.244.492-.3.474-.757 1.141-1.363 1.865M6.724 6.715c-2.162 1.467-3.63 3.504-4.303 4.57-.137.217-.205.325-.243.492a1.173 1.173 0 000 .446c.038.167.106.274.242.49C3.546 14.495 6.895 19 12 19c2.059 0 3.832-.732 5.289-1.723M3 3l18 18M9.88 9.879a3 3 0 104.243 4.243"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'mail-outline':
      icon = (
        <Path
          d="M21.5 18l-6.643-6m-5.714 0L2.5 18M2 7l8.165 5.715c.661.463.992.695 1.351.784a2 2 0 00.968 0c.36-.09.69-.32 1.351-.784L22 7M6.8 20h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C22 17.72 22 16.88 22 15.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C19.72 4 18.88 4 17.2 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C2 6.28 2 7.12 2 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C4.28 20 5.12 20 6.8 20z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'kayak-outline':
      icon = (
        <>
          <G
            clipPath="url(#clip0_1302_3007)"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M6.414 6.414a2 2 0 000-2.828L5 2.172 2.172 5l1.414 1.414a2 2 0 002.828 0zM17.586 17.586a2 2 0 000 2.828L19 21.828 21.828 19l-1.414-1.414a2 2 0 00-2.828 0zM6.5 6.5l11 11M22 2.5C12.017 5.101 4.373 10.452 2 22c9.983-2.601 17.627-7.952 20-19.5zM6.5 12.5l5 5M12.5 6.5l5 5" />
          </G>
          <Defs>
            <ClipPath id="clip0_1302_3007">
              <Path fill="#fff" d="M0 0H24V24H0z" />
            </ClipPath>
          </Defs>
        </>
      );
      break;

    case 'chair-outline':
      icon = (
        <>
          <G
            clipPath="url(#clip0_1302_3010)"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M5 11a2 2 0 012 2v2h10v-2a2 2 0 014 0v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2z" />
            <Path d="M5 11V6a3 3 0 013-3h8a3 3 0 013 3v5M6 19v2M18 19v2" />
          </G>
          <Defs>
            <ClipPath id="clip0_1302_3010">
              <Path fill="#fff" d="M0 0H24V24H0z" />
            </ClipPath>
          </Defs>
        </>
      );
      break;

    case 'walk-outline':
      icon = (
        <>
          <G
            clipPath="url(#clip0_1302_3006)"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M12 4a1 1 0 102 0 1 1 0 00-2 0zM7 21l3-4M16 21l-2-4-3-3 1-6" />
            <Path d="M6 12l2-3 4-1 3 3 3 1" />
          </G>
          <Defs>
            <ClipPath id="clip0_1302_3006">
              <Path fill="#fff" d="M0 0H24V24H0z" />
            </ClipPath>
          </Defs>
        </>
      );
      break;

    case 'cactus-outline':
      icon = (
        <>
          <G
            clipPath="url(#clip0_1302_3009)"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M6 9v1a3 3 0 003 3h1M18 8v5a3 3 0 01-3 3h-1M10 21V5a2 2 0 114 0v16M7 21h10" />
          </G>
          <Defs>
            <ClipPath id="clip0_1302_3009">
              <Path fill="#fff" d="M0 0H24V24H0z" />
            </ClipPath>
          </Defs>
        </>
      );
      break;

    case 'edit':
      icon = (
        <>
          <Path
            d="M20 6.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C17.72 2 16.88 2 15.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C6.28 22 7.12 22 8.8 22M14 11H8m2 4H8m8-8H8"
            stroke="#168087"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M12.196 19.315c.024-.215.036-.323.069-.424.029-.09.07-.174.121-.253.059-.088.135-.165.289-.319l6.887-6.887a1.475 1.475 0 012.086 2.086l-6.887 6.888c-.154.153-.23.23-.319.288a1.045 1.045 0 01-.253.122c-.1.032-.208.044-.424.068L12 21.08l.196-1.765z"
            fill="#A2CCCF"
          />
          <Path
            d="M20.084 15.083l-2.086-2.086M12 21.08l1.765-.196c.216-.024.323-.036.424-.068.09-.03.175-.07.253-.122.089-.058.165-.135.319-.288l6.887-6.888a1.475 1.475 0 10-2.086-2.086l-6.887 6.888c-.154.153-.23.23-.289.318a1.04 1.04 0 00-.121.253c-.033.1-.045.209-.069.424L12 21.08z"
            stroke="#168087"
            strokeWidth={1.56458}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
      break;

    case 'night-outline':
      icon = (
        <>
          <G
            clipPath="url(#clip0_1302_3008)"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M12 3h.393a7.5 7.5 0 007.92 12.446A9 9 0 1112 2.992V3zM17 4a2 2 0 002 2 2 2 0 00-2 2 2 2 0 00-2-2 2 2 0 002-2zM19 11h2m-1-1v2" />
          </G>
          <Defs>
            <ClipPath id="clip0_1302_3008">
              <Path fill="#fff" d="M0 0H24V24H0z" />
            </ClipPath>
          </Defs>
        </>
      );
      break;

    case 'dots-horizontal':
      icon = (
        <>
          <G
            clipPath="url(#clip0_1303_2986)"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M4 12a1 1 0 102 0 1 1 0 00-2 0zM11 12a1 1 0 102 0 1 1 0 00-2 0zM18 12a1 1 0 102 0 1 1 0 00-2 0z" />
          </G>
          <Defs>
            <ClipPath id="clip0_1303_2986">
              <Path fill="#fff" d="M0 0H24V24H0z" />
            </ClipPath>
          </Defs>
        </>
      );
      break;

    case 'trend-down':
      icon = (
        <Path
          d="M22 17l-7.869-7.869c-.396-.396-.594-.594-.822-.668a1 1 0 00-.618 0c-.228.074-.426.272-.822.668L9.13 11.87c-.396.396-.594.594-.822.668a1 1 0 01-.618 0c-.228-.074-.426-.272-.822-.668L2 7m20 10h-7m7 0v-7"
          stroke="#1B3C43"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'log-out':
      icon = (
        <Path
          d="M16 17l5-5m0 0l-5-5m5 5H9m0-9H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 21 6.12 21 7.8 21H9"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'close':
      icon = (
        <Path
          d="M18 6L6 18M6 6l12 12"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'file-heart-outline':
      icon = (
        <Path
          d="M20 10V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C17.72 2 16.88 2 15.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C6.28 22 7.12 22 8.8 22H12m.5-11H8m1 4H8m8-8H8m8.997 7.83c-.8-.908-2.133-1.153-3.135-.32-1.002.832-1.143 2.223-.356 3.208.787.984 3.491 3.282 3.491 3.282s2.705-2.298 3.492-3.282a2.256 2.256 0 00-.356-3.209c-1.02-.823-2.336-.587-3.136.322z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'translate':
      icon = (
        <Path
          d="M12.913 17h7.174m-7.174 0L11 21m1.913-4l2.865-5.991c.231-.483.347-.724.505-.8a.5.5 0 01.434 0c.158.076.274.317.505.8L20.087 17m0 0L22 21M2 5h6m0 0h3.5M8 5V3m3.5 2H14m-2.5 0c-.496 2.957-1.647 5.636-3.334 7.884M10 14a9.396 9.396 0 01-1.834-1.116m0 0C6.813 11.848 5.603 10.427 5 9m3.166 3.884A17.295 17.295 0 012 18"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'trash':
      icon = (
        <>
          <Rect x={8} y={2} width={8} height={4} rx={1} fill="#FED7D7" />
          <Path
            d="M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
            stroke="#DD1515"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
      break;

    case 'medical-cross-outline':
      icon = (
        <Path
          d="M15 4.6c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C14.24 3 13.96 3 13.4 3h-2.8c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437C9 3.76 9 4.04 9 4.6v2.8c0 .56 0 .84-.109 1.054a1 1 0 01-.437.437C8.24 9 7.96 9 7.4 9H4.6c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437C3 9.76 3 10.04 3 10.6v2.8c0 .56 0 .84.109 1.054a1 1 0 00.437.437C3.76 15 4.04 15 4.6 15h2.8c.56 0 .84 0 1.054.109a1 1 0 01.437.437C9 15.76 9 16.04 9 16.6v2.8c0 .56 0 .84.109 1.054a1 1 0 00.437.437C9.76 21 10.04 21 10.6 21h2.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C15 20.24 15 19.96 15 19.4v-2.8c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C15.76 15 16.04 15 16.6 15h2.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C21 14.24 21 13.96 21 13.4v-2.8c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C20.24 9 19.96 9 19.4 9h-2.8c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C15 8.24 15 7.96 15 7.4V4.6z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'announcement-outline':
      icon = (
        <Path
          d="M18.5 16c1.933 0 3.5-2.91 3.5-6.5S20.433 3 18.5 3m0 13c-1.933 0-3.5-2.91-3.5-6.5S16.567 3 18.5 3m0 13L5.444 13.626c-.928-.168-1.392-.253-1.767-.437a3 3 0 01-1.563-1.873C2 10.914 2 10.443 2 9.5c0-.943 0-1.414.114-1.816a3 3 0 011.563-1.873c.375-.184.839-.268 1.767-.437L18.5 3M5 14l.394 5.514c.037.524.056.785.17.984a1 1 0 00.432.402c.206.1.469.1.994.1h1.782c.6 0 .9 0 1.123-.12a1 1 0 00.44-.474c.101-.231.079-.53.032-1.129L10 14.5"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'file-check-outline':
      icon = (
        <Path
          d="M20 12.5V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C17.72 2 16.88 2 15.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C6.28 22 7.12 22 8.8 22H12m2-11H8m2 4H8m8-8H8m6.5 12l2 2 4.5-4.5"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'lock-unlocked-outline':
      icon = (
        <Path
          d="M7 10V8a5 5 0 019.584-2M12 14.5v2M8.8 21h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C20 18.72 20 17.88 20 16.2v-1.4c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C17.72 10 16.88 10 15.2 10H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C4 12.28 4 13.12 4 14.8v1.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C6.28 21 7.12 21 8.8 21z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'bell-outline':
      icon = (
        <Path
          d="M15 19a3 3 0 11-6 0m4.796-12.761a2.5 2.5 0 10-3.593 0M18 11.2c0-1.38-.632-2.702-1.758-3.677C15.117 6.548 13.591 6 12 6c-1.592 0-3.118.548-4.243 1.523C6.632 8.498 6 9.821 6 11.2c0 2.282-.566 3.95-1.272 5.145-.805 1.36-1.207 2.041-1.191 2.204.018.186.051.244.202.355.132.096.794.096 2.119.096h12.284c1.324 0 1.987 0 2.118-.096.151-.11.185-.17.203-.355.016-.163-.387-.843-1.191-2.204C18.566 15.15 18 13.482 18 11.2z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'home-outline':
      icon = (
        <Path
          d="M12.982 2.764c-.351-.273-.527-.41-.72-.463a1 1 0 00-.523 0c-.194.053-.37.19-.721.463L4.235 8.039c-.453.353-.68.529-.843.75a2 2 0 00-.318.65C3 9.703 3 9.99 3 10.565V17.8c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C4.52 21 5.08 21 6.2 21h2c.28 0 .42 0 .527-.055a.5.5 0 00.218-.218C9 20.62 9 20.48 9 20.2v-6.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437c.214-.11.494-.11 1.054-.11h2.8c.56 0 .84 0 1.054.11a1 1 0 01.437.437C15 12.76 15 13.04 15 13.6v6.6c0 .28 0 .42.055.527a.5.5 0 00.218.218c.107.055.247.055.527.055h2c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C21 19.48 21 18.92 21 17.8v-7.235c0-.575 0-.862-.074-1.126a2.002 2.002 0 00-.318-.65c-.163-.221-.39-.397-.843-.75l-6.783-5.275z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'user':
      icon = (
        <>
          <Path
            d="M12 15c-3.17 0-5.99 1.53-7.784 3.906-.386.511-.58.767-.573 1.112.005.267.172.604.382.769.272.213.649.213 1.402.213h13.146c.753 0 1.13 0 1.401-.213.21-.165.378-.502.383-.769.006-.345-.187-.6-.573-1.112C17.989 16.531 15.17 15 12 15zM12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
            fill="#A2CCCF"
          />
          <Path
            d="M12 15c-3.17 0-5.99 1.53-7.784 3.906-.386.511-.58.767-.573 1.112.005.267.172.604.382.769.272.213.649.213 1.402.213h13.146c.753 0 1.13 0 1.401-.213.21-.165.378-.502.383-.769.006-.345-.187-.6-.573-1.112C17.989 16.531 15.17 15 12 15zM12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
            stroke="#168087"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
      break;

    case 'user-outline':
      icon = (
        <Path
          d="M12 15c-3.17 0-5.99 1.53-7.784 3.906-.386.511-.58.767-.573 1.112.005.267.172.604.382.769.272.213.649.213 1.402.213h13.146c.753 0 1.13 0 1.401-.213.21-.165.378-.502.383-.769.006-.345-.187-.6-.573-1.112C17.989 16.531 15.17 15 12 15zM12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'plus':
      icon = (
        <Path
          d="M12 5v14m-7-7h14"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'arrow-left':
      icon = (
        <Path
          d="M20 12H4m0 0l6 6m-6-6l6-6"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'arrow-right':
      icon = (
        <Path
          d="M4 12h16m0 0l-6-6m6 6l-6 6"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'alert-circle-outline':
      icon = (
        <Path
          d="M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'alert-circle':
      icon = (
        <Path
          d="M12.698 2.506c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 11c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"
          fill={color}
        />
      );
      break;

    case 'clock-outline':
      icon = (
        <Path
          d="M12 6v6l4 2m6-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'activity-heart-outline':
      icon = (
        <Path
          d="M15.5 11.5h-1l-1.5 3-2-6-1.5 3h-1m3.493-6.364c-2-2.338-5.333-2.966-7.838-.826s-2.858 5.719-.89 8.25c1.485 1.912 5.706 5.751 7.683 7.515.363.324.545.486.758.55.184.055.39.055.575 0 .212-.064.394-.226.757-.55 1.977-1.764 6.198-5.603 7.684-7.515 1.967-2.531 1.658-6.132-.89-8.25-2.549-2.118-5.84-1.512-7.839.826z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    case 'zap-outline':
      icon = (
        <Path
          d="M13 2L4.093 12.688c-.348.418-.523.628-.525.804a.5.5 0 00.185.397c.138.111.41.111.955.111H12l-1 8 8.907-10.688c.348-.418.523-.628.525-.804a.5.5 0 00-.185-.397c-.138-.111-.41-.111-.955-.111H12l1-8z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
      break;

    default:
      break;
  }

  return (
    <Svg
      {...props}
      onPress={onPress}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icon}
    </Svg>
  );
};
