"use strict"

import Cache from "./cache.js"

export default class Minus {
  constructor() {
    this.cache = new Cache()
  }

  result(numA, numB) {
    if (this.cache.check(numA, numB)) return this.cache.result

    const result = numA - numB

    if (this._checkResult(result)) {
      this.cache.update(numA, numB, result)
    }

    return this.cache.result
  }

  _checkResult(value) {
    if (String(value).length > 4) throw new Error("invalid length number")
    return true
  }
}
