import { describe, it, expect } from 'vitest'
import {
  repeat,
  sum,
  getLast,
  filterGreaterThan,
  mapNames,
  applyTwice,
} from '../src/challenges'

describe('repeat', () => {
  it('repeats a string', () => {
    expect(repeat('ha', 3)).toBe('hahaha')
  })
})

describe('sum', () => {
  it('adds numbers in an array', () => {
    expect(sum([1, 2, 3])).toBe(6)
  })
})

describe('getLast', () => {
  it('returns the last number', () => {
    expect(getLast([1, 2, 3])).toBe(3)
  })

  it('returns the last string', () => {
    expect(getLast(['a', 'b', 'c'])).toBe('c')
  })
})

describe('filterGreaterThan', () => {
  it('filters numbers greater than min', () => {
    expect(filterGreaterThan([1, 4, 6, 2], 3)).toEqual([4, 6])
  })
})

describe('mapNames', () => {
  it('maps objects to their names', () => {
    expect(mapNames([{ name: 'Ana' }, { name: 'Ben' }])).toEqual(['Ana', 'Ben'])
  })
})

describe('applyTwice', () => {
  it('applies a function two times', () => {
    expect(applyTwice(2, n => n + 1)).toBe(4)
  })
})