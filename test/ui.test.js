import assert from 'assert'
import { getUiMoveset } from '../src/js/ui.js'

describe('Move', () => {
  describe('getUiMoveset', () => {
    it('converts engine moveset to ui moveset', () => {
      // Setup
      const moves = new Map()
      moves.set('1,0', [
        [2, 0],
        [3, 0],
      ])
      moves.set('1,1', [
        [2, 1],
        [3, 1],
      ])

      const expected = new Map()
      expected.set('1,0', ['2,0', '3,0'])
      expected.set('1,1', ['2,1', '3,1'])

      // Execute
      const result = getUiMoveset(moves)

      // Verify
      assert.deepStrictEqual(
        result,
        expected,
        'Did not convert moveset correctly'
      )
    })
  })
})
