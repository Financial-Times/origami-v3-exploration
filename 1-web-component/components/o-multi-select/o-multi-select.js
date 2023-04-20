import {Option} from "./option.js";
customElements.define("o-multi-select-option", Option);


const render = (component) => `<div class="enhanced">
<ul
        class="selected-options"
        id=${component.selectedWrapperId}
>
  ${component._selectedOptions.map((option) => {
    return `<o-multi-select-selected-option option=${option} index=${index}></o-multi-select-selected-option>`;
  })}
</ul>
<div class="combobox-wrapper">
    <div
            class="combobox"
            id="${component.selectId}"
            name=${component.selectName}
            role="combobox"
            aria-activedescendant=${component.activeDescendant}
            aria-labelledby="${component.labelId} ${
  component.selectedWrapperId
}"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-owns="o-multi-select-listbox"
            tabindex="0"
    >
        <span class="combobox-text" part={comboBoxText}> Click to select options </span>
    </div>
</div>
<div
        class="dropdown-menu"
        id="o-multi-select-listbox"
        role="listbox"
        aria-label="multi select options"
        aria-multiselectable="true"
        tabindex="-1"
>
${component._options.map((option, i) => {
  return `<o-multi-select-option option=${option} i=${i} baseId=${component.selectedWrapperId}>${option}</o-multi-select-option>`
}).join('')}
      </div>
</div>`;

const styles = new CSSStyleSheet();

styles.replaceSync(`
.enhanced {
  display: relative;
}

.selected-options {
  list-style-type: none;
  padding: 4px;
  margin: 0;
  z-index: 1;
}

.dropdown-menu {
  width: 100%;
  background-color: white;
  padding: 4px;
  border: 1px solid gray;
  left: 0;
  position: absolute;
  max-height: 50vh;
  overflow-y: auto;
}

.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: polygon(0 0, 0 0);
  margin: -1px;
  border: 0;
  overflow: hidden;
  padding: 0;
  width: 2px;
  height: 2px;
  white-space: nowrap;
}
`);

class OMultiSelect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [
      ...this.shadowRoot.adoptedStyleSheets,
      styles,
    ];

    this._options = this._getCoreOptions();
    this._selectedOptions = [];
    this.shadowRoot.innerHTML = render(this);
  }

  _getCoreOptions() {
    const coreWrapper = this.querySelectorAll("select");

    const options = coreWrapper[0].querySelectorAll("option");
    this._coreOptions = options;
    return [...options].map((option) => option.innerText);
  }



}

export default OMultiSelect;
