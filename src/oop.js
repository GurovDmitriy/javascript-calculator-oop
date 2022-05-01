"use strict"

class CalculatorNumbers {
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

class CalculatorCache {
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

class CalculatorPlus {
  constructor() {
    this.cache = new CalculatorCache()
  }

  result(numA, numB) {
    if (this.cache.check(numA, numB)) return this.cache.result

    const result = numA + numB

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

class CalculatorMinus {
  constructor() {
    this.cache = new CalculatorCache()
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

class Calculator {
  constructor() {
    this.action = ""
    this.isCalculateResult = false

    this.numbers = new CalculatorNumbers()
    this.plus = new CalculatorPlus()
    this.minus = new CalculatorMinus()
  }

  get action() {
    return this._action
  }

  set action(value) {
    this._action = value
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

class CalculatorUI {
  constructor() {
    this.calculator = new Calculator()

    this._initBtnNum()
    this._initBtnOperation()
    this._initBtnResult()

    this._initDisplay = this._initDisplay()
  }

  _initBtnNum() {
    for (let i = 0; i <= 9; i++) {
      const id = `num-${i}`
      const elem = document.getElementById(id)
      elem.addEventListener("click", () => {
        this._pushBtnNum(i)
      })
    }
  }

  _initBtnOperation() {
    const btnOperation = ["plus", "minus"]

    btnOperation.forEach((elem) => {
      const btn = document.getElementById(elem)
      btn.addEventListener("click", () => {
        this._pushBtnOperation(elem)
      })
    })
  }

  _initBtnResult() {
    const btnResult = document.getElementById("result")

    btnResult.addEventListener("click", () => {
      this._pushBtnResult()
    })
  }

  _initDisplay() {
    return {
      numA: document.querySelector(".calculator__numA"),
      numB: document.querySelector(".calculator__numB"),
      result: document.querySelector(".calculator__result"),
      error: document.querySelector(".calculator__error"),
    }
  }

  _pushBtnNum(value) {
    if (this.calculator.isCalculateResult) this.calculator.reset()
    this.calculator.setNum(value)
  }

  _pushBtnOperation(value) {
    this.calculator.action = value
  }

  _pushBtnResult() {
    this.calculator.isCalculateResult = true
    console.log(this.calculator.result())
    console.log(this.calculator)
  }
}

new CalculatorUI()
