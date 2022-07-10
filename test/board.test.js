import assert from 'assert'
import { Board } from '../src/js/board.js'
import { Piece } from '../src/js/piece.js'

describe('Board', () => {
  describe('constructor', () => {
    it('creates an instance of Board', () => {
      // Setup
      const board = new Board()

      // Verify
      assert(board instanceof Board, 'is not an instance of Board')
    })

    it('has a position array of length 64', () => {
      // Setup
      const board = new Board()

      // Exercise
      const hasPositionProperty = 'position' in board
      const positionLength = board.position.length

      // Verify
      assert(hasPositionProperty, 'position property not defined')
      assert.equal(
        positionLength,
        64,
        `position array not of length 64 (${positionLength})`
      )
    })
  })
})
