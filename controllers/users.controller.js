const {createUser} = require("../queries/users.queries");

exports.signupForm = async(req, res, next) =>{
    res.render("users/signup-form",{ errors : null});
}
exports.signup = async (req, res, next) =>{
    const body = req.body;
    try{
        const user = await createUser(body);
        res.redirect('/')
    }catch(e){
        res.render('users/signup-form', {errors: [e.message]});
    }
}


   
            