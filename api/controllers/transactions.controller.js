var Transaction = require('../../models/transaction.model')

module.exports.index = async (req, res, next) => {

  var transactions = await Transaction.find();
    res.json(transactions);

};
