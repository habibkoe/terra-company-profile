<script lang="ts">
	import { Navbar, Hero, About, Services, PortfolioGrid, Contact, Footer } from '$lib/components';
	import { PROJECTS_DATA } from '$lib/constants';
	import type { Project } from '$lib/types';

	import { i18n } from '$lib/stores/i18n.svelte';

	const projects: Project[] = PROJECTS_DATA;

	const meta = $derived({
		title:
			i18n.locale === 'id'
				? 'Terra Incognita Technology – Solusi Digital Inovatif Indonesia'
				: 'Terra Incognita Technology – Innovative Digital Solutions Indonesia',
		desc:
			i18n.locale === 'id'
				? 'Terra Incognita Technology adalah studio teknologi yang merancang solusi digital inovatif untuk Smart Farming, Hotel Management, Education Technology, dan Financial Technology di Indonesia.'
				: 'Terra Incognita Technology is a technology studio designing innovative digital solutions for Smart Farming, Hotel Management, Education Technology, and Financial Technology in Indonesia.',
		ogDesc:
			i18n.locale === 'id'
				? 'Solusi teknologi yang mengubah cara bisnis bekerja.'
				: 'Technology solutions that transform the way businesses work.'
	});
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.desc} />
	<meta
		name="keywords"
		content="tecnologi, IoT, smart farming, hotel management, fintech, edukasi digital, SvelteKit, Indonesia"
	/>
	<meta property="og:title" content="Terra Incognita Technology" />
	<meta property="og:description" content={meta.ogDesc} />
	<meta property="og:type" content="website" />
</svelte:head>

<Navbar />

<main>
	<Hero />
	<About />
	<Services />
	<PortfolioGrid {projects} />
	<Contact />
</main>

<Footer />
