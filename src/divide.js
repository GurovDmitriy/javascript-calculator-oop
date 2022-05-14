"use strict"

import Cache from "./cache.js"

export default class Divide {
  constructor() {
    this.cache = new Cache()
  }

  result(numA, numB) {
    if (this.cache.check(numA, numB)) return this.cache.result

    const result = (numA / numB).toFixed(4)

    if (this._checkResult(result)) {
      this.cache.update(numA, numB, result)
    }

    return this.cache.result
  }

  _checkResult(value) {
    if (String(value).length > 9) throw new Error("invalid length number")
    return true
  }
}
