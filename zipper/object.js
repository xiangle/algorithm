'use strict'

const zipper = require('.')

let a = {}, b = {}, c = {}, d = {}

for (let i = 0; i < 1000000; i++) {
   a[i] = 1
   b[i] = 5
   c[i] = 2
   d[i] = 4
}

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

async function main() {

   console.time('zipper')

   let result = zipper(a, b, c, d)

   console.timeEnd('zipper')

   // console.log(result)

}

main()