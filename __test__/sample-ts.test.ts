import sum, { multiply } from '../src/sample-ts'

describe('Sample test suite', () => {
  test('Adds 1 + 1 to equal  2', () => {
    expect(sum(1, 1)).toEqual(2)
  })

  test('Multiply 4 * 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20)
  })
})
