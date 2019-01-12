let index = []

function get(val) {
   for (let item of index) {
      if (item === val) {
         return true
      }
   }
}

console.time('set')

for (let i = 0; i < 10000000; i++) {
   index.push(i)
}

console.timeEnd('set')


console.time('get')

for (let i = 1000000; i < 2000000; i++) {
   get(i)
}

console.timeEnd('get')