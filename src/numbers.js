"use strict"

export default class Numbers {
  constructor() {
    this.numA = ""
    this.numB = ""
  }

  get numA() {
    return this._numA
  }

  set numA(value) {
    if (!value) this._numA = ""

    if (this._checkValue(value)) {
      this._numA = value
    }
  }

  get numB() {
    return this._numB
  }

  set numB(value) {
    if (!value) this._numB = ""

    if (this._checkValue(value)) {
      this._numB = value
    }
  }

  reset() {
    this.numA = ""
    this.numB = ""
  }

  _checkValue(value) {
    if (value.length > 4) throw new Error("invalid length number")
    return true
  }
}
