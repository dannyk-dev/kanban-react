import { useEffect, useState } from "react";
import { useGetTodoGroups } from "../hooks/todo-groups";
import GroupCard from "./GroupCard";
import Search from "./Search";
import { TodoGroup } from "../utils/types";
import { alphabeticalOrder } from "../utils/sort";
import Modal from "./modals/Modal";
import CreateGroupForm from "./modals/create/CreateGroupForm";
import { PlusIcon } from "@heroicons/react/16/solid";

const TodoGroups = () => {
  const { data } = useGetTodoGroups();
  const [renderData, setRenderData] = useState<TodoGroup[] | undefined>(
    alphabeticalOrder(data)
  );
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    if (searchText === "") {
      setRenderData(alphabeticalOrder(data));
      return;
    }

    setRenderData(
      alphabeticalOrder(
        data?.filter((group) => {
          return group.title.toLowerCase().includes(searchText.toLowerCase());
        })
      )
    );
  }, [searchText, setRenderData, data]);

  return (
    <div className="flex flex-col justify-start space-y-10 w-full  items-center pt-4 pb-8 ">
      <div className="w-full flex justify-between text-left py-4 px-16 mr-4">
        <h1 className="text-sky-700 text-2xl text-center py-5">Your Tasks</h1>
        <div className="flex items-center h-full  ">
          <Search searchText={searchText} setSearchText={setSearchText} />
          <Modal buttonContent={<PlusIcon className="size-4 fill-gray-300" />}>
            {/*  @ts-expect-error: Suppress error for missing props*/}
            <CreateGroupForm />
          </Modal>
        </div>
      </div>

      <div className="flex  items-center flex-wrap justify-start gap-y-8 gap-x-10 px-16">
        {renderData?.map((item) => (
          <GroupCard {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default TodoGroups;
