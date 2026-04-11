<script lang="ts">
	import { CONTACT_INFO } from '$lib/constants';
	import type { ContactFormData } from '$lib/types';
	import Card from '$lib/components/ui/Card.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-svelte';

	let formData = $state<ContactFormData>({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let isSubmitting = $state(false);
	let isSubmitted = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		// Simulate form submission (static site – no backend)
		await new Promise((resolve) => setTimeout(resolve, 1500));
		isSubmitting = false;
		isSubmitted = true;
	}
</script>

<section id="contact" class="py-24 lg:py-32 relative bg-space-800/30">
	<div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent"></div>

	<!-- Decorative blob -->
	<div class="absolute right-0 top-1/2 w-[350px] h-[350px] bg-cyan-glow/[0.04] rounded-full blur-[100px] pointer-events-none"></div>

	<div class="container-max section-padding">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span class="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-neon-green border border-neon-green/30 bg-neon-green/5 mb-4 tracking-widest uppercase">
				Kontak
			</span>
			<h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
				Siap Memulai<br />
				<span class="gradient-text">Proyek Bersama?</span>
			</h2>
			<p class="text-slate-text text-lg max-w-xl mx-auto leading-relaxed">
				Ceritakan tantangan bisnis Anda. Tim kami siap merancang solusi yang tepat sasaran.
			</p>
		</div>

		<div class="grid lg:grid-cols-5 gap-8">
			<!-- Left: Contact Info -->
			<div class="lg:col-span-2 space-y-4">
				<!-- Email -->
				<Card class="p-5 flex items-start gap-4" hoverable>
					<div class="w-10 h-10 rounded-xl bg-cyan-glow/10 flex items-center justify-center flex-shrink-0">
						<Mail size={18} class="text-cyan-glow" />
					</div>
					<div>
						<p class="text-slate-text text-xs mb-1 font-mono uppercase tracking-wider">Email</p>
						<a href={`mailto:${CONTACT_INFO.email}`} class="text-white text-sm font-medium hover:text-cyan-glow transition-colors duration-200">
							{CONTACT_INFO.email}
						</a>
					</div>
				</Card>

				<!-- Phone -->
				<Card class="p-5 flex items-start gap-4" hoverable>
					<div class="w-10 h-10 rounded-xl bg-neon-green/10 flex items-center justify-center flex-shrink-0">
						<Phone size={18} class="text-neon-green" />
					</div>
					<div>
						<p class="text-slate-text text-xs mb-1 font-mono uppercase tracking-wider">Telepon</p>
						<a href={`tel:${CONTACT_INFO.phone}`} class="text-white text-sm font-medium hover:text-neon-green transition-colors duration-200">
							{CONTACT_INFO.phone}
						</a>
					</div>
				</Card>

				<!-- Address -->
				<Card class="p-5 flex items-start gap-4" hoverable>
					<div class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
						<MapPin size={18} class="text-purple-400" />
					</div>
					<div>
						<p class="text-slate-text text-xs mb-1 font-mono uppercase tracking-wider">Alamat</p>
						<p class="text-white text-sm font-medium leading-relaxed">
							{CONTACT_INFO.address}
						</p>
					</div>
				</Card>

				<!-- Why us card -->
				<Card class="p-6 mt-6" glowing>
					<h4 class="text-white font-semibold mb-3">Mengapa Terra Incognita?</h4>
					<ul class="space-y-2">
						{#each ['Respon cepat (< 24 jam)', 'Konsultasi awal gratis', 'Tim berpengalaman 5+ tahun', 'Support pasca-deployment'] as item}
							<li class="flex items-center gap-2 text-sm text-slate-text">
								<CheckCircle size={14} class="text-neon-green flex-shrink-0" />
								{item}
							</li>
						{/each}
					</ul>
				</Card>
			</div>

			<!-- Right: Contact Form -->
			<div class="lg:col-span-3">
				<Card class="p-8">
					{#if isSubmitted}
						<!-- Success State -->
						<div class="text-center py-12">
							<div class="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mx-auto mb-4">
								<CheckCircle size={32} class="text-neon-green" />
							</div>
							<h3 class="text-white font-bold text-xl mb-2">Pesan Terkirim!</h3>
							<p class="text-slate-text">Tim kami akan menghubungi Anda dalam 1×24 jam. Terima kasih!</p>
							<button
								onclick={() => { isSubmitted = false; formData = { name: '', email: '', subject: '', message: '' }; }}
								class="mt-6 text-cyan-glow text-sm hover:underline"
							>Kirim pesan lain</button>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="space-y-5">
							<!-- Name & Email row -->
							<div class="grid sm:grid-cols-2 gap-4">
								<div>
									<label for="contact-name" class="block text-xs font-medium text-slate-text mb-2 uppercase tracking-wider">Nama Lengkap *</label>
									<input
										id="contact-name"
										type="text"
										bind:value={formData.name}
										required
										placeholder="John Doe"
										class="w-full bg-space-700/60 border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-text/40 focus:outline-none focus:border-cyan-glow/50 focus:ring-1 focus:ring-cyan-glow/30 transition-all duration-200"
									/>
								</div>
								<div>
									<label for="contact-email" class="block text-xs font-medium text-slate-text mb-2 uppercase tracking-wider">Email *</label>
									<input
										id="contact-email"
										type="email"
										bind:value={formData.email}
										required
										placeholder="john@example.com"
										class="w-full bg-space-700/60 border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-text/40 focus:outline-none focus:border-cyan-glow/50 focus:ring-1 focus:ring-cyan-glow/30 transition-all duration-200"
									/>
								</div>
							</div>

							<!-- Subject -->
							<div>
								<label for="contact-subject" class="block text-xs font-medium text-slate-text mb-2 uppercase tracking-wider">Subjek</label>
								<input
									id="contact-subject"
									type="text"
									bind:value={formData.subject}
									placeholder="Apa yang ingin Anda diskusikan?"
									class="w-full bg-space-700/60 border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-text/40 focus:outline-none focus:border-cyan-glow/50 focus:ring-1 focus:ring-cyan-glow/30 transition-all duration-200"
								/>
							</div>

							<!-- Message -->
							<div>
								<label for="contact-message" class="block text-xs font-medium text-slate-text mb-2 uppercase tracking-wider">Pesan *</label>
								<textarea
									id="contact-message"
									bind:value={formData.message}
									required
									rows={5}
									placeholder="Ceritakan proyek atau kebutuhan Anda..."
									class="w-full bg-space-700/60 border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-text/40 focus:outline-none focus:border-cyan-glow/50 focus:ring-1 focus:ring-cyan-glow/30 transition-all duration-200 resize-none"
								></textarea>
							</div>

							<!-- Submit -->
							<Button type="submit" variant="primary" size="md" class="w-full" disabled={isSubmitting}>
								{#if isSubmitting}
									<span class="animate-spin w-4 h-4 border-2 border-space-900/30 border-t-space-900 rounded-full"></span>
									Mengirim...
								{:else}
									<Send size={16} />
									Kirim Pesan
								{/if}
							</Button>
						</form>
					{/if}
				</Card>
			</div>
		</div>
	</div>
</section>
