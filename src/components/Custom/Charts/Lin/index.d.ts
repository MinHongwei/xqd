import * as React from 'react';
export interface LinProps {
  title?: React.ReactNode | string;
  // data: Array<{ xaxis: String, ... }>;
  // { xaxis: 'String1', 健康度: 1, 故障率: 10, ... }
  fields: String[];
  // rawData?: any[];
  cols: any;
  height?: Number;
  forceFit?: boolean;
  onPlotClickLock?: boolean;
  padding?: String[];
  // salesAlias?: string;
  // salesAliasUnitLuck?: boolean;
  visibleLegend?: boolean;
  // valueLuck?: boolean;
  titleLegend?: String;
  positionLegend?: 'top' | 'left' | 'right' | 'bottom';
  // style?: React.CSSProperties;
}

export default class Lin extends React.Component<LinProps, any> {}
