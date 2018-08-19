import * as React from 'react';
export interface AreaStackedProps {
  title?: React.ReactNode | string;
  // data: Array<{ type: string, String: Number }>;
  // { type:'综检站', '杭州': 5, '宁波': 4,
  //  '温州': 4, '嘉兴': 4, '湖州': 1, '绍兴': 4, '金华': 5, '衢州': 2, '舟山': 1, '台州': 3, '丽水': 2 }
  rawData?: any[];
  fields: String[];
  height?: Number;
  forceFit?: boolean;
  padding?: String[];
  salesAlias?: string;
  salesAliasUnitLuck?: boolean;
  visibleLegend?: boolean;
  titleLegend?: String;
  positionLegend?: 'top' | 'left' | 'right' | 'bottom';
  // style?: React.CSSProperties;
}

export default class AreaStacked extends React.Component<AreaStackedProps, any> {}
