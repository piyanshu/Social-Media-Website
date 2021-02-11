const User = require('../models/user');
module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'Profile'
    });
};
module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up', {
        title: 'Sign Up'
    });
};
module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: 'Sign In'
    });
};
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('Error in finding user'); return;}
        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('Error in finding user'); return;}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    })
}
// sign-in and create a session for user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}