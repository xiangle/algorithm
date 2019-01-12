'use strict'

let index = {}

module.exports = {
   index,
   set(key, value) {

      if (key === undefined) return

      let iteration = index

      for (let name of String(key)) {

         let node = iteration[name]

         if (node === undefined) {
            node = {}
            iteration[name] = node
         }

         iteration = node
         
      }

      iteration._v = value

   },
   get(key) {

      if (!key) return

      let iteration = index

      for (let name of String(key)) {

         let node = iteration[name]

         if (node) {
            iteration = node
         } else {
            return false
         }

      }

      return iteration._v

   }
}