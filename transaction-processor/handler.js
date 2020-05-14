const cbor = require('cbor')
const { TransactionHandler } = require('sawtooth-sdk/processor/handler')
const { InvalidTransaction } = require('sawtooth-sdk/processor/exceptions')

const SimpleStoreState = require('./state')
var { HEXCHAIN_FAMILY, HEXCHAIN_NAMESPACE } = require('./constants')

class SimpleStoreHandler extends TransactionHandler {
  constructor() {
    super(HEXCHAIN_FAMILY, ['1.1'], [HEXCHAIN_NAMESPACE])
  }

  apply(transactionProcessRequest, context) {
    const payload = cbor.decode(transactionProcessRequest.payload)

    const simpleStoreState = new SimpleStoreState(context)
    const header = transactionProcessRequest.header
    const devicePublicKey = header.signerPublicKey

    if (payload.action === 'set') {
      return simpleStoreState.setValue(payload.data, devicePublicKey)
    } else {
      throw new InvalidTransaction(`Action must be set not ${payload.action}`)
    }
  }
}

module.exports = SimpleStoreHandler
