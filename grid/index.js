'use strict'

let index = [
   [{
      1: {}
   }],
   [{
      1: {}
   }],
   [],
]

module.exports = {
   index,
   set(value) {

      if (value === undefined) return

      let iteration = index

      for (let name of String(value)) {

         let node = iteration[name]

         if (node === undefined) {
            node = {}
            iteration[name] = node
         }

         iteration = node

      }

      iteration.s = true

   },
   get(value) {

      if (!value) return

      let iteration = index

      for (let name of String(value)) {

         let node = iteration[name]

         if (node) {
            iteration = node
         } else {
            return false
         }

      }

      if (iteration.s) {
         return true
      }

   }
}