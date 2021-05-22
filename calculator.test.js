const calculator = require('./calculator');
describe('Adds, subtracts, and checks 3 and 2 for equality', () => {
  test('Adds 3 to 2', () => expect(calculator.add(3, 2)).toBe(5))
  test('Adds 2 to 3', () => expect(calculator.add(2, 3)).toBe(5))
  test('Subtracts 2 from 3', () => expect(calculator.subtract(3, 2)).toBe(1))
  test('Subtracts 3 from 2', () => expect(calculator.subtract(2, 3)).toBe(-1))
  test('Checks 3 and 2 for inequality', () => expect(calculator.check(3, 2)).toBeFalse)
  test('Checks 2 and 3 for inequality', () => expect(calculator.check(2, 3)).toBeFalse)
})
describe('Adds, subtracts, and checks 3 and 3 for equality', () => {
  test('Adds 3 to 3', () => expect(calculator.add(3, 3)).toBe(6))
  test('Subtracts 3 from 3', () => expect(calculator.subtract(3, 3)).toBe(0))
  test('Checks 3 and 3 for equality', () => expect(calculator.check(3, 3)).toBeTrue)
})