<svelte:options tag="o-selected-option" />

<script>
	import { selectedOptions } from './store.js';
	/** @type {string} */
	export let option;
	/** @type {string} */
	export let index;

	function handleClick() {
		selectedOptions.update((options) => {
			return options.filter((o) => o.index !== index);
		});
	}
</script>

<li>
	<button
		type="button"
		class="selected-options-button"
		aria-label="remove {option}"
		on:click={handleClick}>{option}</button
	>
</li>

<style>
	li {
		display: inline-block;
		margin-bottom: 0;
	}

	.selected-options-button {
		border-style: none;
		color: black;
		background-color: bisque;
		margin-right: 8px;
		font-size: inherit;
		padding: 4px;
		cursor: pointer;
	}
</style>
