<script lang="ts">
	import { ExternalLink, Briefcase, MessageCircle, Mail } from 'lucide-svelte';
	import logo from '$lib/assets/logo.png';
	import { NAV_ITEMS } from '$lib/constants';

	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ href: 'https://github.com/terraincognitatechnology', label: 'GitHub', Icon: ExternalLink },
		{ href: 'https://www.linkedin.com/in/terraincognitatechnology/', label: 'LinkedIn', Icon: Briefcase },
		{ href: 'https://x.com/incognita4722', label: 'Twitter', Icon: MessageCircle },
		{ href: 'mailto:terraincognitatechnology@gmail.com', label: 'Email', Icon: Mail }
	];

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<footer class="relative bg-brand-950 border-t border-white/[0.06]">
	<!-- Decorative top glow -->
	<div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

	<div class="container-max section-padding py-14">
		<div class="grid md:grid-cols-3 gap-10 mb-10">
			<!-- Brand -->
			<div>
				<button onclick={scrollToTop} class="flex items-center gap-2.5 mb-4 group">
					<div class="w-9 h-9 rounded-lg overflow-hidden">
						<img src={logo} alt="Terra Incognita Technology Logo" class="w-full h-full object-cover" />
					</div>
					<div class="text-left">
						<span class="block font-bold text-white leading-none">Terra Incognita</span>
						<span class="block text-[10px] text-primary font-mono tracking-[0.2em] uppercase">Technology</span>
					</div>
				</button>
				<p class="text-slate-text text-sm leading-relaxed max-w-sm">
					Studio teknologi yang berkomitmen merancang solusi digital inovatif untuk transformasi bisnis Indonesia.
				</p>

				<!-- Social Links -->
				<div class="flex gap-3 mt-5">
					{#each socialLinks as { href, label, Icon }}
						<a
							{href}
							aria-label={label}
							target="_blank"
							rel="noopener noreferrer"
							class="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-text hover:text-primary hover:border-primary/30 transition-all duration-300"
						>
							<Icon size={15} />
						</a>
					{/each}
				</div>
			</div>

			<!-- Navigation links -->
			<div>
				<h4 class="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Navigasi</h4>
				<ul class="brand-y-2.5">
					{#each NAV_ITEMS as item}
						<li>
							<a
								href={item.href}
								class="text-slate-text text-sm hover:text-primary transition-colors duration-200"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Services summary -->
			<div>
				<h4 class="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Layanan</h4>
				<ul class="brand-y-2.5">
					{#each ['Smart Farming System', 'Hotel Management', 'Education Technology', 'Financial Technology', 'Web Development', 'IoT & Automation'] as service}
						<li class="text-slate-text text-sm hover:text-primary transition-colors duration-200 cursor-default">
							{service}
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
			<p class="text-slate-text/60 text-xs font-mono">
				&copy; {currentYear} Terra Incognita Technology. All rights reserved.
			</p>
			<p class="text-slate-text/40 text-xs">
				Built with <span class="text-primary">Us</span> &bull; Deployed with love 🚀
			</p>
		</div>
	</div>
</footer>
