import * as React from 'react';
export interface DFCheckboxProps {
  rawData?: any[];
  FindValue?: string;
  rawDataLuck?: boolean,
  FindFields?: string;
  KeyFields?: string;
  ValueFields?: string;
  NameFields?: string;
  defaultValue: [];
}

export default class DFCheckbox extends React.Component<DFCheckboxProps, any> {}
