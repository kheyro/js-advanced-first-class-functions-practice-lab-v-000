// Code your solution in this file!

function logDriverNames(col) {
  col.forEach(function (el, i, arr) {
    console.log(el.name)
   })
}


function logDriversByHometown(col, town) {
  col.forEach( function (el, i, arr) {
    if (el.hometown === town ) {
      console.log(el.name)
    }
  })
}
