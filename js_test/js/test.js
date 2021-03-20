describe('dowbleElem', () => {
  it('введенный елемент является массивом', () => {
    assert.equal(Array.isArray(dowbleElem(array)), true)
  })
})

describe('dowbleElem', () => {
  it('Не все елементы массива являются числом', () => {
    assert.equal(dowbleElem(array.every(elem => typeof elem === "number")), true)
  })
})
