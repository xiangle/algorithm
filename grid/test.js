'use strict'

const slice = require('.')

console.time('set')

for (let i = 0; i < 20000000; i++) {
   slice.set(i)
}

console.timeEnd('set')


console.time('get')

for (let i = 1000000; i < 2000000; i++) {
   slice.get(i)
}

console.timeEnd('get')
