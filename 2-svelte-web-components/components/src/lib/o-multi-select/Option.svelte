<svelte:options tag="o-option" />

<script>
	import { activeDescendant, selectedOptions } from './store.js';

	/** @type {string} - Option to display in the multi-select */
	export let option;
	/** @type {number} - Index of the option in the multi-select */
	export let i;
	/** @type {string} - Unique id for the multi-select */
	export let baseId;

	$: selected = $selectedOptions.some((o) => o.index === i);

	function handleClick() {
		selected = !selected;
		activeDescendant.set(i.toString());
		selectedOptions.update((options) => {
			if (selected) {
				options.push({ option, index: i });
			} else {
				options = options.filter((o) => o.index !== i);
			}
			return options;
		});
	}
</script>

<div
  part="multi-option"
	class:selected
	role="option"
	id="{baseId}-{i}"
	class="option"
	aria-selected={selected}
	on:click={handleClick}
>
	{option}
	<span class:tick={selected} />
</div>

<style>
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

	.tick {
		width: 32px;
		height: 32px;
		background-image: url(https://www.ft.com/__origami/service/image/v2/images/raw/fticon-v1:tick?source=origami-build-service&tint=%2333302E,%2333302E&format=svg);
		position: absolute;
		right: 0;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		vertical-align: middle;
	}
</style>
