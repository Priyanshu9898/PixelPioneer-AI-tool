import { ReactNode } from "react";

export interface LinkProp {
  link: string;
  title: string;
  icon: any
}

export interface SubMenuOpenState {
  [key: number]: boolean;
};
