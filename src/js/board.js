import Fen from './fen.js'

const DEFAULT_POSITION_FEN =
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

class Board {
  constructor(fen = DEFAULT_POSITION_FEN) {
    this.position = new Array(64)
  }

  loadFen(fen) {
    const segments = fen.split(' ')

    if (segments.length !== 6)
      throw new Error(
        `Invalid FEN String: there should be 6 segments (${segments.length})`
      )

    const [position, turn, castles, enPassant, halfMove, fullMove] = segments

    // this.position = Fen.parsePosition(position)
    // this.turn = Fen.parseTurn(turn)
    // this.castles = this.parseCastles(castles)
    // this.enPassant = this.parseEnPassant(enPassant)
    // this.halfMoveCounter = this.parseHalfMoveCounter(halfMove)
    // this.fullMoveCounter = this.parseFullMoveCounter(fullMove)
  }
}

export { Board, DEFAULT_POSITION_FEN }

let bosh = new Board()
bosh.loadFen(DEFAULT_POSITION_FEN)
