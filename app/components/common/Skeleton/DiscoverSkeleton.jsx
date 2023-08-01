import * as React from 'react';
import Svg, { Defs, G, Path, Rect } from 'react-native-svg';

function DiscoverSkeleton({ width }, props) {
  return (
    <Svg
      width={width}
      height={262}
      viewBox="0 0 274 262"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_1542_10644)">
        <Path
          d="M16 22a8 8 0 018-8h226a8 8 0 018 8v214a8 8 0 01-8 8H24a8 8 0 01-8-8V22z"
          fill="#F7F9F9"
        />
        <Path
          d="M24 14.5h226a7.5 7.5 0 017.5 7.5v214a7.5 7.5 0 01-7.5 7.5H24a7.5 7.5 0 01-7.5-7.5V22a7.5 7.5 0 017.5-7.5z"
          stroke="#F2F7F7"
        />
      </G>
      <Rect x={32} y={30} width={32} height={32} rx={16} fill="#E7ECEB" />
      <Rect x={76} y={39} width={98} height={16} rx={8} fill="#E2E8E7" />
      <Rect x={32} y={212} width={98} height={16} rx={8} fill="#E2E8E7" />
      <Rect x={32} y={82} width={210} height={16} rx={8} fill="#DDE3E2" fillOpacity={0.615686} />
      <Rect x={32} y={106} width={210} height={16} rx={8} fill="#DDE3E2" fillOpacity={0.615686} />
      <Rect x={32} y={130} width={129} height={16} rx={8} fill="#DDE3E2" fillOpacity={0.615686} />
      <Defs />
    </Svg>
  );
}

export default DiscoverSkeleton;
