import { findHighestBid, findLowestBid } from '../Function/FindBidsPrice';

export const sortByIncreasing = (data, bidType) => {
  if(bidType === "max"){
    data.sort(function(first, second){
      if(findHighestBid(first.bids) > findHighestBid(second.bids)){
        return -1;
      }
      else if(findHighestBid(first.bids) < findHighestBid(second.bids)){
        return 1;
      }
      else{
        return 0;
      }
    })
  } else {
    data.sort(function(first, second){
      if(findLowestBid(first.bids) > findLowestBid(second.bids)){
        return -1;
      }
      else if(findLowestBid(first.bids) < findLowestBid(second.bids)){
        return 1;
      }
      else{
        return 0;
      }
    })
  }
  return data;
}

export const sortByDecreasing = (data, bidType) => {
  
  if(bidType === "max"){
    data.sort(function(first, second){
      if(findHighestBid(first.bids) < findHighestBid(second.bids)){
        return -1;
      }
      else if(findHighestBid(first.bids) > findHighestBid(second.bids)){
        return 1;
      }
      else{
        return 0;
      }
    })
  } else{
    data.sort(function(first, second){
      if(findLowestBid(first.bids) < findLowestBid(second.bids)){
        return -1;
      }
      else if(findLowestBid(first.bids) > findLowestBid(second.bids)){
        return 1;
      }
      else{
        return 0;
      }
    })
  }
  console.log(data)
  return data;
}
