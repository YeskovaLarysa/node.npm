describe('dowbleElem', () => {
  it('введенный елемент является массивом', () => {
    assert(Array.isArray(dowbleElem(array)))
  })
})

describe('dowbleElem', () => {
  it('Все елементы массива являются числом', () => {
    assert.deepEqual(dowbleElem(array).every(elem => typeof elem === "number"), true)
  })
})
