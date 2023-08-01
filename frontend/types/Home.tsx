import { ReactNode } from "react";

export interface LinkProp {
  link: string;
  title: string;
  icon: any;
}

export interface SubMenuOpenState {
  [key: number]: boolean;
}

export interface HeadingProp {
  icon: any;
  title: string;
  description?: string;
}


export interface HomeLogoProp {
  width?: number;
  height?: number;
}