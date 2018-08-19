import * as React from 'react';
export interface DFRadioProps {
  rawData?: any[];
  FindValue?: string;
  rawDataLuck?: boolean,
  FindFields?: string;
  KeyFields?: string;
  ValueFields?: string;
  NameFields?: string;
}

export default class DFRadio extends React.Component<DFRadioProps, any> {}
