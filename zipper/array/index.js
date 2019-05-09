'use strict'

module.exports = function (...parameter) {

   if (!(parameter[0] && parameter[1])) {
      return []
   }

   let pointers = []

   for (let key in parameter) {
      pointers[key] = 0
   }

   let result = []
   let coexist = 0, count = 0
   let length = parameter.length - 1

   while (true) {

      for (let key in parameter) {

         let item = parameter[key]
         let index = pointers[key]
         let itemLength = item.length
         
         for (let i = index; i < itemLength; i++) {

            index++

            let value = item[i]

            if (value > coexist) {
               coexist = value
               count = 0
               break
            } else if (value === coexist) {
               count++
               if (count === length) {
                  result.push(coexist)
                  count = 0
               }
               break
            }

         }

         if (itemLength > index) {

            pointers[key] = index

         } else {

            return result

         }

      }

   }

}