import { html, css } from "lit";

function handleSelectedClick(option) {
  const indexOfOption = this._options.findIndex(
    (item) => item.value === option
  );
  const indexOfSelectedOption = this._selectedOptions.indexOf(option);
  this._selectedOptions.splice(indexOfSelectedOption, 1);
  this._options[indexOfOption].selected = false;
  this.requestUpdate(); // array and object mutation needs custom trigger of update
}

export function selectedOptionsTemplate(option) {
  return html`<li>
    <button
      type="button"
      class="selected-options-button"
      aria-label="remove ${option}"
      @click=${() => handleSelectedClick.call(this, option)}
    >
      ${option}
    </button>
  </li>`;
}

export const selectedOptionsCSS = css`
  li {
    display: inline-block;
    margin-bottom: 0;
  }

  .selected-options-button {
    border-style: none;
    color: black;
    background-color: bisque;
    margin-right: 8px;
    font-size: inherit;
    padding: 4px;
    cursor: pointer;
  }
`;
