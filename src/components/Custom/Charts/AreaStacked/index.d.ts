import * as React from 'react';
export interface AreaStackedProps {
  title?: React.ReactNode | string;
  data: Array<{ type: string, xaxis: string, yaxis: number }>;
  height?: Number;
  forceFit?: boolean;
  padding?: String[];
  visibleLegend?: boolean;
  // titleLegend?: any;
  positionLegend?: 'top' | 'left' | 'right' | 'bottom';
  // style?: React.CSSProperties;
}

export default class AreaStacked extends React.Component<AreaStackedProps, any> {}
