const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    last : {
        type: String,
        required: true,
    },
    buy : {
        type: String,
        required: true,
    },
    sell : {
        type: String,
        required: true,
    },
    volume : {
        type: String,
        required: true,
    },
    base_unit : {
        type: String,
        required: true,
    },
})

const Currency_list = mongoose.model('currency_list', schema);

module.exports = Currency_list;