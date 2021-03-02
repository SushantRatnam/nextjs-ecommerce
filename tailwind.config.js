module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	// purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: {
					cardBorder: '#b5b5b5',
					cardBackground: '#f9f9f9',
					cardDescriptionBorderTop: '#E6E6E6',
				},
				black: {
					cardPrice: '#707070',
				},
				blue: {
					customBtn: '#2b67ae',
				},
			},
		},
		boxShadow: {
			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			card: '3px 3px 5px 0 rgb(0 0 0 / 22%)',
			cardHover: '6px 6px 8px 0 rgb(0 0 0 / 22%)',
			customBtn: '0 0 7px 2px #e0e0d9;',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			none: 'none',
		},
		flex: {
			1: '1 1 0%',
			auto: '1 1 auto',
			initial: '0 1 auto',
			none: 'none',
			'4-col': '1 1 22%',
		},
		maxWidth: {
			header: '6rem',
		},
		fontFamily: {
			html: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
