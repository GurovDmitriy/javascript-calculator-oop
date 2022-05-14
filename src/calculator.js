"use strict"

import Numbers from "./numbers"
import Plus from "./plus"
import Minus from "./minus"
import Multiple from "./multiple"
import Divide from "./divide"

export default class Calculator {
  constructor() {
    this.action = ""
    this.isCalculateResult = false

    this.numbers = new Numbers()
    this.plus = new Plus()
    this.minus = new Minus()
    this.multiple = new Multiple()
    this.divide = new Divide()
  }

  get action() {
    return this._action
  }

  set action(value) {
    this._action = value
  }

  get isCalculateResult() {
    return this._isCalculateResult
  }

  set isCalculateResult(value) {
    this._isCalculateResult = value
  }

  setNum(value) {
    if (!this.action) this.numbers.numA += value
    else this.numbers.numB += value
  }

  reset() {
    this.action = ""
    this.numbers.numA = ""
    this.numbers.numB = ""
    this.isCalculateResult = false
  }

  result() {
    const numA = Number(this.numbers.numA)
    const numB = Number(this.numbers.numB)

    return this[this.action].result(numA, numB)
  }
}
