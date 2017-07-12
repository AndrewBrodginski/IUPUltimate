require.config({
	baseUrl: '/assets/',

	paths: {
		'photo1':'img/photo1.jpeg'
		// 'jquery': 'vendor/jquery/dist/jquery.min',
	},
})

require(['jquery'], function ($) {
	$(document).ready(function () {
		console.log('requirejs ready to use')
	})
})
