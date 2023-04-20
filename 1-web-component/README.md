# Web Component

What if Origami components looked similar to today, but used the Web Component specification where our Browser Support Policy allows? This would allow us to remove the `init` function, for example, in favour of the lifecycle methods of web components.

## Questions

- Core support?
- React integration?
- ...

## Notes

we followed [an article](https://eisenbergeffect.medium.com/hello-web-components-795ed1bd108e) used to create this document.

To style slotted content, we need to use the `::slotted` pseudo-element. Couple of things to keep in mind:

- Only applies to top level elements, can't target children of slotted element.
- One workaround is to use `::part` create [external CSS](./components/o-forms.css) that targets parts based on a class selector and adjusts the [combobox](./components/o-multi-select/o-multi-select.js) styles. Here’s what that might look like:

## Pros

## Cons

- In general the biggest con we have is react is not good at rendering webcomponents. V19 will support it and it seems it would be fine but for now web components with react is complicated and users will need to use useRef and attach the web component to the dom manually. This is not ideal and we should try to avoid it if possible. here is good [article](https://css-tricks.com/building-interoperable-web-components-react/#aa-react-is-a-different-beast) about few other options.


- One of the main goals we have is to have less boilerplate and coding with native HTML web-component api seems quite boilerplaty.