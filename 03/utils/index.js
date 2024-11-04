const funObj = require('./lib/fun.js')
const strObj = require('./lib/str.js')

console.log(funObj)
console.log(strObj)

const {fun} = funObj
const {str} = strObj


module.exports = {
    fun, str
}
