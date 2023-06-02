const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/currency
    axios.get('http://localhost:8000/api/currency')
        .then(function(response){
            res.render('index', { data : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
    }