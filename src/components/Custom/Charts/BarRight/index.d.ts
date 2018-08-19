import * as React from 'react';
export interface BarStackRightProps {
  title?: React.ReactNode | string;
  data: Array<{ xaxis: string, yaxis: number }>;
  height?: Number;
  forceFit?: boolean;
  padding?: String[];
  visibleLegend?: boolean;
  titleLegend?: string;
  positionLegend?: 'top' | 'left' | 'right' | 'bottom';
  // style?: React.CSSProperties;
}

export default class BarStackRight extends React.Component<BarStackRightProps, any> {}
