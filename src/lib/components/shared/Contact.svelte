<script lang="ts">
	import { CONTACT_INFO } from '$lib/constants';
	import type { ContactFormData } from '$lib/types';
	import Card from '$lib/components/ui/Card.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-svelte';
	import { i18n } from '$lib/stores/i18n.svelte';

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

<section id="contact" class="py-24 lg:py-32 relative bg-brand-800/30">
	<div
		class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
	></div>

	<!-- Decorative blob -->
	<div
		class="absolute right-0 top-1/2 w-[350px] h-[350px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none"
	></div>

	<div class="container-max section-padding">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span
				class="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-secondary border border-secondary/30 bg-secondary/5 mb-4 tracking-widest uppercase"
			>
				{i18n.t.contact.badge}
			</span>
			<h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
				{@html i18n.t.contact.title}
			</h2>
			<p class="text-slate-text text-lg max-w-xl mx-auto leading-relaxed">
				{i18n.t.contact.desc}
			</p>
		</div>

		<div class="grid lg:grid-cols-5 gap-8">
			<!-- Left: Contact Info -->
			<div class="lg:col-span-2 brand-y-4">
				<!-- Email -->
				<Card class="p-5 flex items-start gap-4" hoverable>
					<div
						class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
					>
						<Mail size={18} class="text-primary" />
					</div>
					<div>
						<p class="text-slate-text text-xs mb-1 font-mono uppercase tracking-wider">
							{i18n.t.contact.emailTitle}
						</p>
						<a
							href={`mailto:${CONTACT_INFO.email}`}
							class="text-white text-sm font-medium hover:text-primary transition-colors duration-200"
						>
							{CONTACT_INFO.email}
						</a>
					</div>
				</Card>

				<!-- Phone -->
				<Card class="p-5 flex items-start gap-4 mt-6" hoverable>
					<div
						class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0"
					>
						<Phone size={18} class="text-secondary" />
					</div>
					<div>
						<p class="text-slate-text text-xs mb-1 font-mono uppercase tracking-wider">
							{i18n.t.contact.phoneTitle}
						</p>
						<a
							href={`tel:${CONTACT_INFO.phone}`}
							class="text-white text-sm font-medium hover:text-secondary transition-colors duration-200"
						>
							{CONTACT_INFO.phone}
						</a>
					</div>
				</Card>

				<!-- Address -->
				<Card class="p-5 flex items-start gap-4 mt-6" hoverable>
					<div
						class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0"
					>
						<MapPin size={18} class="text-purple-400" />
					</div>
					<div>
						<p class="text-slate-text text-xs mb-1 font-mono uppercase tracking-wider">
							{i18n.t.contact.addressTitle}
						</p>
						<p class="text-white text-sm font-medium leading-relaxed">
							{CONTACT_INFO.address}
						</p>
					</div>
				</Card>

				<!-- Why us card -->
				<Card class="p-6 mt-6" glowing>
					<h4 class="text-white font-semibold mb-3">{i18n.t.contact.whyUsTitle}</h4>
					<ul class="brand-y-2">
						{#each i18n.t.contact.whyUsPoints as item}
							<li class="flex items-center gap-2 text-sm text-slate-text">
								<CheckCircle size={14} class="text-secondary flex-shrink-0" />
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
							<div
								class="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4"
							>
								<CheckCircle size={32} class="text-secondary" />
							</div>
							<h3 class="text-white font-bold text-xl mb-2">{i18n.t.contact.successTitle}</h3>
							<p class="text-slate-text">
								{i18n.t.contact.successDesc}
							</p>
							<button
								onclick={() => {
									isSubmitted = false;
									formData = { name: '', email: '', subject: '', message: '' };
								}}
								class="mt-6 text-primary text-sm hover:underline"
								>{i18n.t.contact.sendAnother}</button
							>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="brand-y-5">
							<!-- Name & Email row -->
							<div class="grid sm:grid-cols-2 gap-4 mb-6">
								<Input
									id="contact-name"
									label={i18n.t.contact.formName}
									type="text"
									bind:value={formData.name}
									required
									placeholder="John Doe"
								/>
								<Input
									id="contact-email"
									label={i18n.t.contact.formEmail}
									type="email"
									bind:value={formData.email}
									required
									placeholder="john@example.com"
								/>
							</div>

							<!-- Subject -->
							<div class="mb-6">
								<Input
									id="contact-subject"
									label={i18n.t.contact.formSubject}
									type="text"
									bind:value={formData.subject}
									placeholder={i18n.t.contact.formSubjectPlaceholder}
								/>
							</div>
							<!-- Message -->
							<div class="mb-6">
								<Input
									id="contact-message"
									label={i18n.t.contact.formMessage}
									type="textarea"
									bind:value={formData.message}
									required
									rows={5}
									placeholder={i18n.t.contact.formMessagePlaceholder}
								/>
							</div>

							<!-- Submit -->
							<Button
								type="submit"
								variant="primary"
								size="md"
								class="w-full"
								disabled={isSubmitting}
							>
								{#if isSubmitting}
									<span
										class="animate-spin w-4 h-4 border-2 border-brand-900/30 border-t-brand-900 rounded-full"
									></span>
									{i18n.t.contact.btnSending}
								{:else}
									<Send size={16} />
									{i18n.t.contact.btnSubmit}
								{/if}
							</Button>
						</form>
					{/if}
				</Card>
			</div>
		</div>
	</div>
</section>
