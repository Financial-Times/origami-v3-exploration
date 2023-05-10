import { useContext } from "preact/hooks";

import { MultiSelectContext } from "./multi-select";

export function SelectedOption({label}) {
  const [options, setOptions] = useContext(MultiSelectContext);

  function handleClick() {
    let newOptions = [...options];
    const index = newOptions.findIndex((option) => option.label === label);
    newOptions[index].selected = false
    setOptions(newOptions);
  }
  return (
    <li>
      <button
        type="button"
        className="selected-options-button"
        aria-label={`remove ${label}`}
        onClick={handleClick}
      >
        {label}
      </button>
    </li>
  );
}
