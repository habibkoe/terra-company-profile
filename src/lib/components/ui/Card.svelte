<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		class: extraClass = '',
		glowing = false,
		hoverable = false,
		href,
		children
	} = $props<{
		class?: string;
		glowing?: boolean;
		hoverable?: boolean;
		href?: string;
		children?: Snippet;
	}>();

	let finalClass = $derived(
		`glass rounded-2xl ${glowing ? 'glow-border' : ''} ${hoverable ? 'glass-hover cursor-pointer' : ''} ${extraClass}`
	);
</script>

{#if href}
	<a {href} target="_blank" rel="noopener noreferrer" class={`${finalClass} block`}>
		{@render children?.()}
	</a>
{:else}
	<div class={finalClass}>
		{@render children?.()}
	</div>
{/if}
