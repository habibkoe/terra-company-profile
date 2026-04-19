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
		color: 'secondary'
	},
	{
		title: 'Hotel Management System',
		description:
			'Platform manajemen hotel terintegrasi, mulai dari reservasi, check-in/out, housekeeping, hingga laporan keuangan dalam satu ekosistem digital.',
		iconName: 'Building2',
		color: 'primary'
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
		color: 'primary'
	},
	{
		title: 'IoT & Automation',
		description:
			'Integrasi perangkat IoT dan sistem otomasi industri untuk meningkatkan efisiensi operasional dan monitoring real-time di berbagai sektor.',
		iconName: 'Cpu',
		color: 'secondary'
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
		title: 'E-Pfr',
		description:
			'Management Financial Record System',
		category: 'Financial',
		imageUrl: '/images/projects/educonnect.jpg',
		tags: ['Financial', 'Record', 'SvelteKit', 'PostgreSQL'],
		year: 2024,
		client: 'Legacy FA Pte Ltd'
	},
	{
		id: 6,
		title: 'Absensi Siswa',
		description:
			'Sistem informasi sekolah lengkap dengan modul e-learning, absensi digital, dan portal komunikasi orang tua-guru.',
		category: 'Education',
		imageUrl: '/images/projects/skillpath.jpg',
		tags: ['E-Learning', 'Absensi', 'SvelteKit', 'PostgreSQL'],
		year: 2024,
		client: 'SMPN 3 Tanjung'
	},
	// Financial
	{
		id: 7,
		title: 'Cake and Catering Perian',
		description:
			'Sistem informasi toko kue dan catering dengan fitur pemesanan online, pembayaran digital, dan manajemen inventaris.',
		category: 'E-Commerce',
		imageUrl: '/images/projects/paynow.jpg',
		tags: ['E-Commerce', 'QRIS', 'API', 'Node.js', 'Laravel', 'SvelteKit'],
		year: 2024,
		client: 'Cake and Catering Perian'
	},
	{
		id: 8,
		title: 'AwasiBoyo',
		description:
			'Sistem managemen pengawasan koperasi pemerintah kota surabaya',
		category: 'Government',
		imageUrl: '/images/projects/treasury.jpg',
		tags: ['Government', 'Koperasi', 'Laravel', 'Chart.js'],
		year: 2023,
		client: 'Pemerintah Kota Surabaya'
	}
];

// ─── Contact Information ──────────────────────────────────────────────────────

export const CONTACT_INFO: ContactInfo = {
	email: 'terraincognitatechnology@gmail.com',
	phone: '+62 895 0249 3848',
	address: 'Jl. Montong Gading - Perian, Pesanggrahan, Kec. Montong Gading, Kabupaten Lombok Timur, Nusa Tenggara Barat'
};
