import * as React from 'react';
export interface PanelMulticolorProps {
  title?: React.ReactNode | string;
  titleStyle?: React.CSSProperties;
  data: Array<{ value: number }>;
  HtmlPositin?: String[]; // or function
  titleSmall?: React.ReactNode | string;
  height?: Number;
  forceFit?: boolean;
  padding?: String[] | 'auto';
  width?: Number;
  callbackFormatterLuck?: boolean; // 是否反转差到优的顺序 默认 不反转 
  // 如果反转 默认color数组也是会被反转 自定义不影响。
  color?: String[];
}

export default class PanelMulticolor extends React.Component<PanelMulticolorProps, any> {}
