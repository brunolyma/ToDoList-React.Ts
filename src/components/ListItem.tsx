import classNames from "classnames";
import { useState } from "react";
import { Item } from "../types/item";

type Props = {
  item: Item;
};

export function ListItem({ item }: Props) {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <div className=" flex items-center p-3 my-3 bg-[#20212C] rounded-xl">
      <input
        className=" w-6 h-6 mr-3"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label
        className={classNames(" text-gray-200", {
          "line-through": isChecked,
        })}
      >
        {item.task}
      </label>
    </div>
  );
}
