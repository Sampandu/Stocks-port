const totalValue = (arr) => {
  var result = 0
  for(let i = 0; i < arr.length; i++) {
    result += arr[i].quantity * arr[i].last
  }
  return result
}

export default totalValue
