import { id } from '$lib/i18n/id';
import { en } from '$lib/i18n/en';

type Language = 'id' | 'en';
export type Translations = typeof id;

class I18nStore {
	locale = $state<Language>('id');

	get t(): Translations {
		return this.locale === 'id' ? id : en;
	}

	toggle() {
		this.locale = this.locale === 'id' ? 'en' : 'id';
	}

	setLocale(lang: Language) {
		this.locale = lang;
	}
}

export const i18n = new I18nStore();
