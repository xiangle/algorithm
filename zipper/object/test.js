'use strict'

let zipper = require('.')

let a = {}, b = {}, c = {}, d = {}

for (let i = 0; i < 50000; i++) {
   a[Math.floor(Math.random() * 50000)] = 1
   b[Math.floor(Math.random() * 50000)] = 5
   c[Math.floor(Math.random() * 50000)] = 2
   d[Math.floor(Math.random() * 50000)] = 4
}

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

async function main() {

   console.time('zipper')

   let result = zipper(a, b, c, d)

   console.timeEnd('zipper')

   console.log(result.length)

}

main()