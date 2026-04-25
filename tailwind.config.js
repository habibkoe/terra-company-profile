/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					950: '#0b1126',
					900: '#141c3a',
					800: '#1e2954',
					700: '#2c3b6e',
					600: '#374987'
				},
				primary: {
					400: '#db8b69',
					300: '#e5aa93',
					DEFAULT: '#cf6d46'
				},
				secondary: {
					DEFAULT: '#648eb8',
					cyan: '#374987'
				},
				slate: {
					text: '#a3b5ca'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			animation: {
				float: 'float 6s ease-in-out infinite',
				'float-slow': 'float 10s ease-in-out infinite',
				'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'spin-slow': 'spin 20s linear infinite',
				'gradient-shift': 'gradientShift 8s ease infinite'
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				pulseGlow: {
					'0%, 100%': { boxShadow: '0 0 20px rgba(207, 109, 70, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(207, 109, 70, 0.8)' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				gradientShift: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			backdropBlur: {
				xs: '2px'
			},
			backgroundSize: {
				'200%': '200% 200%'
			}
		}
	},
	plugins: []
};
