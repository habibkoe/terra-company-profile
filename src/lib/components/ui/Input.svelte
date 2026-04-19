<script lang="ts">
	interface Props {
		id?: string;
		label?: string;
		type?: 'text' | 'email' | 'tel' | 'password' | 'textarea';
		value?: string;
		placeholder?: string;
		required?: boolean;
		disabled?: boolean;
		rows?: number;
		class?: string;
		onchange?: (e: Event) => void;
		oninput?: (e: Event) => void;
	}

	let {
		id,
		label,
		type = 'text',
		value = $bindable(''),
		placeholder,
		required = false,
		disabled = false,
		rows = 4,
		class: extraClass = '',
		onchange,
		oninput
	}: Props = $props();

	const baseClass =
		'w-full bg-brand-700/60 border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-text/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200';
</script>

<div class="flex flex-col">
	{#if label}
		<label for={id} class="block text-xs font-medium text-slate-text mb-2 uppercase tracking-wider">
			{label}
		</label>
	{/if}

	{#if type === 'textarea'}
		<textarea
			{id}
			bind:value
			{placeholder}
			{required}
			{disabled}
			{rows}
			class="{baseClass} resize-none {extraClass}"
			{onchange}
			{oninput}
		></textarea>
	{:else}
		<input
			{id}
			{type}
			bind:value
			{placeholder}
			{required}
			{disabled}
			class="{baseClass} {extraClass}"
			{onchange}
			{oninput}
		/>
	{/if}
</div>
