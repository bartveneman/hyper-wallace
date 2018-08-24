'use strict';
const brandTeal = 'hsl(151.7, 66%, 47.3%)'
const yellow = 'hsl(42, 100%, 55%)'
const foregroundColor = 'hsl(198, 5%, 97.3%)'
const backgroundColor = 'hsl(203.3, 27.3%, 12.9%)'
const borderColor = '#222430'
const cursorColor = brandTeal
const selectionColor = 'hsla(335.9, 89%, 50%, .2)'
const blue = brandTeal
const red = 'hsl(0, 70%, 51%)'
const magenta = yellow
const green = '#61df0c'
const tabBorderColor = brandTeal
const cyan = 'hsl(42, 100%, 55%)'

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor,
	cursorColor,
	cursorAccentColor: backgroundColor,
	selectionColor,
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#f1f1f0',
		lightBlack: '#686868',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightWhite: foregroundColor,
		lightCyan: cyan
	},
	css: `
		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}

		/* Add a highlight line below the active tab */
		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background-color: ${tabBorderColor};
			transform: scaleX(0);
			will-change: transform;
		}

		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
		}

		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
			opacity: 0.6;
			will-change: opacity;
		}

		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}

		/* Allow custom css / overrides */
		${config.css}
	`
});

