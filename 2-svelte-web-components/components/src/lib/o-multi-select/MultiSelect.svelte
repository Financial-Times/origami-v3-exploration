<svelte:options tag="o-multi-select" />

<script>
  import { onMount } from "svelte";

  import "./Option.svelte";
  import "./SelectedOption.svelte";

  import { activeDescendant, selectedOptions, comboText } from "./store.js";
  import { calculateSumOfChildrenWidth, getOptionsFromDom } from "./utils.js";
  /** @type {String[]} - The list of options to display in the multi-select */
  export let multiSelectOptions = ["Option 1", "Option 2", "Option 3"];
  /** @type {string} - Unique id for the multi-select */
  export let id;

  let selectedWrapperId = `${id}-selected-options`;
  let labelId = `${id}-label`; // this needs to come from the o-forms

  let dropDownOpen = false;

  /**@type number*/
  let comboboxWidth;
  /**@type HTMLElement*/
  let selectedOptionsEl;

  $: showButtons =
    $selectedOptions &&
    selectedOptionsEl &&
    calculateSumOfChildrenWidth(selectedOptionsEl) < comboboxWidth * 0.9;

  function onresize() {
    showButtons =
      $selectedOptions &&
      selectedOptionsEl &&
      calculateSumOfChildrenWidth(selectedOptionsEl) < comboboxWidth * 0.9;
  }

  onMount(() => {
    multiSelectOptions = getOptionsFromDom();
  });

</script>

<svelte:window on:resize={onresize} />
<div class="enhanced">
  <ul
    class="selected-options"
    class:visually-hidden={!showButtons}
    id={selectedWrapperId}
    bind:this={selectedOptionsEl}
  >
    {#each $selectedOptions as { option, index }}
      <o-selected-option {option} {index} />
    {/each}
  </ul>
  <div class="combobox-wrapper">
    <div
      class="combobox"
      {id}
      role="combobox"
      aria-expanded="false"
      aria-activedescendant={$activeDescendant}
      aria-labelledby="{labelId} {selectedWrapperId}"
      aria-haspopup="listbox"
      aria-owns="o-multi-select-listbox"
      tabindex="0"
      bind:offsetWidth={comboboxWidth}
    >
      <span
        part="combobox-text"
        class="combobox-text"
        on:click={() => (dropDownOpen = !dropDownOpen)}
      >
        {$comboText}
      </span>
    </div>
  </div>
  {#if dropDownOpen}
    <div
      class="dropdown-menu"
      id="o-multi-select-listbox"
      role="listbox"
      aria-label="multi select options"
      aria-multiselectable="true"
      tabindex="-1"
    >
      {#each multiSelectOptions as option, i}
        <o-option {option} {i} baseId={id} />
      {/each}
    </div>
  {/if}
</div>

<style>
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
</style>
