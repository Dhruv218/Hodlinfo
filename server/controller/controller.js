var Currency_list = require("../model/model");

// create and save new currency
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    console.log(req.body);
    // new user
    const currency = new Currency_list({
        name : req.body.name,
        last : req.body.last,
        buy: req.body.buy,
        sell : req.body.sell,
        volume : req.body.volume,
        base_unit: req.body.base_unit,
    })
    // save currency in the database
    currency
        .save(currency)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all currency list
exports.find = (req, res) => {
    Currency_list.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
    });
};
