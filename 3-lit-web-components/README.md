## Questions

- Core support?
- React integration?
- ...

## Notes

- bundle size : 21.61 kB │ gzip: 7.56 kB
- there is lit plugin for VScode called lit-plugin

- There is a way of using light DOM with lit. [Lit's createRenderRoot](https://lit.dev/docs/components/shadow-dom/#implementing-createrenderroot) can do this for us but drawbacks are that this element won't have access to DOM and style scoping won't work.

- This is still a new framework and it seems like there will be some learning curve to use Lit as it is meant to.

- You will need to run `npm run build` and open `components/index.html` in the browser. Currently `src/index.js` handles bundling WCs and also it's also exporting JSX components so our `react-app` can consume it.

## Pros

- It seems like Lit is widely used in the industry and community seems pretty active.
- Their react wrapper is super good and you can also render components for preact or other react engines. The downside is mentioned in cons. :D

## Cons

- DevX is similar to Origami v2 experience
- [This video](https://www.youtube.com/watch?v=agBn1LW6dbM&ab_channel=Lit%3ASimple.Fast.WebComponents.) at 7:27 mentions interesting thing about @lit-labs/react (the react wrapper for WC). In a nutshell it seems like. NextJs and other SSR frameworks are not supported and they are trying to research more around it. Lit is working on [special package](https://github.com/lit/lit/tree/main/packages/labs/ssr#readme) for SSR rendering but this is under development.
- Depending on what component we are trying to export to react we will need to write each wrapper manually or if we automate we need very good one :D

- some lit code will need to be written in specific Lit component lifecycle and TBH they might be best practices as well and could not find any complications (react environment vs )