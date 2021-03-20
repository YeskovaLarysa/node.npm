
// const dowbleElem = (arr) => arr.map(function (elem) {
//   return elem*2
// })

// arr.every(elem => typeof elem === "number") // если каждый элемент масива число, то вернет true

const dowbleElem = (arr) => {
  if(Array.isArray(arr)) {
    return arr.map(function (elem) {
      if(typeof elem === "number"){
        return elem*2} else {return `error: ${elem}`}
      })
    }
    else {return 'error'}
  }
