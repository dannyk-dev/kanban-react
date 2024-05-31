import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import React, { JSXElementConstructor, ReactElement } from "react";
import { Link } from "react-router-dom";
import DeleteGroupModal from "../modals/delete/DeleteGroupModal";
import { ModalMenuProps } from "../modals/types";

type MenuConfigTitle = "Group" | "Item";

type MenuConfig = {
  text?: string;
  href?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element?: ReactElement<ModalMenuProps, string | JSXElementConstructor<any>>;
};

const MenuConfigOptions: Record<MenuConfigTitle, MenuConfig[]> = {
  Group: [
    {
      href: "/edit",
    },
    {
      // @ts-expect-error: Suppress error for missing props
      element: <DeleteGroupModal />,
    },
  ],
  Item: [
    {
      text: "Edit",
      href: "/edit",
    },
    {
      text: "Delete",
      href: "/delete",
    },
  ],
};

interface MenuDropDownProps {
  todoGroupId: string;
  option: MenuConfigTitle;
}

const MenuDropdown = ({ option, todoGroupId }: MenuDropDownProps) => {
  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        <EllipsisHorizontalIcon className="size-5 fill-white/60" />
      </MenuButton>
      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-700 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
        >
          {MenuConfigOptions[option].map(({ href, text, element }) => (
            <MenuItem key={text}>
              {!element ? (
                <Link
                  to={href || "#"}
                  className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-600"
                >
                  {text || "Link"}
                </Link>
              ) : (
                React.cloneElement(element, { todoGroupId })
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;
