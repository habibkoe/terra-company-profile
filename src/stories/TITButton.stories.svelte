<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TITButton from '$lib/components/ui/Button.svelte';

	const { Story } = defineMeta({
		title: 'TIT/Button',
		component: TITButton,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['primary', 'outline', 'ghost'],
				description: 'Visual style of the button'
			},
			size: {
				control: 'select',
				options: ['sm', 'md', 'lg'],
				description: 'Size of the button'
			},
			disabled: { control: 'boolean' }
		},
		parameters: {
			backgrounds: {
				default: 'dark',
				values: [{ name: 'dark', value: '#050B18' }]
			}
		}
	});
</script>

<Story name="Primary">
	{#snippet template()}
		<div style="padding: 2rem; background: #050B18;">
			<TITButton variant="primary" size="md">Primary Button</TITButton>
		</div>
	{/snippet}
</Story>

<Story name="Outline">
	{#snippet template()}
		<div style="padding: 2rem; background: #050B18;">
			<TITButton variant="outline" size="md">Outline Button</TITButton>
		</div>
	{/snippet}
</Story>

<Story name="Ghost">
	{#snippet template()}
		<div style="padding: 2rem; background: #050B18;">
			<TITButton variant="ghost" size="md">Ghost Button</TITButton>
		</div>
	{/snippet}
</Story>

<Story name="All Variants">
	{#snippet template()}
		<div style="display:flex; gap:1rem; padding:2rem; background:#050B18; flex-wrap:wrap;">
			<TITButton variant="primary">Primary</TITButton>
			<TITButton variant="outline">Outline</TITButton>
			<TITButton variant="ghost">Ghost</TITButton>
		</div>
	{/snippet}
</Story>

<Story name="All Sizes">
	{#snippet template()}
		<div style="display:flex; align-items:center; gap:1rem; padding:2rem; background:#050B18;">
			<TITButton variant="primary" size="sm">Small</TITButton>
			<TITButton variant="primary" size="md">Medium</TITButton>
			<TITButton variant="primary" size="lg">Large</TITButton>
		</div>
	{/snippet}
</Story>

<Story name="Disabled">
	{#snippet template()}
		<div style="padding: 2rem; background: #050B18;">
			<TITButton variant="primary" disabled>Disabled Button</TITButton>
		</div>
	{/snippet}
</Story>
