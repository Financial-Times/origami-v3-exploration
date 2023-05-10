import { createContext } from "preact";
import { useEffect, useState } from "preact/hooks";

import { SelectedOption } from "./selectedOption";
import { Option } from "./option";
import "./multi-select.css";

export const MultiSelectContext = createContext("multi-select-context");

export function MultiSelect(props) {

  let optionsData = props['options-data'];
  if (typeof props['options-data'] == 'string') {
    optionsData = JSON.parse(props['options-data'])
  }
  const [options, setOptions] = useState(optionsData);
  let selectedOptions = options.filter((option) => option.selected);

  const [comboText, setComboText] = useState("Click to select options");
  const [showSelected, setShowButtons] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [id, setId] = useState("multi-select");

  let selectedWrapperId = `${id}-selected-options`;
  let labelId = `${id}-label`; // this needs to come from the o-forms

  useEffect(() => {
    setId("multi-select-useEffect"); 
    if (typeof props['options-data'] == 'string') {
      // hide core select element
      this.base.parentElement.querySelector('select').style.display = 'none';
    }
  });

  return (
    <MultiSelectContext.Provider value={[options, setOptions]}>
      <div className="enhanced">
        <ul
          className={"selected-options" + (!showSelected && " visually-hidden")}
          id={selectedWrapperId}
        >
          {selectedOptions.map(({label}, index) => (
            <SelectedOption label={label} index={index} />
          ))}
        </ul>
        <div className="combobox-wrapper">
          <div
            className="combobox"
            id={id}
            role="combobox"
            aria-expanded="false"
            aria-labelledby={`${labelId} ${selectedWrapperId}`}
            aria-haspopup="listbox"
            aria-owns="o-multi-select-listbox"
            tabindex="0"
          >
            <span
              className="combobox-text"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {comboText}
            </span>
          </div>
        </div>
        {showDropdown && (
          <div
            className="dropdown-menu"
            id="o-multi-select-listbox"
            role="listbox"
            aria-label="multi select options"
            aria-multiselectable="true"
            tabindex="-1"
          >
            {options.map(({ label, selected }, i) => (
              <Option label={label} selected={selected} i={i} />
            ))}
          </div>
        )}
      </div>
    </MultiSelectContext.Provider>
  );
}
