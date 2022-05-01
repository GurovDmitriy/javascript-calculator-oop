"use strict"

class OperationNumbers {
  constructor() {
    this.numA = ""
    this.numB = ""
  }

  get numA() {
    return this._numA
  }

  set numA(value) {
    if (!value) this._numA = ""
    if (value.length > 4) throw new Error("invalid length number")

    this._numA = value
  }

  get numB() {
    return this._numB
  }

  set numB(value) {
    this._numB = value
  }
}

class OperationCache {
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
    if (!value && value !== 0) this._numB = null
    else this._numB = value
  }

  get result() {
    return this._result
  }

  set result(value) {
    if (!value && value !== 0) this._result = null
    else this._result = value
  }

  checkCache(numA, numB) {
    return this.numA === numA && this.numB === numB
  }

  updateCache(numA, numB, result) {
    this.numA = numA
    this.numB = numB
    this.result = result
  }
}

class OperationPlus {
  constructor() {
    this.operationCache = new OperationCache()
  }

  result(numA, numB) {
    if (this.operationCache.checkCache(numA, numB))
      return this.operationCache.result

    const result = numA + numB
    this.operationCache.updateCache(numA, numB, result)

    return this.operationCache.result
  }
}

class OperationMinus {
  constructor() {
    this.operationCache = new OperationCache()
  }

  result(numA, numB) {
    if (this.operationCache.checkCache(numA, numB))
      return this.operationCache.result

    const result = numA - numB
    this.operationCache.updateCache(numA, numB, result)

    return this.operationCache.result
  }
}

class Calculator {
  constructor() {
    this.action = ""

    this.operationNumbers = new OperationNumbers()

    this.operationPlus = new OperationPlus()
    this.operationMinus = new OperationMinus()
  }

  get action() {
    return this._action
  }

  set action(value) {
    this._action = value
  }

  setNum(value) {
    if (!this.action) this.operationNumbers.numA += value
    else this.operationNumbers.numB += value
  }

  setAction(value) {
    this.action = value
  }

  result() {
    const numA = Number(this.operationNumbers.numA)
    const numB = Number(this.operationNumbers.numB)

    return this[this.action].result(numA, numB)
  }
}

const calculator = new Calculator()

const num1 = document.getElementById("num-1")
num1.addEventListener("click", () => {
  calculator.setNum(1)
  console.log(calculator)
})

const plus = document.getElementById("plus")
plus.addEventListener("click", () => {
  calculator.setAction("operationPlus")
  console.log(calculator)
})

const minus = document.getElementById("minus")
minus.addEventListener("click", () => {
  calculator.setAction("operationMinus")
  console.log(calculator)
})

const result = document.getElementById("result")
result.addEventListener("click", () => {
  console.log(calculator.result())
  console.log(calculator)
})
