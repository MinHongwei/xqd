import * as React from 'react';
export interface BarProps {
  title?: React.ReactNode | string;
  data: Array<{ xaxis: string, yaxis: number }>;
  height?: Number;
  forceFit?: boolean;
  padding?: String[];
  salesAlias?: string;
  visibleLegend?: boolean;
  // titleLegend?: string;
  salesAliasUnit?: string;
  salesAliasUnitLuck?: boolean;
  // positionLegend?: 'top' | 'left' | 'right' | 'bottom';
  // style?: React.CSSProperties;
}

export default class Bar extends React.Component<BarProps, any> {}
