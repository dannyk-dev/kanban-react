import clsx from "clsx";
import { JSXElementConstructor, ReactElement } from "react";

export type ModalProps = {
  buttonContent?: React.ReactNode;
  XMarkShown?: boolean;
  buttonType?: ButtonTypes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactElement<ModalActionProps, string | JSXElementConstructor<any>>;
};

export type ButtonTypes = "standard" | "menu";
type ButtonTypesStyles = Record<ButtonTypes, string>;

export const Buttons: Readonly<ButtonTypesStyles> = {
  standard: "standard-button",
  menu: clsx("menu-button", "group"),
};

export interface ModalActionProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  setIsOpen: (isOpen: boolean) => void;
}
