<script lang="ts">
	import { STATS_DATA } from '$lib/constants';
	import Card from '$lib/components/ui/Card.svelte';
	import { Target, Eye, Heart } from 'lucide-svelte';
</script>

<section id="about" class="py-24 lg:py-32 relative overflow-hidden">
	<!-- Decorative background -->
	<div class="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-glow/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

	<div class="container-max section-padding">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span class="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-cyan-glow border border-cyan-glow/30 bg-cyan-glow/5 mb-4 tracking-widest uppercase">
				Tentang Kami
			</span>
			<h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
				Membangun Masa Depan<br />
				<span class="gradient-text">Digital Indonesia</span>
			</h2>
			<p class="text-slate-text text-lg max-w-2xl mx-auto leading-relaxed">
				Terra Incognita Technology adalah studio teknologi yang berfokus pada solusi digital inovatif,
				membantu bisnis dari berbagai industri bertransformasi di era modern.
			</p>
		</div>

		<!-- Content Grid -->
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left: Description + Values -->
			<div class="space-y-6">
				<p class="text-slate-text leading-relaxed text-lg">
					Berdiri sejak 2019, kami telah dipercaya oleh puluhan perusahaan untuk merancang dan
					membangun solusi teknologi yang scalable, aman, dan berdampak nyata. Dari startup hingga
					korporat, kami menghadirkan pendekatan yang human-centered dan engineer-proven.
				</p>

				<div class="grid sm:grid-cols-3 gap-4">
					<!-- Mission -->
					<Card class="p-5 text-center" hoverable>
						<div class="w-10 h-10 rounded-xl bg-cyan-glow/10 flex items-center justify-center mx-auto mb-3">
							<Target size={20} class="text-cyan-glow" />
						</div>
						<h3 class="text-white font-semibold text-sm mb-1">Misi</h3>
						<p class="text-slate-text text-xs leading-relaxed">Solusi teknologi yang relevan dan berdampak nyata</p>
					</Card>

					<!-- Vision -->
					<Card class="p-5 text-center" hoverable>
						<div class="w-10 h-10 rounded-xl bg-neon-green/10 flex items-center justify-center mx-auto mb-3">
							<Eye size={20} class="text-neon-green" />
						</div>
						<h3 class="text-white font-semibold text-sm mb-1">Visi</h3>
						<p class="text-slate-text text-xs leading-relaxed">Menjadi mitra digital terpercaya di Asia Tenggara</p>
					</Card>

					<!-- Values -->
					<Card class="p-5 text-center" hoverable>
						<div class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
							<Heart size={20} class="text-purple-400" />
						</div>
						<h3 class="text-white font-semibold text-sm mb-1">Nilai</h3>
						<p class="text-slate-text text-xs leading-relaxed">Integritas, inovasi, dan kolaborasi tanpa batas</p>
					</Card>
				</div>
			</div>

			<!-- Right: Stats -->
			<div class="grid grid-cols-2 gap-4">
				{#each STATS_DATA as stat}
					<Card class="p-8 text-center" glowing>
						<div class="text-5xl font-black gradient-text glow-text mb-2">{stat.value}</div>
						<div class="text-slate-text text-sm font-medium">{stat.label}</div>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>
