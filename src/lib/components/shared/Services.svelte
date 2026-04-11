<script lang="ts">
	import { SERVICES_DATA } from '$lib/constants';
	import Card from '$lib/components/ui/Card.svelte';
	import {
		Leaf,
		Building2,
		GraduationCap,
		TrendingUp,
		Code2,
		Cpu,
		ArrowRight
	} from 'lucide-svelte';

	// Map iconName string → Lucide component
	const iconMap: Record<string, typeof Leaf> = {
		Leaf,
		Building2,
		GraduationCap,
		TrendingUp,
		Code2,
		Cpu
	};

	const colorMap: Record<string, string> = {
		'neon-green': 'bg-neon-green/10 text-neon-green shadow-[0_0_20px_rgba(57,255,20,0.15)]',
		'cyan-glow': 'bg-cyan-glow/10 text-cyan-glow shadow-[0_0_20px_rgba(0,212,255,0.15)]',
		'purple-400': 'bg-purple-500/10 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.15)]',
		'yellow-400': 'bg-yellow-500/10 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.15)]'
	};
</script>

<section id="services" class="py-24 lg:py-32 relative bg-space-800/30">
	<!-- Top separator line -->
	<div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent"></div>
	<!-- Bottom separator line -->
	<div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent"></div>

	<div class="container-max section-padding">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span class="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-neon-green border border-neon-green/30 bg-neon-green/5 mb-4 tracking-widest uppercase">
				Layanan Kami
			</span>
			<h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
				Solusi Teknologi<br />
				<span class="gradient-text">Untuk Setiap Industri</span>
			</h2>
			<p class="text-slate-text text-lg max-w-2xl mx-auto leading-relaxed">
				Kami menghadirkan teknologi yang adaptif dan terukur, dirancang khusus untuk menjawab
				tantangan unik di setiap sektor bisnis.
			</p>
		</div>

		<!-- Services Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each SERVICES_DATA as service, i}
				{@const IconComponent = iconMap[service.iconName]}
				{@const colorClass = colorMap[service.color ?? 'cyan-glow']}

				<Card
					class="p-7 group cursor-pointer"
					hoverable
				>
					<!-- Icon -->
					<div class={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
						<IconComponent size={22} />
					</div>

					<!-- Title -->
					<h3 class="text-white font-bold text-lg mb-3 group-hover:text-cyan-glow transition-colors duration-300">
						{service.title}
					</h3>

					<!-- Description -->
					<p class="text-slate-text text-sm leading-relaxed mb-4">
						{service.description}
					</p>

					<!-- Learn More link -->
					<div class="flex items-center gap-1.5 text-xs text-cyan-glow/60 group-hover:text-cyan-glow transition-colors duration-300">
						<span class="font-medium">Pelajari lebih lanjut</span>
						<ArrowRight size={14} class="group-hover:translate-x-1 transition-transform duration-300" />
					</div>
				</Card>
			{/each}
		</div>
	</div>
</section>
