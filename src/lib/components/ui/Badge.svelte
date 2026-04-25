<script lang="ts">
	type BadgeVariant = 'cyan' | 'green' | 'purple' | 'yellow' | 'default';

	let {
		variant = 'default' as BadgeVariant,
		class: extraClass = '',
		children
	} = $props<{
		variant?: BadgeVariant;
		class?: string;
		children?: import('svelte').Snippet;
	}>();

	const variantClasses: Record<BadgeVariant, string> = {
		cyan: 'bg-primary/10 text-primary border border-primary/30',
		green: 'bg-secondary/10 text-secondary border border-secondary/30',
		purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/30',
		yellow: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30',
		default: 'bg-white/[0.06] text-slate-300 border border-white/10'
	};

	let computedClass = $derived(
		`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant as BadgeVariant]} ${extraClass}`
	);
</script>

<span class={computedClass}>
	{@render children?.()}
</span>
