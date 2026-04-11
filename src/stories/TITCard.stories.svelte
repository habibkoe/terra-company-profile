<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TITCard from '$lib/components/ui/Card.svelte';

	const { Story } = defineMeta({
		title: 'TIT/Card',
		component: TITCard,
		tags: ['autodocs'],
		argTypes: {
			glowing: { control: 'boolean', description: 'Enable glow border effect' },
			hoverable: { control: 'boolean', description: 'Enable hover interaction styles' }
		},
		parameters: {
			backgrounds: {
				default: 'dark',
				values: [{ name: 'dark', value: '#050B18' }]
			}
		}
	});
</script>

<Story name="Default">
	{#snippet template()}
		<div style="padding: 2rem; background: #050B18;">
			<TITCard class="p-6 max-w-sm">
				<h3 style="color: white; margin-bottom: 0.5rem; font-weight: 600;">Card Title</h3>
				<p style="color: #8B9CB6; font-size: 0.875rem;">This is a glassmorphism card component with a dark, elegant style.</p>
			</TITCard>
		</div>
	{/snippet}
</Story>

<Story name="With Glow">
	{#snippet template()}
		<div style="padding: 2rem; background: #050B18;">
			<TITCard class="p-6 max-w-sm" glowing>
				<h3 style="color: white; margin-bottom: 0.5rem; font-weight: 600;">Glowing Card</h3>
				<p style="color: #8B9CB6; font-size: 0.875rem;">This card has a subtle cyan glow border effect.</p>
			</TITCard>
		</div>
	{/snippet}
</Story>

<Story name="Hoverable">
	{#snippet template()}
		<div style="padding: 2rem; background: #050B18;">
			<TITCard class="p-6 max-w-sm" hoverable>
				<h3 style="color: white; margin-bottom: 0.5rem; font-weight: 600;">Hoverable Card</h3>
				<p style="color: #8B9CB6; font-size: 0.875rem;">Hover over this card to see the interaction effect.</p>
			</TITCard>
		</div>
	{/snippet}
</Story>
