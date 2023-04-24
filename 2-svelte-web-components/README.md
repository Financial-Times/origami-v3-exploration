# Svelte / Web Component

What if we used Svelte to author Origami components?

## Questions

- Core support?
- React integration?
- ...

## Notes
To test this setup you will need to run `npm run build` in the `components` directory. Components directory has `web-components.html` file that imports bundled web components.

To start react app run `npm run dev` in the `react-app` directory.

- We need to test if we can generate CSS files for components separately.
## Pros

## Cons
- styling children of children still seems to be a problem. But there might be a way to solve it.
- Each nested component in svelte needs to be registered as a custom elements.