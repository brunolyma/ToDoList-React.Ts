import { KeyboardEvent, useState } from "react";

type Props = {
  onEnter: (task: string) => void;
};

export function AddArea({ onEnter }: Props) {
  const [inputText, setInputText] = useState("");

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === "Enter" && inputText) {
      onEnter(inputText);
      setInputText("");
    }
  }

  return (
    <div className=" flex items-center my-5 p-1  border border-solid border-[#555] rounded-2xl">
      <div className=" text-2xl ml-1">➕</div>
      <input
        className=" flex-1 py-1 px-2 text-lg text-white bg-transparent border-none outline-none"
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}
