import { html, css } from "lit";

function handleOptionClick(i) {
  this._options[i].selected = !this._options[i].selected;
  if (this._options[i].selected) {
    this._selectedOptions.push(this._options[i].value);
  } else {
    const spliceIndex = this._selectedOptions.indexOf(this._options[i].value);
    this._selectedOptions.splice(spliceIndex, 1);
  }
  this.requestUpdate(); // array and object mutation needs custom trigger of update
}

export function optionsTemplate(option, selected, i) {
  return html` <div
    role="option"
    id="${this.baseId}-${i}"
    class="option${selected && " selected"}"
    aria-selected=${selected}
    @click=${() => handleOptionClick.call(this, i)}
  >
    ${option}
  </div>`;
}

export const optionsCSS = css`
  .option {
    cursor: pointer;
    padding: 8px 4px;
    position: relative;
  }
  .option:hover {
    background-color: gray;
    color: initial;
  }
  .selected {
    background-color: gainsboro;
    color: initial;
  }
`;
