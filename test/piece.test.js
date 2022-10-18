import assert from 'assert'
import {
  Piece,
  getPieceType,
  getPieceColour,
  getPieceClassLetter,
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
    it('gets correct letter from PAWN', () => {
      // Setup
      const pieceType = Piece.PAWN

      // Execution
      const letter = getPieceClassLetter(pieceType)

      // Verify
      assert.strictEqual(letter, 'p', 'Class letter is not p')
    })

    it('gets correct letter from QUEEN', () => {
      // Setup
      const pieceType = Piece.QUEEN

      // Execution
      const letter = getPieceClassLetter(pieceType)
      console.log(letter)

      // Verify
      assert.strictEqual(letter, 'q', 'Class letter is not q')
    })
  })
})
