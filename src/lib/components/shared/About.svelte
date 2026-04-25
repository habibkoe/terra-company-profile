<script lang="ts">
	import { STATS_DATA } from '$lib/constants';
	import Card from '$lib/components/ui/Card.svelte';
	import { Target, Eye, Heart } from 'lucide-svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
</script>

<section id="about" class="py-24 lg:py-32 relative overflow-hidden">
	<!-- Decorative background -->
	<div
		class="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none"
	></div>

	<div class="container-max section-padding">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span
				class="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-primary border border-primary/30 bg-primary/5 mb-4 tracking-widest uppercase"
			>
				{i18n.t.about.badge}
			</span>
			<h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
				{@html i18n.t.about.title}
			</h2>
			<p class="text-slate-text text-lg max-w-2xl mx-auto leading-relaxed">
				{i18n.t.about.desc1}
			</p>
		</div>

		<!-- Content Grid -->
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left: Description + Values -->
			<div class="brand-y-6">
				<p class="text-slate-text leading-relaxed text-lg">
					{i18n.t.about.desc2}
				</p>

				<div class="grid sm:grid-cols-3 gap-4">
					<!-- Mission -->
					<Card class="p-5 text-center" hoverable>
						<div
							class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3"
						>
							<Target size={20} class="text-primary" />
						</div>
						<h3 class="text-white font-semibold text-sm mb-1">{i18n.t.about.missionTitle}</h3>
						<p class="text-slate-text text-xs leading-relaxed">{i18n.t.about.missionDesc}</p>
					</Card>

					<!-- Vision -->
					<Card class="p-5 text-center" hoverable>
						<div
							class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3"
						>
							<Eye size={20} class="text-secondary" />
						</div>
						<h3 class="text-white font-semibold text-sm mb-1">{i18n.t.about.visionTitle}</h3>
						<p class="text-slate-text text-xs leading-relaxed">{i18n.t.about.visionDesc}</p>
					</Card>

					<!-- Values -->
					<Card class="p-5 text-center" hoverable>
						<div
							class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-3"
						>
							<Heart size={20} class="text-purple-400" />
						</div>
						<h3 class="text-white font-semibold text-sm mb-1">{i18n.t.about.valuesTitle}</h3>
						<p class="text-slate-text text-xs leading-relaxed">{i18n.t.about.valuesDesc}</p>
					</Card>
				</div>
			</div>

			<!-- Right: Stats -->
			<div class="grid grid-cols-2 gap-4">
				{#each STATS_DATA as stat}
					<Card class="p-8 text-center" glowing>
						<div class="text-5xl font-black gradient-text glow-text mb-2">{stat.value}</div>
						<div class="text-slate-text text-sm font-medium">{i18n.t.about.stats[stat.id]}</div>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>
