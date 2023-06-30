import { Path, Svg } from 'react-native-svg';

export const Icon = ({ name, size, color = '#000', onPress }) => {
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

    default:
      break;
  }

  return (
    <Svg
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
