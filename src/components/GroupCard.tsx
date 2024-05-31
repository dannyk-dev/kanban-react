import React from "react";
import { TodoGroup } from "../utils/types";
import MenuDropdown from "./menu-dropdown";
import { BookmarkIcon, LinkIcon } from "@heroicons/react/16/solid";

const GroupCard = ({ title, description, todos, id }: TodoGroup) => {
  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col h-64 rounded-xl shadow-lg py-6">
      <div className="flex flex-col items-center justify-around h-full px-6">
        <div className="flex items-center justify-start space-x-4 w-full">
          {/* <div className="rounded-full w-4 h-4 border border-purple-500"></div> */}
          <div className="text-md font-bold text-left">{title}</div>
        </div>
        <div className="mb-4 text-gray-500 font-bold text-sm text-left w-full flex items-center justify-start">
          {description}
        </div>
        <div className="flex items-center space-x-4 justify-end w-full">
          <span className="block text-sm text-gray-500 text-right">
            {todos.length} todos
          </span>
        </div>
        <div className="flex items-center space-x-4 justify-between w-full">
          <MenuDropdown option="Group" todoGroupId={id} />
          <div className="flex space-x-4">
            <LinkIcon className="text-gray-500 hover:text-gray-300 cursor-pointer size-6" />
            <BookmarkIcon className="text-gray-500 hover:text-gray-300 cursor-pointer size-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
