import { LitElement, css, html } from "lit";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Forms extends LitElement {
  static get properties() {
    return {
      /**
       * Label for the.
       */
      label: { type: String },

    };
  }

  constructor() {
    super();
    this.label = '';
  }

  render() {
    return html`
      <form data-o-component="o-forms">
        <label for="fruits" class="o-forms-field">
          <span class="o-forms-title">
            <span class="o-forms-title__main">${this.label}</span>
          </span>
          <span class="o-forms-input">
            <slot name="o-forms-input"></slot>
          </span>
        </label>
      </form>
    `;
  }

  static get styles() {
    return css`
      .o-forms-field {
        display: flex;
        flex-direction: column;
        margin-bottom: 6px;
        position: relative;
      }
      label {
        display: block;
        margin: 0 0 6px;
        position: relative;
      }
      label:last-of-type {
        margin-bottom: 0;
      }
      .o-forms-title {
        border-bottom: 1px solid;
      }
      .o-forms-title__main {
        display: block;
      }
      .o-forms-input {
        margin-top: 6px;
      }
      .o-forms-input {
        border-radius: 0;
        appearance: none;
      }
    `;
  }
}

window.customElements.define("o-forms", Forms);
