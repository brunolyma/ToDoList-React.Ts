import classNames from "classnames";
import { Item } from "../types/item";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
};

export function ListItem({ item, onChange }: Props) {
  return (
    <div className=" flex items-center p-3 my-3 bg-[#20212C] rounded-xl">
      <input
        className=" w-6 h-6 mr-3"
        type="checkbox"
        checked={item.done}
        onChange={(e) => onChange(item.id, e.target.checked)}
      />
      <label
        className={classNames(" text-gray-200", {
          "line-through": item.done,
        })}
      >
        {item.task}
      </label>
    </div>
  );
}
