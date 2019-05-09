'use strict'

let O = {}

for (let i = 0; i < 10000; i++) {
   let item = O[Math.floor(Math.random() * 50000)] = {}
   for (let i = 0; i < 1000; i++) {
      item[Math.floor(Math.random() * 50000)] = 1
      item[Math.floor(Math.random() * 50000)] = 5
      item[Math.floor(Math.random() * 50000)] = 2
      item[Math.floor(Math.random() * 50000)] = 4
   }
}


// async function main() {

//    console.time('zipper')

//    let result = zipper(a, b, c, d)

//    console.timeEnd('zipper')

//    console.log(result.length)

// }

// main()