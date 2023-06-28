const SkillModel = require('../models/skill')

module.exports = {
	index: index,
	show,
	new: newSkill,
	create
	
	// optionally
	// index
}
function create(req, res){
	console.log(req.body, " < _ contents of our form");
	SkillModel.create(req.body)
	res.redirect('/skills');
}


function newSkill(req, res){


    res.render('skills/new') 
 }
 
 function show(req, res){
     console.log(req.params.id, " <- req.params.id")
 
     res.render('skills/show', {skill: SkillModel.getOne(req.params.id) })
 }
 
 function index(req, res, next) {
	
	res.render('skills/index.ejs', {skills: SkillModel.getAll() })
}
