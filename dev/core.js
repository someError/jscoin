const sha256 = require('sha256');

function Core () {
    this.chain = [];
    this.pendingTransactions = [];

    this.createNewBlock(17700, 'real', 'is not real')
}

Core.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce,
        hash,
        previousBlockHash
    };

    /** clear transactions */
    this.pendingTransactions = [];

    this.chain.push(newBlock);

    return newBlock;
}

Core.prototype.getLastBlock = function () {
    return this.chain[this.chain.length - 1];
}

Core.prototype.createNewTransaction = function (amount, sender, recipient) {
    const newTransaction = {
        amount,
        sender,
        recipient
    };

    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock().index + 1;
}

Core.prototype.hashBlock = function (previousBlockHash, currentData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentData);

    return sha256(dataAsString);
}

Core.prototype.proofOfWork = function (previousBlockHash, currentData) {
    let nonce = 0,
        hash = this.hashBlock(previousBlockHash, currentData, nonce);

    while (hash.substr(0, 6) !== '000000') {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentData, nonce);
    }

    return nonce;
}



module.exports = Core;