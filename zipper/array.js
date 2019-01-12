'use strict'

const zipper = require('.')

let a = new Map(), b = new Map(), c = new Map(), d = new Map()

for (let i = 0; i < 1000000; i++) {
   a.set(Math.floor(Math.random() * 1000000), true)
   b.set(Math.floor(Math.random() * 1000000), true)
   c.set(Math.floor(Math.random() * 1000000), true)
   d.set(Math.floor(Math.random() * 1000000), true)
}

a = [...a.keys()].sort()
b = [...b.keys()].sort()
c = [...c.keys()].sort()
d = [...d.keys()].sort()

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