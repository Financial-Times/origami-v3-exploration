# Preact / Web Component

What if we used Svelte to author Origami components?

## Questions

- Core support?
- React integration?
- ...

## Notes

- Bundle size as web components: 27.14 kB │ gzip: 8.27 kB
- To test this setup you will need to run `npm run build` in the `components` directory. Components directory has `wc.html` file that imports bundled web components.
- React implementation does not work at the moment but [writing a react wrapper](https://swizec.com/blog/seamlessly-render-a-preact-component-in-a-react-project/#reconciling-createelement-and-h) for our components should solve issues related to render engines.

One of the main requirements for Origami components is to support no-js experiences and follow progressive enhancement practices. With Preact this is a bit tricky but luckily we have an example component that already does this. [accessible-autocomplete](https://github.com/Financial-Times/accessible-autocomplete) is a fork of UK government's accessible-autocomplete and its written in Preact. But it also implements [progressive enhancement](https://github.com/Financial-Times/accessible-autocomplete#progressive-enhancement) to support no-js experiences. This component also demonstrates how to convert Preact components to make them react compatible.

Web compnents are registered in `components/src/wc.js` file. This file is then bundled using Vite and the output is saved in `components/dist/` directory. This directory is then used by `components/wc.html` file to import web components. This bundle outputs css file separately and if we specify `{shadow: true}` in the `register` function then styles are not applied to the component. This is because shadow dom is used to encapsulate styles and prevent them from leaking to the parent document. This is a good thing but it also means that we can not use Origami styles with web components. This is why I have set `{shadow: false}` in the `register` function. This means that styles are applied to the component but they are not encapsulated. This means that Origami styles will leak to the parent document and might cause conflicts.

```js
register(Forms, "o-forms", ["label"], { shadow: false });
register(MultiSelect, "o-multi-select", [], { shadow: false });
```

## Pros

- Preact components can be used by other Preact users.
- It is quite light weight and is very similar to react which makes it easy to contribute to or understand by many developers.
- Better DOM and state management than vanilla JS.

## Cons

- preact components can not be imported to react without breaking because of preact hooks or slight differences between them.

  - "preact/compat is our compatibility layer that allows you to leverage the many libraries of the React ecosystem and use them with Preact. This is the recommended way to try out Preact if you have an existing React app."

  ```text
  Thus, the website and documentation reflect React 15.x 
  through 17.x when discussing compatibility or making 
  comparisons.
  ```

  This is from Preact official Docs. And it seems that preact has features that react doesn't. Theoretically we might be increasing the complexity of our components by using preact. I found a [workaround](https://swizec.com/blog/seamlessly-render-a-preact-component-in-a-react-project/) for this where we could create a wrapper component that would render the Preact component for React.

- preact wrapper for web components was update 3 years ago and it not clear if this library will wrap components better. [here](https://github.com/preactjs/preact/issues/2690) is workaround though.

- Writing progressive enhancements for each component might introduce a lot of boilerplate code or make it more complicated to write components. Also it seems that progressive enhancement is used when users use stand alone [component that is bundled as JS](https://github.com/Financial-Times/accessible-autocomplete/blob/e0d5a387202072e4805e98d4e918dc6c0b0bfadb/webpack.config.babel.js#L106) which Origami V2 already does by writing Vanilla JS without the bundling/extra wrapper.
