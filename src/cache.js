"use strict"

export default class Cache {
  constructor() {
    this.numA = null
    this.numB = null
    this.result = null
  }

  get numA() {
    return this._numA
  }

  set numA(value) {
    if (!value && value !== 0) this._numA = null
    else this._numA = value
  }

  get numB() {
    return this._numB
  }

  set numB(value) {
    if (this._checkValue(value)) this._numB = null
    else this._numB = value
  }

  get result() {
    return this._result
  }

  set result(value) {
    if (this._checkValue(value)) this._result = null
    else this._result = value
  }

  check(numA, numB) {
    return this.numA === numA && this.numB === numB
  }

  update(numA, numB, result) {
    this.numA = numA
    this.numB = numB
    this.result = result
  }

  reset() {
    this.numA = null
    this.numB = null
    this.result = null
  }

  _checkValue(value) {
    return !value && value !== 0
  }
}
