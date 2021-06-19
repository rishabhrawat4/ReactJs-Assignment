export const findHighestBid = (bids) => {
  var highest = Number.NEGATIVE_INFINITY;
  bids.map((bid) => {
    highest = bid.amount > highest ? bid.amount : highest;
  })
  return highest === Number.NEGATIVE_INFINITY ? 0 : highest;
}

export const findLowestBid = (bids) => {
  var lowest = Number.POSITIVE_INFINITY;
  bids.map((bid) => {
    lowest = bid.amount < lowest ? bid.amount : lowest;
  })
  return lowest === Number.POSITIVE_INFINITY ? 0 : lowest;
}
