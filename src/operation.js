"use strict"

import Cache from "./cache.js"

export default class Operation {
  constructor() {
    this.cache = new Cache()
  }

  plus(numA, numB) {
    if (this.cache.check(numA, numB)) return this.cache.result

    const result = numA + numB
    return this._result(numA, numB, result)
  }

  minus(numA, numB) {
    if (this.cache.check(numA, numB)) return this.cache.result

    const result = numA - numB
    return this._result(numA, numB, result)
  }

  multiple(numA, numB) {
    if (this.cache.check(numA, numB)) return this.cache.result

    const result = numA * numB
    return this._result(numA, numB, result)
  }

  divide(numA, numB) {
    if (this.cache.check(numA, numB)) return this.cache.result

    const result = numA / numB
    return this._result(numA, numB, result)
  }

  _result(numA, numB, result) {
    const resultNew = this._formatResult(result)

    if (this._checkResult(resultNew)) {
      this.cache.update(numA, numB, resultNew)
    }

    return resultNew
  }

  _formatResult(value) {
    return Number.isInteger(value) ? value : value.toFixed(4)
  }

  _checkResult(value) {
    if (String(value).length > 9) throw new Error("invalid length number")
    return true
  }
}
