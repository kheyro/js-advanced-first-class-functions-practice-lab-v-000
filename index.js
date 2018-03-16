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

function driversByRevenue(col) {
  let newArr = col
  return newArr.sort(function (dr1, dr2) {
    console.log(newArr, col)
    return dr1.revenue - dr2.revenue
  })
}
