'use strict'

let O = {}

console.time('set')

for (let i = 0; i < 5000000; i++) {
   O[Math.floor(Math.random() * 100000000)] = {
      rank: 0,
      resrc: "feedback",
      source: "feedback",
      word: "东方财富官网",
      resrcArr: ["feedback", "feedback", "feedback"],
      sourceArr: ["feedback", "feedback", "feedback"],
      wordArr: ["东方财富官网"],
   }
}
console.timeEnd('set')

async function main() {

   console.time('get')

   for (let i = 0; i < 2000; i++) {
      O[Math.floor(Math.random() * 100000)]
   }

   console.timeEnd('get')

}

main()