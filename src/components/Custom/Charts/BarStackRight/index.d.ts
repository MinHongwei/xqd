import * as React from 'react';
export interface BarStackRightProps {
  title?: React.ReactNode | string;
  data: Array<{ xaxis: string, type: string, yaxis: number }>;
  height?: Number;
  forceFit?: boolean;
  padding?: String[];
  salesAlias?: string;
  visibleLegend?: boolean;
  titleLegend?: string;
  salesAliasUnit?: string;
  salesAliasUnitLuck?: boolean;
  positionLegend?: 'top' | 'left' | 'right' | 'bottom';
  // style?: React.CSSProperties;
}

export default class BarStackRight extends React.Component<BarStackRightProps, any> {}
