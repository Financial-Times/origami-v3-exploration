<svelte:options tag="o-forms" />

<script>
  /**@type string*/
  export let label;
</script>

<form data-o-component="o-forms">
  <label for="fruits" class="o-forms-field">
    <span class="o-forms-title">
      <span class="o-forms-title__main">{label}</span>
    </span>
    <span class="o-forms-input">
      <slot name="o-forms-input" />
    </span>
  </label>
</form>

<style>
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

  .o-forms-input :global(.combobox-text) {
    color: blueviolet;
  }
</style>
