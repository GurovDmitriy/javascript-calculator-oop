/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Elem and Elements

// Global State

let errorGlobal = {}

let stateGlobal = {}

// Core

const pipe =
  (f, g) =>
  (...args) =>
    g(f(...args))

function pipeRunner(...fns) {
  return fns.reduce(pipe)
}

// Error Custom

class ErrorCustom extends Error {
  constructor(message) {
    super(message)
    this.name = "ErrorCustom"
    this._fromFunction = null
  }

  get fromFunction() {
    if (this._fromFunction !== null) return this._fromFunction
    const startSearch = this.stack.indexOf(" at ", 0)
    const endSearch = this.stack.indexOf("(", startSearch)
    const errorFunction = this.stack.slice(startSearch, endSearch).trim()
    this._fromFunction = errorFunction
    return this._fromFunction
  }
}

function logError(state, err) {
  errorGlobal = err
  console.log(
    `Error ${String.fromCodePoint(0x26d4)}

    ${String.fromCodePoint(0x1f41e)} ${errorGlobal.message}
    ${String.fromCodePoint(0x1f381)} ${errorGlobal.fromFunction}
    `
  )

  console.dir(errorGlobal)

  return cloneWithJSON(state)
}

function addErrorMessage(state) {
  elemCaptionError.textContent = errorGlobal.message

  return cloneWithJSON(state)
}

// Helpers

function cloneWithJSON(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function getRandom(min = 0, max = 5) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

function getDataLC(key) {
  return JSON.parse(localStorage.getItem(key))
}

function setDataLC(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

// Middleware

// Functions

// Mutations

// Actions

// Listeners
