const skillModel = require('../models/skil')

module.exports = {
	index: index,
	show
	
	// optionally
	// index
}



function newSkill(req, res){


    res.render('skills/new') 
 }
 
 function show(req, res){
     console.log(req.params.id, " <- req.params.id")
 
     res.render('skills/show', {skill: skillModel.getOne(req.params.id) })
 }
 
 function index(req, res, next) {
	
	res.render('skills/index.ejs', {skills: skillModel.getAll() })
}
