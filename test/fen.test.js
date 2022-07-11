import assert from 'assert'
import Fen from '../src/js/fen.js'
import { Piece } from '../src/js/piece.js'
import Turn from '../src/js/turn.js'

const DEFAULT_POSITION_ARRAY = [
  Piece.ROOK | Piece.BLACK,
  Piece.KNIGHT | Piece.BLACK,
  Piece.BISHOP | Piece.BLACK,
  Piece.QUEEN | Piece.BLACK,
  Piece.KING | Piece.BLACK,
  Piece.BISHOP | Piece.BLACK,
  Piece.KNIGHT | Piece.BLACK,
  Piece.ROOK | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.ROOK | Piece.WHITE,
  Piece.KNIGHT | Piece.WHITE,
  Piece.BISHOP | Piece.WHITE,
  Piece.QUEEN | Piece.WHITE,
  Piece.KING | Piece.WHITE,
  Piece.BISHOP | Piece.WHITE,
  Piece.KNIGHT | Piece.WHITE,
  Piece.ROOK | Piece.WHITE,
]

const DEFAULT_POSITION_FEN =
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

describe('Fen', () => {
  describe('parsePosition', () => {
    it('parses the default position correctly', () => {
      // Exercise
      const result = Fen.parsePosition(
        'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
      )

      // Verify
      const equalsDefaultPosition = result.every(
        (element, i) => element == DEFAULT_POSITION_ARRAY[i]
      )

      assert(
        equalsDefaultPosition,
        'The position does not match the starting position'
      )
    })
  })

  describe('parseTurn', () => {
    it('parses a white turn correctly', () => {
      // Setup
      const expected = Turn.WHITE

      // Exercise
      const result = Fen.parseTurn('w')

      // Verify
      assert.strictEqual(expected, result, 'Turn is not white')
    })

    it('parses a black turn correctly', () => {
      // Setup
      const expected = Turn.BLACK

      // Exercise
      const result = Fen.parseTurn('b')

      // Verify
      assert.strictEqual(expected, result, 'Turn is not white')
    })
  })

  describe('parseCastles', () => {
    it('parses all castles available', () => {
      // Setup
      const expected = {
        whiteKingSide: true,
        whiteQueenSide: true,
        blackKingSide: true,
        blackQueenSide: true,
      }

      // Exercise
      const result = Fen.parseCastles('KQkq')

      // Verify
      assert.deepEqual(
        expected,
        result,
        `Castles not parsed correctly ${JSON.stringify(result)}`
      )
    })
  })
})
