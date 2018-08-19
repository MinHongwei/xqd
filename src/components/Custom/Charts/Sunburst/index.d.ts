import * as React from 'react';
export interface SunburstProps {
  title?: React.ReactNode | string;
  data: Array<{ value: Number, type: String, name: String }>;
  height?: Number;
  select?: boolean;
  forceFit?: boolean;
  padding?: String[];
  offset?: Number;
 // style?: React.CSSProperties;
}

export default class Sunburst extends React.Component<SunburstProps, any> {}
