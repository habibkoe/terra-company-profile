<script lang="ts">
	import type { Project, ProjectCategory } from '$lib/types';
	import Card from '$lib/components/ui/Card.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import { Calendar, Building, Tag, Sprout, Hotel, GraduationCap, Coins, Landmark, ShoppingCart, HardHat, Sparkles } from 'lucide-svelte';
	import { i18n } from '$lib/stores/i18n.svelte';

	let { projects } = $props<{ projects: Project[] }>();

	type FilterOption = 'All' | ProjectCategory;

	const FILTER_OPTIONS: FilterOption[] = [
		'All',
		'Farming',
		'Hotel',
		'Education',
		'Financial',
		'Government',
		'E-Commerce',
		'Construction'
	];

	let activeFilter = $state<FilterOption>('All');

	let filteredProjects = $derived(
		activeFilter === 'All' ? projects : projects.filter((p: Project) => p.category === activeFilter)
	);

	const categoryBadgeVariant: Record<ProjectCategory, 'green' | 'cyan' | 'purple' | 'yellow'> = {
		Farming: 'green',
		Hotel: 'cyan',
		Education: 'purple',
		Financial: 'yellow',
		Government: 'cyan',
		'E-Commerce': 'green',
		Construction: 'yellow',
		Other: 'cyan'
	};

	const categoryIcon: Record<ProjectCategory, any> = {
		Farming: Sprout,
		Hotel: Hotel,
		Education: GraduationCap,
		Financial: Coins,
		Government: Landmark,
		'E-Commerce': ShoppingCart,
		Construction: HardHat,
		Other: Sparkles
	};

	// Gradients per category for card top accent
	const categoryGradient: Record<ProjectCategory, string> = {
		Farming: 'from-secondary/30 to-transparent',
		Hotel: 'from-primary/30 to-transparent',
		Education: 'from-purple-500/30 to-transparent',
		Financial: 'from-yellow-500/30 to-transparent',
		Government: 'from-blue-500/30 to-transparent',
		'E-Commerce': 'from-pink-500/30 to-transparent',
		Construction: 'from-orange-500/30 to-transparent',
		Other: 'from-primary/20 to-transparent'
	};
</script>

<section id="portfolio" class="py-24 lg:py-32 relative overflow-hidden">
	<!-- Background decoration -->
	<div
		class="absolute left-0 bottom-0 w-[400px] h-[400px] bg-secondary/[0.03] rounded-full blur-[100px] pointer-events-none"
	></div>

	<div class="container-max section-padding">
		<!-- Section Header -->
		<div class="text-center mb-12">
			<span
				class="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-primary border border-primary/30 bg-primary/5 mb-4 tracking-widest uppercase"
			>
				{i18n.t.portfolio.badge}
			</span>
			<h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
				{@html i18n.t.portfolio.title}
			</h2>
			<p class="text-slate-text text-lg max-w-2xl mx-auto leading-relaxed">
				{i18n.t.portfolio.desc}
			</p>
		</div>

		<!-- Filter Tabs -->
		<div class="flex flex-wrap justify-center gap-2 mb-12">
			{#each FILTER_OPTIONS as option}
				<button
					onclick={() => (activeFilter = option)}
					class={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
						activeFilter === option
							? 'bg-gradient-to-r from-primary to-primary-400 text-brand-900 shadow-[0_0_20px_rgba(207, 109, 70,0.4)]'
							: 'glass text-slate-text hover:text-white hover:border-primary/30 border border-transparent'
					}`}
				>
					{#if option === 'All'}
						{i18n.t.common.all}
					{:else}
						{@const Icon = categoryIcon[option as ProjectCategory]}
						<Icon size={14} class="mr-1.5 opacity-70" /> {option}
					{/if}
				</button>
			{/each}
		</div>

		<!-- Projects Grid -->
		<div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
			{#each filteredProjects as project (project.id)}
				{@const ProjectIcon = categoryIcon[project.category as ProjectCategory]}
				<Card class="overflow-hidden group" hoverable href={project.link}>
					<!-- Top accent gradient -->
					<div
						class={`h-1.5 bg-gradient-to-r ${categoryGradient[project.category as ProjectCategory]}`}
					></div>

					<!-- Image Placeholder -->
					<div class="relative h-44 bg-brand-700 overflow-hidden">
						<div class="absolute inset-0 flex items-center justify-center">
							<div class="opacity-20 select-none">
								<ProjectIcon size={48} />
							</div>
						</div>
						<!-- Shimmer overlay on hover -->
						<div
							class="absolute inset-0 bg-gradient-to-t from-brand-800 via-transparent to-transparent opacity-70"
						></div>
						<!-- Category badge on image -->
						<div class="absolute top-3 left-3">
							<Badge variant={categoryBadgeVariant[project.category as ProjectCategory]}>
								{project.category}
							</Badge>
						</div>
					</div>

					<!-- Content -->
					<div class="p-5">
						<h3
							class="text-white font-bold text-base mb-2 group-hover:text-primary transition-colors duration-300 leading-tight"
						>
							{i18n.locale === 'en' && project.title_en ? project.title_en : project.title}
						</h3>
						<p class="text-slate-text text-xs leading-relaxed mb-4 line-clamp-2">
							{i18n.locale === 'en' && project.description_en
								? project.description_en
								: project.description}
						</p>

						<!-- Meta info -->
						<div class="brand-y-1.5 mb-4">
							{#if project.client}
								<div class="flex items-center gap-1.5 text-xs text-slate-text/70">
									<Building size={11} />
									<span>{project.client}</span>
								</div>
							{/if}
							{#if project.year}
								<div class="flex items-center gap-1.5 text-xs text-slate-text/70">
									<Calendar size={11} />
									<span>{project.year}</span>
								</div>
							{/if}
						</div>

						<!-- Tags -->
						<div class="flex flex-wrap gap-1.5">
							{#each project.tags.slice(0, 3) as tag}
								<span
									class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-text/60 text-[10px] font-mono border border-white/[0.04]"
								>
									<Tag size={8} />
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</Card>
			{/each}
		</div>

		<!-- Empty state -->
		{#if filteredProjects.length === 0}
			<div class="text-center py-20 text-slate-text">
				<div class="text-4xl mb-4">🔭</div>
				<p>{i18n.t.common.emptyPortfolio}</p>
			</div>
		{/if}
	</div>
</section>
