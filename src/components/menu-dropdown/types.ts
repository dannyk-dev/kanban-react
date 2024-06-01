import { ReactElement, JSXElementConstructor } from "react";
import { ModalMenuProps } from "../modals/types";

export type MenuConfigTitle = "Group" | "Item";

export type MenuConfig = {
  text?: string;
  href?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element?: ReactElement<ModalMenuProps, string | JSXElementConstructor<any>>;
};

export interface MenuDropDownProps {
  todoGroupId: string;
  option: MenuConfigTitle;
}
