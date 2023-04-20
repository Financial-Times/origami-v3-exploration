const render = (component) => {
  return `<div
	role="option"
	id="${component.baseId}-${component.i}"
	class="option"
	aria-selected=${component.selected}
>
${component.option}
</div>
  `;
};

const styles = new CSSStyleSheet();

styles.replaceSync(`
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
  background-color: gainsboro; /* use oColors here instead */
  color: initial;
}
ß
`);

export class Option extends HTMLElement {
  static get observedAttributes() {
    return ["option", "i", "baseId"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.adoptedStyleSheets = [
      ...this.shadowRoot.adoptedStyleSheets,
      styles,
    ];
    this.selected = false;
    this.addEventListener("click", () => {
      this.setAttribute("selected", !this.selected);
    });
  }

  get option() {
    return this.getAttribute("option");
  }

  set option(value) {
    this.setAttribute("option", value);
  }

  get selected() {
    return this.getAttribute("selected");
  }

  set selected(value) {
    this.setAttribute("selected", value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.shadowRoot.innerHTML = render(this);
  }
}
