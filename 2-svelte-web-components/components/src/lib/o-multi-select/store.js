import { derived, writable } from 'svelte/store';
/**  @type {import(‘svelte/store’).Writable<string> */
export const activeDescendant = writable('');

/**  @type {import(‘svelte/store’).Writable<Object[]> */
export const selectedOptions = writable([]);

/**  @type {import(‘svelte/store’).Derived<string> */
export const comboText = derived(selectedOptions, ($selectedOptions) => {
	if ($selectedOptions.length === 0) {
		return 'Click to select options';
	}
	if ($selectedOptions.length > 0) {
		return `${$selectedOptions.length} selected`;
	}
});
