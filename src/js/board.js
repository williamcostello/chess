import Fen from './fen.js'

const DEFAULT_POSITION_FEN =
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

class Board {
  constructor(fen = DEFAULT_POSITION_FEN) {
    this.loadFen(fen)
  }

  loadFen(fen) {
    const { position, turn, castles, enPassant, halfMoveClock, fullMoveCount } =
      Fen.parseFen(fen)

    this.position = position
    this.turn = turn
    this.castles = castles
    this.enPassant = enPassant
    this.halfMoveClock = halfMoveClock
    this.fullMoveCount = fullMoveCount
  }
}

export { Board, DEFAULT_POSITION_FEN }

let bosh = new Board()
bosh.loadFen(DEFAULT_POSITION_FEN)
