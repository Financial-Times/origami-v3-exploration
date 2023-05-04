import { LitElement, css, html } from "lit";
import { optionsTemplate, optionsCSS } from "./option.js";
import {
  selectedOptionsTemplate,
  selectedOptionsCSS,
} from "./selected-option.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MultiSelect extends LitElement {
  static get properties() {
    return {
      baseId: { type: String },
      _open: { state: true },
      _options: { state: true },
      _selectedOptions: { state: true },
    };
  }

  firstUpdated() {
    this._listBox = this.renderRoot.querySelector("[role=listbox]");
    this._options = this._getCoreOptions();
  }

  constructor() {
    super();
    this._open = false;
    this._selectedOptions = [];
  }

  render() {
    return html`<div class="enhanced">
      <ul class="selected-options" id=${this.selectedWrapperId}>
        ${this._selectedOptions.map((option) => {
          return selectedOptionsTemplate.call(this, option);
        })}
      </ul>
      <div class="combobox-wrapper">
        <div
          class="combobox"
          id="${this.selectId}"
          name=${this.selectName}
          role="combobox"
          aria-labelledby="${this.labelId} ${this.selectedWrapperId}"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-owns="o-multi-select-listbox"
          tabindex="0"
        >
          <span
            class="combobox-text"
            part="comboBoxText"
            @click="${this._toggleDropDown}"
          >
            Click to select options
          </span>
        </div>
      </div>
      <div
        class="dropdown-menu ${this._open ? "open" : "closed"}"
        id="o-multi-select-listbox"
        role="listbox"
        aria-label="multi select options"
        aria-multiselectable="true"
        tabindex="-1"
      >
        ${this._options && this._options.map((option, i) => {
          return optionsTemplate.call(this, option.value, option.selected, i);
        })}
      </div>
    </div>`;
  }

  _getCoreOptions() {
    const coreWrapper = this.querySelectorAll("select");
    console.log(`🚀 ~ coreWrapper:`, this);

    const options = coreWrapper[0].querySelectorAll("option");
    this._coreOptions = options;
    return [...options].map((option) => ({
      value: option.innerText,
      selected: option.selected,
    }));
  }

  _toggleDropDown() {
    this._open = !this._open;
  }

  _handleResize() {
    console.log("resize event is working");
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this._handleResize);
  }
  disconnectedCallback() {
    window.removeEventListener("resize", this._handleResize);
    super.disconnectedCallback();
  }

  static styles = [
    optionsCSS,
    selectedOptionsCSS,
    css`
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
      .combobox-text {
        pointer: cursor;
      }
      .closed {
        display: none;
      }

      .open {
        display: block;
      }
    `,
  ];
}

window.customElements.define("o-multi-select", MultiSelect);
