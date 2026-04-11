<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		class: extraClass = '',
		glowing = false,
		hoverable = false,
		children
	} = $props<{
		class?: string;
		glowing?: boolean;
		hoverable?: boolean;
		children?: Snippet;
	}>();

	let finalClass = $derived(
		`glass rounded-2xl ${glowing ? 'glow-border' : ''} ${hoverable ? 'glass-hover cursor-pointer' : ''} ${extraClass}`
	);
</script>

<div class={finalClass}>
	{@render children?.()}
</div>
