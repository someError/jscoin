const Core = require('./core');

const jscoin = new Core();

const nonce = jscoin.proofOfWork(jscoin.getLastBlock().hash, [1])

jscoin.createNewBlock(nonce, jscoin.getLastBlock().hash, jscoin.hashBlock(jscoin.getLastBlock().hash, [1], nonce))

console.log(jscoin)

