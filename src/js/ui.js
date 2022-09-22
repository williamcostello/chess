const renderBoard = () => {
  let board = document.createElement('div')
  board.className = 'board'
  board.id = 'board'

  // 8 rows
  for (let rank = 0; rank < 8; rank++) {
    let row = document.createElement('div')
    row.className = 'board__row'

    // of 8 squares
    for (let file = 0; file < 8; file++) {
      let square = document.createElement('div')
      square.classList.add('square', getSquareColourFromRankAndFile(rank, file))
      square.id = 'square__' + getSquarePositionFromRankAndFile(rank, file)

      row.appendChild(square)
    }

    board.appendChild(row)
  }

  document.getElementById('board').replaceWith(board)
}

const getSquareColourFromRankAndFile = (rank, file) => {
  return (rank + file) % 2 == 0 ? 'square--light' : 'square--dark'
}

const getSquarePositionFromRankAndFile = (rank, file) => rank * 8 + file

renderBoard()
