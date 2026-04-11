<script lang="ts">
	import { Navbar, Hero, About, Services, PortfolioGrid, Contact, Footer } from '$lib/components';
	import { PROJECTS_DATA } from '$lib/constants';
	import type { Project } from '$lib/types';

	const projects: Project[] = PROJECTS_DATA;
</script>

<svelte:head>
	<title>Terra Incognita Technology – Solusi Digital Inovatif Indonesia</title>
	<meta
		name="description"
		content="Terra Incognita Technology adalah studio teknologi yang merancang solusi digital inovatif untuk Smart Farming, Hotel Management, Education Technology, dan Financial Technology di Indonesia."
	/>
	<meta name="keywords" content="tecnologi, IoT, smart farming, hotel management, fintech, edukasi digital, SvelteKit, Indonesia" />
	<meta property="og:title" content="Terra Incognita Technology" />
	<meta property="og:description" content="Solusi teknologi yang mengubah cara bisnis bekerja." />
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
