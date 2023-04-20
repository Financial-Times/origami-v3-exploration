const render = (component) => `<form data-o-component="o-forms">
<label for="fruits" class="o-forms-field">
  <span class="o-forms-title">
    <span class="o-forms-title__main">${component.label}</span>
  </span>
  <span class="o-forms-input">
    <slot></slot>
  </span>
</label>
</form>`;

const styles = new CSSStyleSheet();

styles.replaceSync(`
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
`);

class OForms extends HTMLElement {
  static get observedAttributes() {
    return ["label"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [
      ...this.shadowRoot.adoptedStyleSheets,
      styles,
    ];
  }

  get label() {
    return this.getAttribute("label");
  }

  set label(value) {
    this.setAttribute("label", value);
  }

  connectedCallback() {
    if (!this.label) {
      throw new Error("label is required");
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.shadowRoot.innerHTML = render(this);
  }
}

export default OForms;
