'use strict'

const map = new Map()

console.time('set')

for (let i = 0; i < 10000000; i++) {
   map.set(i, { a: i })
}

console.timeEnd('set')


console.time('get')

for (let i = 0; i < 5000000; i++) {
   map.get(i)
}

console.timeEnd('get')