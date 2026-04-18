<script lang="ts">
	import type { Snippet } from 'svelte';

	type ButtonVariant = 'primary' | 'outline' | 'ghost';
	type ButtonSize = 'sm' | 'md' | 'lg';

	let {
		variant = 'primary' as ButtonVariant,
		size = 'md' as ButtonSize,
		href,
		type = 'button',
		disabled = false,
		class: extraClass = '',
		onclick,
		children
	} = $props<{
		variant?: ButtonVariant;
		size?: ButtonSize;
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		class?: string;
		onclick?: () => void;
		children?: Snippet;
	}>();

	const variantClasses: Record<ButtonVariant, string> = {
		primary:
			'bg-gradient-to-r from-primary to-primary-400 text-brand-900 font-semibold hover:shadow-[0_0_30px_rgba(207, 109, 70,0.5)] hover:scale-[1.02]',
		outline:
			'border border-primary/60 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(207, 109, 70,0.2)]',
		ghost: 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
	};

	const sizeClasses: Record<ButtonSize, string> = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg'
	};

	const baseClass = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed`;

	let finalClass = $derived(
		`${baseClass} ${variantClasses[variant as ButtonVariant]} ${sizeClasses[size as ButtonSize]} ${extraClass}`
	);
</script>

{#if href}
	<a {href} class={finalClass} aria-disabled={disabled}>
		{@render children?.()}
	</a>
{:else}
	<button {type} {disabled} {onclick} class={finalClass}>
		{@render children?.()}
	</button>
{/if}
