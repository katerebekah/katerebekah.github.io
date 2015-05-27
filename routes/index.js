exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' });
};

exports.partials = function(req, res){
	res.render('partials/' + rep.params.name)
};