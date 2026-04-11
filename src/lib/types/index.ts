/**
 * Terra Incognita Technology – TypeScript Type Definitions
 * Semua interface yang digunakan di seluruh aplikasi
 */

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
	label: string;
	href: string;
}

// ─── Projects / Portfolio ─────────────────────────────────────────────────────

export type ProjectCategory = 'Farming' | 'Hotel' | 'Education' | 'Financial' | 'Other';

export interface Project {
	id: number;
	title: string;
	description: string;
	category: ProjectCategory;
	imageUrl: string;
	tags: string[];
	year?: number;
	client?: string;
}

// ─── Services ─────────────────────────────────────────────────────────────────

export interface Service {
	title: string;
	description: string;
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
	value: string;
	label: string;
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
