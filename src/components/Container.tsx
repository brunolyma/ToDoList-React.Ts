import { useState } from "react";

import { Item } from "../types/item";
import { ListItem } from "./ListItem";

const initialTask: Item = {
  id: Date.now(),
  task: "Comprar pão",
  done: true,
};

export function Container() {
  const [list, setList] = useState<Item[]>([]);
  console.log(list);

  return (
    <div className="min-h-screen">
      <div className=" max-w-[980px] p-3 m-auto ">
        <h1 className=" pb-8 text-5xl font-bold text-white text-center border-b border-solid border-[#444]">
          Lista de Tarefas
        </h1>

        {list.length === 0 ? (
          <ListItem item={initialTask} />
        ) : (
          list.map((item, index) => <ListItem key={index} item={item} />)
        )}
      </div>
    </div>
  );
}
