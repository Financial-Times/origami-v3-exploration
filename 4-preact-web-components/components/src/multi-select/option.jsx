import { useContext } from "preact/hooks";
import { MultiSelectContext } from "./multi-select";

export function Option({ label, i, selected }) {
  const [options, setOptions] = useContext(MultiSelectContext);

  function handleClick() {
    let newOptions = [...options];
    newOptions[i].selected = !newOptions[i].selected;
    setOptions(newOptions);
  }

  return (
    <div
      className={"option" + (selected && " selected")}
      role="option"
      aria-selected={selected}
      onClick={handleClick}
    >
      {label}
    </div>
  );
}
