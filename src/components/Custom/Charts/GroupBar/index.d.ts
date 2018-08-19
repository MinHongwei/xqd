import * as React from 'react';
export interface GroupBarProps {
  title?: React.ReactNode | string;
  // data: Array<{ type: string, String: Number }>;
  // { label: '丽水', '字段1': 1170, '字段12': 2123, '字段13': 2123 },
  fields: String[];
  rawData?: any[];
  height?: Number;
  forceFit?: boolean;
  onPlotClickLock?: boolean;
  padding?: String[];
  salesAlias?: string;
  salesAliasUnitLuck?: boolean;
  visibleLegend?: boolean;
  valueLuck?: boolean;
  titleLegend?: String;
  positionLegend?: 'top' | 'left' | 'right' | 'bottom';
  // style?: React.CSSProperties;
}

export default class GroupBar extends React.Component<GroupBarProps, any> {}
