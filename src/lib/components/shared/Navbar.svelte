<script lang="ts">
	import { NAV_ITEMS } from '$lib/constants';
	import { Menu, X, Globe } from 'lucide-svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import logo from '$lib/assets/logo.png';

	let isMenuOpen = $state(false);
	let isScrolled = $state(false);

	$effect(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleNavClick(href: string) {
		isMenuOpen = false;
		const el = document.querySelector(href);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<header
	class={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-900/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}
>
	<nav class="container-max section-padding">
		<div class="flex items-center justify-between h-16 lg:h-20">
			<!-- Logo -->
			<a
				href="#home"
				class="flex items-center gap-2.5 group"
				onclick={() => handleNavClick('#home')}
			>
				<div
					class="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(207, 109, 70,0.4)] group-hover:shadow-[0_0_25px_rgba(207, 109, 70,0.6)] transition-all duration-300"
				>
					<img
						src={logo}
						alt="Terra Incognita Technology Logo"
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="hidden sm:block">
					<span class="font-bold text-lg text-white leading-none">Terra Incognita</span>
					<span
						class="block text-[10px] text-primary font-mono tracking-[0.2em] uppercase leading-none mt-0.5"
						>Technology</span
					>
				</div>
			</a>

			<!-- Desktop Nav -->
			<ul class="hidden lg:flex items-center gap-1">
				{#each NAV_ITEMS as item}
					<li>
						<button
							onclick={() => handleNavClick(item.href)}
							class="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200 font-medium"
						>
							{i18n.t.nav[item.id]}
						</button>
					</li>
				{/each}
			</ul>

			<!-- CTA Desktop -->
			<div class="hidden lg:flex items-center gap-3">
				<!-- Language Switcher -->
				<button
					onclick={() => i18n.toggle()}
					class="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors duration-200 font-medium text-sm border border-transparent hover:border-white/10"
					aria-label="Toggle Language"
				>
					<Globe size={16} />
					<span class="w-5 text-center">{i18n.locale.toUpperCase()}</span>
				</button>
				<button
					onclick={() => handleNavClick('#contact')}
					class="px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-primary-400 text-brand-900 hover:shadow-[0_0_25px_rgba(207, 109, 70,0.5)] hover:scale-[1.02] transition-all duration-300"
				>
					{i18n.t.common.contactUs}
				</button>
			</div>

			<!-- Mobile Hamburger -->
			<button
				onclick={toggleMenu}
				class="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
				aria-label="Toggle menu"
				aria-expanded={isMenuOpen}
			>
				{#if isMenuOpen}
					<X size={22} />
				{:else}
					<Menu size={22} />
				{/if}
			</button>
		</div>
	</nav>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div class="lg:hidden bg-brand-800/95 backdrop-blur-xl border-t border-white/[0.06]">
			<ul class="section-padding py-4 brand-y-1">
				{#each NAV_ITEMS as item}
					<li>
						<button
							onclick={() => handleNavClick(item.href)}
							class="w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-200 font-medium"
						>
							{i18n.t.nav[item.id]}
						</button>
					</li>
				{/each}
				<li class="pt-2">
					<button
						onclick={() => handleNavClick('#contact')}
						class="w-full px-4 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-primary-400 text-brand-900 text-center block transition-all duration-300"
					>
						{i18n.t.common.contactUs}
					</button>
				</li>
				<li class="pt-2">
					<button
						onclick={() => {
							i18n.toggle();
							isMenuOpen = false;
						}}
						class="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-300"
					>
						<Globe size={16} />
						Ganti Bahasa ({i18n.locale.toUpperCase()} -> {i18n.locale === 'id' ? 'EN' : 'ID'})
					</button>
				</li>
			</ul>
		</div>
	{/if}
</header>
