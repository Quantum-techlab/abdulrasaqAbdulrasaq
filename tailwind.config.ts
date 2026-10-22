
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1200px'
			}
		},
		extend: {
			// One typeface system-wide (Halyard Display substitute → Inter)
			fontFamily: {
				'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'heading': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'mono': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'legal': ['Arial', 'system-ui', 'sans-serif'],
			},
			letterSpacing: {
				'tight-heading': '0',
			},
			colors: {
				// Semantic roles (swap under .light)
				canvas: 'rgb(var(--canvas) / <alpha-value>)',
				ink: 'rgb(var(--ink) / <alpha-value>)',
				surface: 'rgb(var(--surface) / <alpha-value>)',
				'on-surface': 'rgb(var(--on-surface) / <alpha-value>)',
				line: 'rgb(var(--line) / <alpha-value>)',
				'line-strong': 'rgb(var(--line-strong) / <alpha-value>)',
				ember: 'rgb(var(--ember) / <alpha-value>)',
				// Raw DESIGN.md tokens
				'warm-cream': '#ffedd7',
				'walnut-shadow': '#100904',
				'bark-brown': '#382416',
				'cork-border': '#40372e',
				driftwood: '#6c5f51',
				'ember-accent': '#dc5000',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
			},
			borderRadius: {
				card: '12px',
				pill: '36px',
				outlined: '22.5px',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
