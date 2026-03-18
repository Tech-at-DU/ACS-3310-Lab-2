import { describe, it, expect } from 'vitest'
import {
  toTitleCase,
  totalPrice,
  last,
  filterBy,
  pluck,
  applyTwice,
} from '../src/challenges'

describe('toTitleCase', () => {
  it('capitalizes each word', () => {
    expect(toTitleCase('hello world')).toBe('Hello World')
  })

  it('works with a single word', () => {
    expect(toTitleCase('typescript')).toBe('Typescript')
  })

  it('returns an empty string when given an empty string', () => {
    expect(toTitleCase('')).toBe('')
  })
})

describe('totalPrice', () => {
  it('adds the price of all items', () => {
    expect(totalPrice([{ price: 5 }, { price: 7 }, { price: 3 }])).toBe(15)
  })

  it('returns 0 for an empty array', () => {
    expect(totalPrice([])).toBe(0)
  })
})

describe('last', () => {
  it('returns the last number in an array', () => {
    expect(last([1, 2, 3])).toBe(3)
  })

  it('returns the last string in an array', () => {
    expect(last(['a', 'b', 'c'])).toBe('c')
  })

  it('returns undefined for an empty array', () => {
    expect(last([])).toBeUndefined()
  })
})

describe('filterBy', () => {
  it('filters numbers using a callback', () => {
    expect(filterBy([1, 2, 3, 4], n => n > 2)).toEqual([3, 4])
  })

  it('filters objects using a callback', () => {
    const users = [
      { name: 'Ana', active: true },
      { name: 'Ben', active: false },
      { name: 'Cara', active: true },
    ]

    expect(filterBy(users, user => user.active)).toEqual([
      { name: 'Ana', active: true },
      { name: 'Cara', active: true },
    ])
  })

  it('returns an empty array when nothing matches', () => {
    expect(filterBy([1, 2, 3], n => n > 10)).toEqual([])
  })
})

describe('pluck', () => {
  it('plucks names from an array of objects', () => {
    const users = [
      { name: 'Ana', age: 22 },
      { name: 'Ben', age: 30 },
    ]

    expect(pluck(users, 'name')).toEqual(['Ana', 'Ben'])
  })

  it('plucks ages from an array of objects', () => {
    const users = [
      { name: 'Ana', age: 22 },
      { name: 'Ben', age: 30 },
    ]

    expect(pluck(users, 'age')).toEqual([22, 30])
  })

  it('returns an empty array for an empty input array', () => {
    expect(pluck([], 'name')).toEqual([])
  })
})

describe('applyTwice', () => {
  it('applies a function two times', () => {
    expect(applyTwice(2, n => n + 1)).toBe(4)
  })

  it('works with multiplication', () => {
    expect(applyTwice(3, n => n * 2)).toBe(12)
  })

  it('works with identity functions', () => {
    expect(applyTwice(5, n => n)).toBe(5)
  })
})