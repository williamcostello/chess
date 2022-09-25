import assert from 'assert'
import {
  Piece,
  getPieceType,
  getPieceColour,
  getPieceName,
} from '../src/js/piece.js'

describe('Piece', () => {
  describe('getPieceType', () => {
    it('gets correct type from BLACK KING', () => {
      // Setup
      const piece = Piece.KING | Piece.BLACK

      // Execution
      const type = getPieceType(piece)

      // Verify
      assert.strictEqual(type, Piece.KING, 'Piece type is not KING')
    })

    it('gets correct type from WHITE PAWN', () => {
      // Setup
      const piece = Piece.PAWN | Piece.WHITE

      // Execution
      const type = getPieceType(piece)

      // Verify
      assert.strictEqual(type, Piece.PAWN, 'Piece type is not PAWN')
    })
  })

  describe('getPieceColour', () => {
    it('gets correct colour from BLACK ROOK', () => {
      // Setup
      const piece = Piece.ROOK | Piece.BLACK

      // Execution
      const colour = getPieceColour(piece)

      // Verify
      assert.strictEqual(colour, Piece.BLACK, 'Piece colour is not BLACK')
    })

    it('gets correct colour from WHITE BISHOP', () => {
      // Setup
      const piece = Piece.BISHOP | Piece.WHITE

      // Execution
      const colour = getPieceColour(piece)

      // Verify
      assert.strictEqual(colour, Piece.WHITE, 'Piece colour is not WHITE')
    })
  })

  describe('getPieceName', () => {
    it('gets correct name from BLACK PAWN', () => {
      // Setup
      const piece = Piece.PAWN | Piece.BLACK

      // Execution
      const name = getPieceName(piece)

      // Verify
      assert.strictEqual(name, 'PAWN', 'Piece name is not PAWN')
    })

    it('gets correct name from WHITE QUEEN', () => {
      // Setup
      const piece = Piece.QUEEN | Piece.WHITE

      // Execution
      const name = getPieceName(piece)

      // Verify
      assert.strictEqual(name, 'QUEEN', 'Piece name is not QUEEN')
    })
  })
})
