import * as React from 'react';
export interface DFSelectProps {
  rawData?: any[];
  FindValue?: string;
  rawDataLuck?: boolean,
  FindFields?: string;
  KeyFields?: string;
  ValueFields?: string;
  NameFields?: string;
}

export default class DFSelect extends React.Component<DFSelectProps, any> {}
