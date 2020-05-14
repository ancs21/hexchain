require('dotenv').config()
const { TransactionProcessor } = require('sawtooth-sdk/processor')

const SimpleStoreHandler = require('./handler')
const transactionProcessor = new TransactionProcessor(process.env.VALIDATOR_URL)

transactionProcessor.addHandler(new SimpleStoreHandler())
transactionProcessor.start()

console.log(`Starting HexchainIoT Transaction Processor`)
console.log(`Connecting to Sawtooth validator at ${process.env.VALIDATOR_URL}`)
