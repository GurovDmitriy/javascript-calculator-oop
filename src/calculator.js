"use strict"

import Numbers from "./numbers"
import Operation from "./operation"

export default class Calculator {
  constructor() {
    this.action = ""
    this.isCalculateResult = false

    this.numbers = new Numbers()
    this.operation = new Operation()
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

    return this.operation[this.action](numA, numB)
  }
}
