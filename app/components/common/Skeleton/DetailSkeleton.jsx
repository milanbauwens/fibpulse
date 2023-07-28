import * as React from 'react';
import Svg, { Defs, G, Rect } from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: filter */

function DetailSkeleton(props) {
  return (
    <Svg
      className="mt-8"
      width={382}
      height={575}
      viewBox="0 0 382 575"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={16} y={307} width={68} height={12} rx={6} fill="#D0DAD8" fillOpacity={0.615686} />
      <G filter="url(#filter0_d_1444_3931)">
        <Rect x={16.5} y={55.5} width={164} height={131} rx={7.5} fill="#F7F9F9" />
        <Rect x={32} y={71} width={97} height={24} rx={8} fill="#DDE3E2" fillOpacity={0.615686} />
        <Rect x={32} y={135} width={83} height={16} rx={8} fill="#DDE3E2" fillOpacity={0.615686} />
        <Rect x={32} y={155} width={55} height={16} rx={8} fill="#DDE3E2" fillOpacity={0.615686} />
        <Rect x={16.5} y={55.5} width={164} height={131} rx={7.5} stroke="#F2F7F7" />
      </G>
      <G filter="url(#filter1_d_1444_3931)">
        <Rect x={201.5} y={55.5} width={164} height={131} rx={7.5} fill="#F7F9F9" />
        <Rect x={217} y={71} width={97} height={24} rx={8} fill="#DDE3E2" fillOpacity={0.615686} />
        <Rect x={217} y={135} width={83} height={16} rx={8} fill="#DDE3E2" fillOpacity={0.615686} />
        <Rect x={217} y={155} width={55} height={16} rx={8} fill="#DDE3E2" fillOpacity={0.615686} />
        <Rect x={201.5} y={55.5} width={164} height={131} rx={7.5} stroke="#F2F7F7" />
      </G>
      <Rect x={16} width={201} height={24} rx={12} fill="#E2E8E7" />
      <G filter="url(#filter2_d_1444_3931)">
        <Rect x={16.5} y={211.5} width={349} height={71} rx={7.5} fill="#F7F9F9" />
        <Rect x={84} y={227} width={244} height={16} rx={8} fill="#DDE3E2" fillOpacity={0.615686} />
        <Rect
          x={84}
          y={251}
          width={145.722}
          height={16}
          rx={8}
          fill="#DDE3E2"
          fillOpacity={0.615686}
        />
        <Rect x={32} y={227} width={40} height={40} rx={20} fill="#E7ECEB" />
        <Rect x={16.5} y={211.5} width={349} height={71} rx={7.5} stroke="#F2F7F7" />
      </G>
      <G filter="url(#filter3_d_1444_3931)">
        <Rect x={16.5} y={335.5} width={349} height={221} rx={7.5} fill="#F7F9F9" />
        <Rect x={16.5} y={335.5} width={349} height={221} rx={7.5} stroke="#F2F7F7" />
        <Rect x={32} y={415} width={318} height={126} rx={8} fill="#fff" />
        <Rect x={48} y={431} width={97} height={24} rx={8} fill="#E7ECEB" />
        <Rect x={48} y={489} width={83} height={16} rx={8} fill="#E7ECEB" />
        <Rect x={48} y={509} width={55} height={16} rx={8} fill="#E7ECEB" />
        <Rect x={32} y={355} width={216} height={16} rx={8} fill="#DDE3E2" fillOpacity={0.615686} />
        <Rect x={32} y={379} width={129} height={16} rx={8} fill="#DDE3E2" fillOpacity={0.615686} />
      </G>
      <Defs />
    </Svg>
  );
}

export default DetailSkeleton;
