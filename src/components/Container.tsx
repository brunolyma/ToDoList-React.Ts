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

  //renderiza uma vez e verifica se há algo no localStorage, assim preenchendo a lista
  useEffect(() => {
    tasks = localStorage.getItem("taskList");
    if (tasks === null) {
      return;
    }
    setList(JSON.parse(tasks));
  }, []);

  //função para atualizar a lista com uma nova tarefa e também o localStorage
  function handleAddTask(task: string) {
    let newList = [...list];

    newList.unshift({
      id: Date.now(),
      task: task,
      done: false,
    });

    setList(newList);
    localStorage.setItem("taskList", JSON.stringify(newList));
  }

  // função para atualizar o estado de checked do item, e atualizando o localStorage quando chamada
  function handleChange(id: number, done: boolean) {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }

    setList(newList);
    localStorage.setItem("taskList", JSON.stringify(newList));
  }

  return (
    <div className="min-h-screen">
      <div className=" max-w-[980px] p-3 m-auto ">
        <h1 className=" pb-6 pt-2 text-5xl font-bold text-white text-center border-b border-solid border-[#444]">
          Lista de Tarefas
        </h1>
        <AddArea onEnter={handleAddTask} />

        {list.length === 0 ? ( // condicional com item predefinido caso não haja itens na list
          <ListItem
            item={initialTask}
            onChange={function (id: number, done: boolean) {
              throw new Error("Function not implemented.");
            }}
          />
        ) : ( // tendo item, corre o map para formar a tela
          list.map((item, index) => (
            <ListItem key={index} item={item} onChange={handleChange} />
          ))
        )}
      </div>
    </div>
  );
}
