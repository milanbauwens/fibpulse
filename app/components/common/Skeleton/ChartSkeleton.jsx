import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const ChartSkeleton = () => {
  return (
    <Svg
      className="shadow-card-md"
      width="100%"
      height={224}
      viewBox="0 0 318 224"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect x={0.5} y={0.5} width={317} height={223} rx={7.5} fill="#F7F9F9" stroke="#F2F7F7" />
      <Path
        d="M89 91c17.25 0 40.837 29.5 58.087 29.5S175.25 83 192.5 83c17.25 0 40.133 66 57.383 66S278.75 103 296 103"
        stroke="#E7ECEB"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x={13} y={32} width={46} height={12} rx={6} fill="#DDE3E2" fillOpacity={0.615686} />
      <Rect x={13} y={68} width={32} height={12} rx={6} fill="#DDE3E2" fillOpacity={0.615686} />
      <Rect x={13} y={179} width={46} height={12} rx={6} fill="#DDE3E2" fillOpacity={0.615686} />
      <Rect x={13} y={143} width={32} height={12} rx={6} fill="#DDE3E2" fillOpacity={0.615686} />
      <Rect x={13} y={104} width={46} height={12} rx={6} fill="#DDE3E2" fillOpacity={0.615686} />
    </Svg>
  );
};

export default ChartSkeleton;
