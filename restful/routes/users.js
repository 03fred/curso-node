
module.exports = (app)=> {

    app.get('/users', (req, res) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.json({
            users: [{
                name: 'Fred',
                email: 'fred.rocke02@gmail.com'
            }]
        });

    });

    app.get('/users/admin', (req, res) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.json({
            users: []
        });


    });

}