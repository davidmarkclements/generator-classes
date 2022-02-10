'use strict'
const { constructor: Generator } = function * () {}
const { constructor: AsyncGenerator } = async function * () {}
module.exports = { Generator, AsyncGenerator }