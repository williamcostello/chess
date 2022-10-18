import assert from 'assert'
import * as Fen from '../src/js/fen.js'
import { Piece } from '../src/js/piece.js'
import Turn from '../src/js/turn.js'

const DEFAULT_POSITION_ARRAY = [
  [
    Piece.ROOK | Piece.BLACK,
    Piece.KNIGHT | Piece.BLACK,
    Piece.BISHOP | Piece.BLACK,
    Piece.QUEEN | Piece.BLACK,
    Piece.KING | Piece.BLACK,
    Piece.BISHOP | Piece.BLACK,
    Piece.KNIGHT | Piece.BLACK,
    Piece.ROOK | Piece.BLACK,
  ],
  [
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
  ],
  [
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
  ],
  [
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
  ],
  [
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
  ],
  [
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
  ],
  [
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
  ],
  [
    Piece.ROOK | Piece.WHITE,
    Piece.KNIGHT | Piece.WHITE,
    Piece.BISHOP | Piece.WHITE,
    Piece.QUEEN | Piece.WHITE,
    Piece.KING | Piece.WHITE,
    Piece.BISHOP | Piece.WHITE,
    Piece.KNIGHT | Piece.WHITE,
    Piece.ROOK | Piece.WHITE,
  ],
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

      assert.deepStrictEqual(
        result,
        DEFAULT_POSITION_ARRAY,
        'Did not return expected array'
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
      assert.strictEqual(result, expected, 'Turn is not white')
    })

    it('parses a black turn correctly', () => {
      // Setup
      const expected = Turn.BLACK

      // Exercise
      const result = Fen.parseTurn('b')

      // Verify
      assert.strictEqual(result, expected, 'Turn is not white')
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
      assert.deepEqual(result, expected, 'Castles not parsed correctly')
    })
  })

  describe('parseCoordinate', () => {
    it('returns null if there is no enpassant available', () => {
      // Setup
      const expected = null

      // Exercise
      const result = Fen.parseCoordinate('-')

      // Verify
      assert.strictEqual(result, expected, 'Did not return null')
    })

    it('returns the index of c3 on the board', () => {
      // Setup
      const expected = 18

      // Exercise
      const result = Fen.parseCoordinate('c3')

      // Verify
      assert.strictEqual(
        result,
        expected,
        'Did not return expected board index'
      )
    })

    it('returns the index of h6 on the board', () => {
      // Setup
      const expected = 47

      // Exercise
      const result = Fen.parseCoordinate('h6')

      // Verify
      assert.strictEqual(
        result,
        expected,
        'Did not return expected board index'
      )
    })

    it('returns the index of a1 on the board', () => {
      // Setup
      const expected = 0

      // Exercise
      const result = Fen.parseCoordinate('a1')

      // Verify
      assert.strictEqual(
        result,
        expected,
        'Did not return expected board index'
      )
    })

    it('returns the index of h8 on the board', () => {
      // Setup
      const expected = 63

      // Exercise
      const result = Fen.parseCoordinate('h8')

      // Verify
      assert.strictEqual(
        result,
        expected,
        'Did not return expected board index'
      )
    })
  })

  describe('parseFen', () => {
    it('parses the default FEN correctly', () => {
      // Setup
      const expected = {
        position: DEFAULT_POSITION_ARRAY,
        turn: Turn.WHITE,
        castles: {
          blackKingSide: true,
          blackQueenSide: true,
          whiteKingSide: true,
          whiteQueenSide: true,
        },
        enPassant: null,
        halfMoveClock: 0,
        fullMoveCount: 1,
      }

      // Exercise
      const result = Fen.parseFen(DEFAULT_POSITION_FEN)

      // Verify
      assert.deepStrictEqual(result, expected, 'Did not return expected object')
    })
  })
})
