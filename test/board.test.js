import assert from 'assert'
import { Board } from '../src/js/board.js'
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

describe('Board', () => {
  describe('constructor', () => {
    it('creates an instance of Board', () => {
      // Setup
      const board = new Board()

      // Verify
      assert(board instanceof Board, 'is not an instance of Board')
    })

    it('has the default position when constructed with no params', () => {
      // Setup
      const board = new Board()

      // Verify
      assert.deepStrictEqual(
        board.position,
        DEFAULT_POSITION_ARRAY,
        'Position does not match the starting position'
      )

      assert.strictEqual(
        board.turn,
        Turn.WHITE,
        'Turn is incorrect (0 = WHITE, 1 = BLACK)'
      )

      assert.strictEqual(board.enPassant, null, 'Enpassant is incorrect')

      assert.deepStrictEqual(
        board.castles,
        {
          blackKingSide: true,
          blackQueenSide: true,
          whiteKingSide: true,
          whiteQueenSide: true,
        },
        'Castles are incorrect'
      )

      assert.strictEqual(board.halfMoveClock, 0, 'Half move clock is incorrect')

      assert.strictEqual(board.fullMoveCount, 1, 'Full move count is incorrect')
    })
  })
})
