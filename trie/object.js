'use strict'

const obj = {}

console.time('set')

for (let i = 0; i < 10000000; i++) {
   obj[i] = { a: i }
}

console.timeEnd('set')


console.time('get')


for (let i = 0; i < 5000000; i++) {
   obj[i]
}

console.timeEnd('get')