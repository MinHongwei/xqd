import * as React from 'react';
export interface TranslateProps {
  rawData: any[];
  FindValue?: string;
  value?: String;
  rawDataLuck?: boolean,
  FindFields?: string;
  // KeyFields?: string;
  ValueFields?: string;
  NameFields?: string;
}

export default class Translate extends React.Component<TranslateProps, any> {}
