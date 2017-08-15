var local_app = function () {}

local_app.prototype.init = function (app) {


	app.set('view options', {layout: 'main.hbs'});

	app.get('/guys_team', function(req,res){
		enduro.api.temper.render('index', {layout:'index.hbs'}).then((output) =>
		{
			res.send(output);
		});
	})

	// app.get('/guys_team', function(req,res){
	// 	res.send('/guys_team/index');
	// })
}

module.exports = new local_app()