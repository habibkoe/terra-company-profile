/**
 * Terra Incognita Technology – Static Data / Constants
 * Semua data statis yang digunakan di halaman utama
 */

import type { NavItem, Project, Service, Stat, ContactInfo } from '$lib/types';

// ─── Navigation Items ─────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
	{ id: 'home', href: '#home' },
	{ id: 'about', href: '#about' },
	{ id: 'services', href: '#services' },
	{ id: 'portfolio', href: '#portfolio' },
	{ id: 'contact', href: '#contact' }
];

// ─── Statistics ───────────────────────────────────────────────────────────────

export const STATS_DATA: Stat[] = [
	{ value: '50+', id: 'projects' },
	{ value: '30+', id: 'clients' },
	{ value: '5+', id: 'experience' },
	{ value: '10+', id: 'team' }
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES_DATA: Service[] = [
	{
		title: 'Smart Farming System',
		title_en: 'Smart Farming System',
		description:
			'Solusi pertanian cerdas berbasis IoT dan analitik data real-time untuk memaksimalkan hasil panen dan efisiensi operasional pertanian modern.',
		description_en:
			'IoT-based smart farming solutions and real-time data analytics to maximize crop yields and modern agricultural operational efficiency.',
		iconName: 'Leaf',
		color: 'secondary'
	},
	{
		title: 'Hotel Management System',
		title_en: 'Hotel Management System',
		description:
			'Platform manajemen hotel terintegrasi, mulai dari reservasi, check-in/out, housekeeping, hingga laporan keuangan dalam satu ekosistem digital.',
		description_en:
			'Integrated hotel management platform, from reservations, check-in/out, housekeeping, to financial reports in a single digital ecosystem.',
		iconName: 'Building2',
		color: 'primary'
	},
	{
		title: 'Education Technology',
		title_en: 'Education Technology',
		description:
			'Sistem informasi akademik dan platform e-learning adaptif yang mendukung proses belajar-mengajar di era digital dengan pengalaman yang menyenangkan.',
		description_en:
			'Academic information systems and adaptive e-learning platforms supporting the digital era teaching and learning process with an enjoyable experience.',
		iconName: 'GraduationCap',
		color: 'purple-400'
	},
	{
		title: 'Financial Technology',
		title_en: 'Financial Technology',
		description:
			'Solusi fintech aman dan andal, mencakup sistem pembayaran digital, manajemen keuangan, dan laporan otomatis untuk bisnis skala apapun.',
		description_en:
			'Secure and reliable fintech solutions, covering digital payment systems, financial management, and automated reporting for any scale business.',
		iconName: 'TrendingUp',
		color: 'yellow-400'
	},
	{
		title: 'Custom Web Development',
		title_en: 'Custom Web Development',
		description:
			'Pengembangan aplikasi web custom dengan performa tinggi menggunakan teknologi terkini, dari desain UI/UX hingga deployment dan maintenance.',
		description_en:
			'High-performance custom web application development using latest technologies, from UI/UX design to deployment and maintenance.',
		iconName: 'Code2',
		color: 'primary'
	},
	{
		title: 'IoT & Automation',
		title_en: 'IoT & Automation',
		description:
			'Integrasi perangkat IoT dan sistem otomasi industri untuk meningkatkan efisiensi operasional dan monitoring real-time di berbagai sektor.',
		description_en:
			'Integration of IoT devices and industrial automation systems to improve operational efficiency and real-time monitoring across sectors.',
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
		title_en: 'AgriSmart Dashboard',
		description:
			'Platform monitoring pertanian berbasis sensor IoT dengan dashboard real-time untuk 200+ hektar lahan pertanian di Jawa Tengah.',
		description_en:
			'IoT sensor-based agricultural monitoring platform with a real-time dashboard for 200+ hectares of farmland in Central Java.',
		category: 'Farming',
		imageUrl: '/images/projects/agrismart.jpg',
		tags: ['IoT', 'Dashboard', 'SvelteKit', 'MQTT'],
		year: 2024,
		client: 'PT Agrindo Makmur',
		link: '#'
	},
	{
		id: 2,
		title: 'HydroFarm Monitor',
		title_en: 'HydroFarm Monitor',
		description:
			'Sistem pengelolaan nutrisi dan monitoring lingkungan untuk kebun hidroponik skala komersial dengan notifikasi mobile.',
		description_en:
			'Nutrient management and environmental monitoring system for commercial-scale hydroponic farms with mobile notifications.',
		category: 'Farming',
		imageUrl: '/images/projects/hydrofarm.jpg',
		tags: ['Hydroponics', 'Mobile', 'React Native', 'IoT'],
		year: 2023,
		client: 'CV HydroGreen',
		link: '#'
	},
	// Hotel
	{
		id: 3,
		title: 'Han Pollaris Construction',
		title_en: 'Han Pollaris Construction',
		description:
			'Sistem informasi manajemen proyek konstruksi dengan fitur manajemen tugas, company profile.',
		description_en:
			'Construction project management information system with task management features and company profile.',
		category: 'Construction',
		imageUrl: '/images/projects/han-pollaris.jpg',
		tags: ['Construction', 'Project Management', 'Laravel', 'Vanilla JS'],
		year: 2024,
		client: 'Han Pollaris Konsultan',
		link: 'https://www.hanpollariskonsultan.com/'
	},
	{
		id: 4,
		title: 'Villa Smart Check-in',
		title_en: 'Villa Smart Check-in',
		description:
			'Aplikasi self check-in touchless untuk villa resort dengan integrasi smart lock dan WhatsApp notification.',
		description_en:
			'Touchless self check-in application for villa resorts with smart lock integration and WhatsApp notification.',
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
		title_en: 'E-Pfr',
		description: 'Management Financial Record System',
		description_en: 'Management Financial Record System',
		category: 'Financial',
		imageUrl: '/images/projects/educonnect.jpg',
		tags: ['Financial', 'Record', 'SvelteKit', 'PostgreSQL'],
		year: 2024,
		client: 'Legacy FA Pte Ltd',
		link: '#'
	},
	{
		id: 6,
		title: 'Absensi Siswa',
		title_en: 'Student Attendance',
		description:
			'Sistem informasi sekolah lengkap dengan modul e-learning, absensi digital, dan portal komunikasi orang tua-guru.',
		description_en:
			'Complete school information system with e-learning modules, digital attendance, and parent-teacher communication portal.',
		category: 'Education',
		imageUrl: '/images/projects/skillpath.jpg',
		tags: ['E-Learning', 'Absensi', 'SvelteKit', 'PostgreSQL'],
		year: 2024,
		client: 'SMPN 3 Tanjung',
		link: 'https://absensi-siswa-smp-klu.vercel.app'
	},
	// Financial
	{
		id: 7,
		title: 'Cake and Catering Perian',
		title_en: 'Perian Cake and Catering',
		description:
			'Sistem informasi toko kue dan catering dengan fitur pemesanan online, pembayaran digital, dan manajemen inventaris.',
		description_en:
			'Bakery and catering information system with online ordering, digital payments, and inventory management features.',
		category: 'E-Commerce',
		imageUrl: '/images/projects/paynow.jpg',
		tags: ['E-Commerce', 'QRIS', 'API', 'Node.js', 'Laravel', 'SvelteKit'],
		year: 2024,
		client: 'Cake and Catering Perian',
		link: '#'
	},
	{
		id: 8,
		title: 'AwasiBoyo',
		title_en: 'AwasiBoyo',
		description: 'Sistem managemen pengawasan koperasi pemerintah kota surabaya',
		description_en: 'Cooperative supervision management system for the Surabaya city government',
		category: 'Government',
		imageUrl: '/images/projects/treasury.jpg',
		tags: ['Government', 'Koperasi', 'Laravel', 'Chart.js'],
		year: 2023,
		client: 'Pemerintah Kota Surabaya',
		link: 'https://awasiboyo.surabaya.go.id/'
	}
];

// ─── Contact Information ──────────────────────────────────────────────────────

export const CONTACT_INFO: ContactInfo = {
	email: 'terraincognitatechnology@gmail.com',
	phone: '+62 895 0249 3848',
	address:
		'Jl. Montong Gading - Perian, Pesanggrahan, Kec. Montong Gading, Kabupaten Lombok Timur, Nusa Tenggara Barat'
};
