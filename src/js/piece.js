/**
 * Pieces are made of types and colours
 * The type is represented by the right three bits
 * The colour is represented by the left two
 */
const PIECE_TYPE_MASK = 0b00111
const PIECE_COLOUR_MASK = 0b11000

/**
 * Enum for piece types and colours
 * A piece is the result of a TYPE and a COLOUR bitwise OR'd
 */
const Piece = {
  NONE: 0b00000,
  PAWN: 0b00001,
  KNIGHT: 0b00010,
  BISHOP: 0b00011,
  ROOK: 0b00100,
  QUEEN: 0b00101,
  KING: 0b00110,

  WHITE: 0b01000,
  BLACK: 0b10000,
}

/**
 * Enum for piece types and colours
 * A piece is the result of a TYPE and a COLOUR bitwise OR'd
 */
const ClassLetters = {
  p: Piece.PAWN,
  n: Piece.KNIGHT,
  b: Piece.BISHOP,
  r: Piece.ROOK,
  q: Piece.QUEEN,
  k: Piece.KING,
}

/**
 * Takes a piece and returns its type as a number
 * @param {number} piece The piece to get the type of
 * @returns {number} Piece Type
 */
const getPieceType = (piece) => piece & PIECE_TYPE_MASK

/**
 * Takes a piece and returns its colour as a number
 * @param {number} piece The piece to get the colour of
 * @returns {number} Piece Colour
 */
const getPieceColour = (piece) => piece & PIECE_COLOUR_MASK

/**
 * Takes a piece type and returns its name as a string
 * @param {pieceType} PieceType The type to get the name of
 * @returns {string} Piece Class Letter
 */
const getPieceClassLetter = (pieceType) =>
  Object.keys(ClassLetters).find((key) => ClassLetters[key] === pieceType)

export { Piece, getPieceColour, getPieceType, getPieceClassLetter }
