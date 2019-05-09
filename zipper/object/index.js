'use strict'

module.exports = function (...parameter) {

   let [main, ...join] = parameter

   if (!(main && join[0])) {
      return []
   }

   let length = parameter.length

   let result = []

   for (let name in main) {

      let value = main[name]

      let coexist = [value]

      for (let item of join) {

         let value = item[name]

         if (value) {

            coexist.push(value)

         } else {

            break

         }

      }

      if (coexist.length === length) {
         result.push(name)
      }

   }

   return result

}