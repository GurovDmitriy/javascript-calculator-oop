"use strict"

class OperationNum {
  constructor(numA, numB) {
    this.numA = numA
    this.numB = numB
  }

  get numA() {
    return this._numA
  }

  set numA(value) {
    if (this._getIsValidNum(value)) {
      this._numA = value
    } else {
      this._numA = null
    }
  }

  get numB() {
    return this._numB
  }

  set numB(value) {
    if (this._getIsValidNum(value)) {
      this._numB = value
    } else {
      this._numB = null
    }
  }

  _getIsValidNum(value) {
    if (!value) {
      throw new Error(`invalid num ${value}`)
    }

    if (typeof value !== "number") {
      throw new Error(`invalid type with ${value}`)
    }

    if (String(value).length > 7) {
      throw new Error(`invalid length with ${value}`)
    }

    return true
  }
}

class OperationPlus {
  constructor(numA, numB) {
    this._operationNum = new OperationNum(numA, numB)
  }

  get result() {
    return this._operationNum.numA + this._operationNum.numB
  }
}

class OperationMinus {
  constructor(numA, numB) {
    this._operationNum = new OperationNum(numA, numB)
  }

  get result() {
    return this._operationNum.numA - this._operationNum.numB
  }
}

const plus = new OperationPlus(4.24444, 5.3)
const minus = new OperationMinus(4, 5)

console.log(plus.result)
console.log(minus.result)
