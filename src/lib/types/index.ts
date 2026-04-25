/**
 * Terra Incognita Technology – TypeScript Type Definitions
 * Semua interface yang digunakan di seluruh aplikasi
 */

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
	id: 'home' | 'about' | 'services' | 'portfolio' | 'contact';
	href: string;
}

// ─── Projects / Portfolio ─────────────────────────────────────────────────────

export type ProjectCategory =
	| 'Farming'
	| 'Hotel'
	| 'Education'
	| 'Financial'
	| 'Government'
	| 'E-Commerce'
	| 'Construction'
	| 'Other';

export interface Project {
	id: number;
	title: string;
	title_en?: string;
	description: string;
	description_en?: string;
	category: ProjectCategory;
	imageUrl: string;
	tags: string[];
	year?: number;
	client?: string;
	link?: string;
}

// ─── Services ─────────────────────────────────────────────────────────────────

export interface Service {
	title: string;
	title_en?: string;
	description: string;
	description_en?: string;
	iconName: string; // Lucide icon identifier
	color?: string; // Tailwind color class untuk accent
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
	name: string;
	role: string;
	avatarUrl: string;
	bio?: string;
}

// ─── Statistics ───────────────────────────────────────────────────────────────

export interface Stat {
	id: 'projects' | 'clients' | 'experience' | 'team';
	value: string;
	suffix?: string;
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export interface ContactInfo {
	email: string;
	phone: string;
	address: string;
}

export interface ContactFormData {
	name: string;
	email: string;
	message: string;
	subject?: string;
}
