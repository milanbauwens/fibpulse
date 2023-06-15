import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export function HeartWarning(props) {
  return (
    <Svg
      width={96}
      height={96}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={48} cy={48} r={48} fill="#F2F7F7" />
      <Path
        d="M46.522 29.188c8.347 0 13.955 7.905 13.955 15.28 0 14.934-23.276 27.163-23.697 27.163-.422 0-23.698-12.23-23.698-27.164 0-7.374 5.608-15.28 13.955-15.28 4.792 0 7.926 2.415 9.742 4.537 1.817-2.122 4.95-4.536 9.743-4.536z"
        fill="#15615f"
        stroke="#15615f"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.867 48.71h12.705l4.772-12.229 9.205 20.964 6.136-12.928 3.75 8.735 2.045-4.542h10.908"
        stroke="#F2F7F7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M66.88 68.38a3.472 3.472 0 003.479-3.465 3.472 3.472 0 00-3.48-3.465 3.472 3.472 0 00-3.479 3.465 3.472 3.472 0 003.48 3.466zM70.166 59.634l-1.96-.77a1.755 1.755 0 01-1.077-2.035l5.44-23.267a1.772 1.772 0 012.292-1.265l7.566 2.503a1.761 1.761 0 011.021 2.475L72.403 58.782a1.776 1.776 0 01-2.237.852z"
        fill="#FEC272"
      />
    </Svg>
  );
}
