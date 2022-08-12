import { useEffect, useState } from "react";
import { ListItem } from "./ListItem";

import { Item } from "../types/item";
import { AddArea } from "./AddArea";

const initialTask: Item = {
  id: Date.now(),
  task: "Comprar pão",
  done: true,
};

export function Container() {
  const [list, setList] = useState<Item[]>([]);

  let tasks: any;

  useEffect(() => {
    tasks = localStorage.getItem("taskList");
    if (tasks === null) {
      return;
    }
    console.log(tasks);
    setList(JSON.parse(tasks));
  }, []);

  function handleAddTask(task: string) {
    let newList = [...list];

    newList.unshift({
      id: Date.now(),
      task: task,
      done: false,
    });

    setList(newList);
    localStorage.setItem("taskList", JSON.stringify(newList));
    console.log(list, newList, localStorage.getItem("taskList"));
  }

  return (
    <div className="min-h-screen">
      <div className=" max-w-[980px] p-3 m-auto ">
        <h1 className=" pb-6 pt-2 text-5xl font-bold text-white text-center border-b border-solid border-[#444]">
          Lista de Tarefas
        </h1>

        <AddArea onEnter={handleAddTask} />

        {list.length === 0 ? (
          <ListItem item={initialTask} />
        ) : (
          list.map((item, index) => <ListItem key={index} item={item} />)
        )}
      </div>
    </div>
  );
}
