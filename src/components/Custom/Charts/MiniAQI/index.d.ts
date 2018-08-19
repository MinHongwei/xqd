import * as React from "react";
export interface MiniAQIProps {
  target: number;
  color?: string;
  strokeWidth?: number;
}

export default class MiniAQI extends React.Component<
  MiniAQIProps,
  any
> {}
