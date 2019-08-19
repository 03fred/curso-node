module.js = {
 user:(app,req,res)=>{

    req.assert('name', 'o nome é obrigatório').notEmpty();
    req.assert('email', 'o email é invalido').notEmpty().isEmail();
    let errors = req.validationErrors();
    if (errors) {
        app.utils.error.send(errors, req, res);
        return false;
    }else{

       return true; 
    }


 }

};