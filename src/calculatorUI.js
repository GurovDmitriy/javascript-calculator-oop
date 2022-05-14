"use strict"

import Calculator from "./calculator"

export default class CalculatorUI {
  constructor() {
    this.calculator = new Calculator()

    this._initBtnNum()
    this._initBtnOperation()
    this._initBtnClear()
    this._initBtnDot()
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
    const btnOperation = ["plus", "minus", "multiple", "divide"]

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

  _initBtnClear() {
    const btnResult = document.getElementById("clear")

    btnResult.addEventListener("click", () => {
      this._pushBtnClear()
    })
  }

  _initBtnDot() {
    const btnResult = document.getElementById("dot")

    btnResult.addEventListener("click", () => {
      this._pushBtnDot()
    })
  }

  _initDisplay() {
    return {
      operations: document.querySelector(".calculator__operations"),
      result: document.querySelector(".calculator__result"),
      error: document.querySelector(".calculator__error"),
    }
  }

  _pushBtnNum(value) {
    try {
      this._initDisplay.error.textContent = "no error"

      if (this._checkBtnNum()) this.calculator.reset()
      this.calculator.setNum(value)

      if (this.calculator.action) {
        this._initDisplay.result.textContent = this.calculator.numbers.numB
      } else {
        this._initDisplay.result.textContent = this.calculator.numbers.numA
      }
    } catch (err) {
      this._initDisplay.error.textContent = err.message
    }
  }

  _pushBtnOperation(value) {
    try {
      this._initDisplay.error.textContent = "no error"

      if (this._checkBtnOperation()) {
        this.calculator.action = value
        this._initDisplay.result.textContent = this.calculator.action
      }
    } catch (err) {
      this._initDisplay.error.textContent = err.message
    }
  }

  _pushBtnResult() {
    try {
      this._initDisplay.error.textContent = "no error"

      if (this._checkBtnResult()) {
        this.calculator.isCalculateResult = true
        const result = this.calculator.result()

        console.log(this.calculator)

        this._initDisplay.result.textContent = result
      }
    } catch (err) {
      this._initDisplay.error.textContent = err.message
    }
  }

  _pushBtnClear() {
    try {
      this._initDisplay.error.textContent = "no error"

      this.calculator.numbers.reset()
      this._initDisplay.result.textContent = 0
    } catch (err) {
      this._initDisplay.error.textContent = err.message
    }
  }

  _pushBtnDot() {
    try {
      if (!this._checkBtnDot()) return false
      this.calculator.setNum(".")

      if (this.calculator.action) {
        this._initDisplay.result.textContent = this.calculator.numbers.numB
      } else {
        this._initDisplay.result.textContent = this.calculator.numbers.numA
      }
    } catch (err) {
      this._initDisplay.error.textContent = err.message
    }
  }

  _checkBtnResult() {
    if (!this.calculator.numbers.numA) throw new Error("numA is required")
    if (!this.calculator.numbers.numB) throw new Error("numB is required")
    if (!this.calculator.action) throw new Error("action is required")

    return true
  }

  _checkBtnOperation() {
    if (!this.calculator.numbers.numA) throw new Error("numA is required")

    return true
  }

  _checkBtnNum() {
    if (!this.calculator.isCalculateResult) return false

    return true
  }

  _checkBtnDot() {
    const a = this.calculator.numbers.numA
    const b = this.calculator.numbers.numB

    if (!b && a.includes(".")) return false
    if (b && b.includes(".")) return false
    if (this.calculator._isCalculateResult) return false

    return true
  }
}
