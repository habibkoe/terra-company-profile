/**
 * Terra Incognita Technology – Static Data / Constants
 * Semua data statis yang digunakan di halaman utama
 */

import type { NavItem, Project, Service, Stat, ContactInfo } from '$lib/types';

// ─── Navigation Items ─────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
	{ label: 'Beranda', href: '#home' },
	{ label: 'Tentang Kami', href: '#about' },
	{ label: 'Layanan', href: '#services' },
	{ label: 'Portofolio', href: '#portfolio' },
	{ label: 'Kontak', href: '#contact' }
];

// ─── Statistics ───────────────────────────────────────────────────────────────

export const STATS_DATA: Stat[] = [
	{ value: '50+', label: 'Proyek Selesai' },
	{ value: '30+', label: 'Klien Puas' },
	{ value: '5+', label: 'Tahun Pengalaman' },
	{ value: '10+', label: 'Tim Profesional' }
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES_DATA: Service[] = [
	{
		title: 'Smart Farming System',
		description:
			'Solusi pertanian cerdas berbasis IoT dan analitik data real-time untuk memaksimalkan hasil panen dan efisiensi operasional pertanian modern.',
		iconName: 'Leaf',
		color: 'neon-green'
	},
	{
		title: 'Hotel Management System',
		description:
			'Platform manajemen hotel terintegrasi, mulai dari reservasi, check-in/out, housekeeping, hingga laporan keuangan dalam satu ekosistem digital.',
		iconName: 'Building2',
		color: 'cyan-glow'
	},
	{
		title: 'Education Technology',
		description:
			'Sistem informasi akademik dan platform e-learning adaptif yang mendukung proses belajar-mengajar di era digital dengan pengalaman yang menyenangkan.',
		iconName: 'GraduationCap',
		color: 'purple-400'
	},
	{
		title: 'Financial Technology',
		description:
			'Solusi fintech aman dan andal, mencakup sistem pembayaran digital, manajemen keuangan, dan laporan otomatis untuk bisnis skala apapun.',
		iconName: 'TrendingUp',
		color: 'yellow-400'
	},
	{
		title: 'Custom Web Development',
		description:
			'Pengembangan aplikasi web custom dengan performa tinggi menggunakan teknologi terkini, dari desain UI/UX hingga deployment dan maintenance.',
		iconName: 'Code2',
		color: 'cyan-glow'
	},
	{
		title: 'IoT & Automation',
		description:
			'Integrasi perangkat IoT dan sistem otomasi industri untuk meningkatkan efisiensi operasional dan monitoring real-time di berbagai sektor.',
		iconName: 'Cpu',
		color: 'neon-green'
	}
];

// ─── Projects / Portfolio ─────────────────────────────────────────────────────

export const PROJECTS_DATA: Project[] = [
	// Farming
	{
		id: 1,
		title: 'AgriSmart Dashboard',
		description:
			'Platform monitoring pertanian berbasis sensor IoT dengan dashboard real-time untuk 200+ hektar lahan pertanian di Jawa Tengah.',
		category: 'Farming',
		imageUrl: '/images/projects/agrismart.jpg',
		tags: ['IoT', 'Dashboard', 'SvelteKit', 'MQTT'],
		year: 2024,
		client: 'PT Agrindo Makmur'
	},
	{
		id: 2,
		title: 'HydroFarm Monitor',
		description:
			'Sistem pengelolaan nutrisi dan monitoring lingkungan untuk kebun hidroponik skala komersial dengan notifikasi mobile.',
		category: 'Farming',
		imageUrl: '/images/projects/hydrofarm.jpg',
		tags: ['Hydroponics', 'Mobile', 'React Native', 'IoT'],
		year: 2023,
		client: 'CV HydroGreen'
	},
	// Hotel
	{
		id: 3,
		title: 'LuxStay PMS',
		description:
			'Property Management System untuk jaringan hotel bintang 4 dengan fitur reservasi online, channel manager, dan analitik revenue.',
		category: 'Hotel',
		imageUrl: '/images/projects/luxstay.jpg',
		tags: ['PMS', 'Booking Engine', 'Laravel', 'Vue.js'],
		year: 2024,
		client: 'LuxStay Hotel Group'
	},
	{
		id: 4,
		title: 'Villa Smart Check-in',
		description:
			'Aplikasi self check-in touchless untuk villa resort dengan integrasi smart lock dan WhatsApp notification.',
		category: 'Hotel',
		imageUrl: '/images/projects/villa-checkin.jpg',
		tags: ['Smart Lock', 'PWA', 'WhatsApp API'],
		year: 2023,
		client: 'Bali Retreat Villas'
	},
	// Education
	{
		id: 5,
		title: 'EduConnect Platform',
		description:
			'Sistem informasi sekolah lengkap dengan modul e-learning, absensi digital, dan portal komunikasi orang tua-guru.',
		category: 'Education',
		imageUrl: '/images/projects/educonnect.jpg',
		tags: ['LMS', 'Absensi', 'SvelteKit', 'PostgreSQL'],
		year: 2024,
		client: 'Yayasan Pendidikan Nusantara'
	},
	{
		id: 6,
		title: 'SkillPath LMS',
		description:
			'Platform e-learning adaptif dengan AI-powered learning path untuk pelatihan karyawan korporat skala enterprise.',
		category: 'Education',
		imageUrl: '/images/projects/skillpath.jpg',
		tags: ['E-Learning', 'AI', 'Corporate Training'],
		year: 2023,
		client: 'Multinational Corp'
	},
	// Financial
	{
		id: 7,
		title: 'PayNow Gateway',
		description:
			'Payment gateway terintegrasi multi-channel (QRIS, virtual account, kartu kredit) dengan dashboard merchant real-time.',
		category: 'Financial',
		imageUrl: '/images/projects/paynow.jpg',
		tags: ['Payment Gateway', 'QRIS', 'API', 'Node.js'],
		year: 2024,
		client: 'Fintech Startup'
	},
	{
		id: 8,
		title: 'Treasury Management System',
		description:
			'Sistem manajemen keuangan dan likuiditas untuk koperasi dengan fitur laporan otomatis dan audit trail komprehensif.',
		category: 'Financial',
		imageUrl: '/images/projects/treasury.jpg',
		tags: ['Treasury', 'Koperasi', 'Laravel', 'Chart.js'],
		year: 2023,
		client: 'Koperasi Sejahtera Bersama'
	}
];

// ─── Contact Information ──────────────────────────────────────────────────────

export const CONTACT_INFO: ContactInfo = {
	email: 'hello@terraincognitatechnology.com',
	phone: '+62 812 3456 7890',
	address: 'Jl. Innovation Hub No. 42, Semarang, Jawa Tengah 50111'
};
