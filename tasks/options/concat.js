module.exports = {
	scripts: {
		src: [
			"scripts/wsu_autocomplete.js",
			"scripts/ui.spine.js",
			"scripts/ui.spine.framework.js",
			"scripts/ui.spine.search.js",
			"scripts/ui.spine.social.js",
			"scripts/spine.js"
		],
		dest: "<%= config.build %>/spine.js"
	}
};