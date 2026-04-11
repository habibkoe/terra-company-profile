<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { ArrowRight, ChevronDown } from 'lucide-svelte';
</script>

<section
	id="home"
	class="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid-bg"
>
	<!-- Animated Background Blobs -->
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-glow/[0.06] blur-[120px] animate-float"
		></div>
		<div
			class="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-neon-green/[0.04] blur-[100px] animate-float-slow"
		></div>
		<div
			class="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-glow/[0.04] blur-[80px] animate-float"
			style="animation-delay: 3s;"
		></div>
	</div>

	<!-- Floating Orbit Circles -->
	<div class="absolute inset-0 pointer-events-none flex items-center justify-center">
		<div
			class="absolute w-[500px] h-[500px] rounded-full border border-cyan-glow/[0.07] animate-spin-slow"
		></div>
		<div
			class="absolute w-[700px] h-[700px] rounded-full border border-neon-green/[0.04] animate-spin-slow"
			style="animation-direction: reverse; animation-duration: 30s;"
		></div>
		<!-- Orbit dot -->
		<div
			class="absolute w-3 h-3 rounded-full bg-cyan-glow shadow-[0_0_10px_rgba(0,212,255,0.8)] animate-spin-slow"
			style="transform-origin: 250px; animation-duration: 20s;"
		></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 container-max section-padding text-center">
		<!-- Badge -->
		<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-glow/20 mb-8 animate-fade-in">
			<span class="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
			<span class="text-sm text-slate-300 font-mono tracking-wider">Inovasi Digital &bull; Indonesia</span>
		</div>

		<!-- Headline -->
		<h1
			class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-6 animate-slide-up"
		>
			<span class="block text-white">Terra</span>
			<span class="block gradient-text glow-text">Incognita</span>
			<span class="block text-white">Technology</span>
		</h1>

		<!-- Tagline -->
		<p
			class="text-lg sm:text-xl lg:text-2xl text-slate-text max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
			style="animation-delay: 0.2s;"
		>
			Kami merancang solusi teknologi yang mengubah cara bisnis bekerja —
			dari <span class="text-neon-green font-semibold">pertanian cerdas</span>,
			<span class="text-cyan-glow font-semibold">manajemen hotel</span>,
			hingga <span class="text-cyan-300 font-semibold">platform edukasi</span> digital.
		</p>

		<!-- CTA Buttons -->
		<div
			class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
			style="animation-delay: 0.4s;"
		>
			<Button href="#portfolio" variant="primary" size="lg">
				Lihat Portofolio
				<ArrowRight size={20} />
			</Button>
			<Button href="#contact" variant="outline" size="lg">
				Diskusi Proyek
			</Button>
		</div>

		<!-- Tech Stack Pills -->
		<div
			class="flex flex-wrap gap-2 justify-center mt-14 animate-fade-in"
			style="animation-delay: 0.6s;"
		>
			{#each ['SvelteKit', 'TypeScript', 'IoT', 'Laravel', 'PostgreSQL', 'Node.js', 'React', 'Flutter'] as tech}
				<span
					class="px-3 py-1.5 text-xs font-mono text-slate-text/70 border border-white/[0.06] rounded-full hover:text-cyan-glow hover:border-cyan-glow/30 transition-all duration-300 cursor-default"
				>
					{tech}
				</span>
			{/each}
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
		<a href="#about" aria-label="Scroll ke bawah">
			<ChevronDown size={28} class="text-slate-text/40 hover:text-cyan-glow transition-colors duration-300" />
		</a>
	</div>
</section>
