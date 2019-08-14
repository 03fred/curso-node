module.js = {

send:(err,req,code = 400)=>{

    console.log('error: ${err}');
    res.status(400).json({
        error: err
    });
}

};