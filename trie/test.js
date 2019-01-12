'use strict'

const trie = require('.')

console.time('set')

for (let i = 0; i < 10000000; i++) {
   trie.set(i, { a: i })
}

console.timeEnd('set')


console.time('get')

for (let i = 0; i < 5000000; i++) {
   trie.get(i)
}

console.timeEnd('get')
