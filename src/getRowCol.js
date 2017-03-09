const A = 'A'.charCodeAt(0)
// const Z = 'Z'.charCodeAt(0)

export default function getRowCol(cellId) {
  let row = 0
  let col = 0
  for (let i = 0; i < cellId.length; i++) {
    let c = cellId.charCodeAt(i)
    if (c >= A) {
      col *= 26
      col += (c-A)
    } else {
      row *= 10
      row += Number(cellId[i])
    }
  }
  // row indexes start with 1, not with zero
  row--
  // console.log('getRowCol(%s)=%s,%s',cellId,row,col)
  return [row, col]
}
