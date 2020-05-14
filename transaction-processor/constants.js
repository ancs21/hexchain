const { _hash } = require('./lib')

const HEXCHAIN_FAMILY = 'hexchainiot'

exports.HEXCHAIN_FAMILY = HEXCHAIN_FAMILY
exports.HEXCHAIN_NAMESPACE = _hash(HEXCHAIN_FAMILY).substring(0, 6)
