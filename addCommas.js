function addCommas(num) {
  if (Number.isInteger(num)) {
    return formatInterger(num)
  }

  if (isFloat(num)) {
    return formatInterger(Math.floor(Math.abs(num)) * Math.sign(num)) + '.' + formatDecimal(num)
  }
  return ""
}

function formatInterger(num) {
  const strNum = num.toString()
  const len = strNum.length
  let idx = len - 3;
  let result = ""
  while (idx > 0) {
    result = ',' + strNum.slice(idx, idx + 3) + result
    idx -= 3
  }
  result = strNum.slice(0, 3+idx) + result
  return result
}

function formatDecimal(num) {
  const strNum = num.toString()
  const parts = strNum.split('.')
  if (parts.length === 1) {
    return '0'
  }
  return parts[1]
}


function isFloat(num) {
  const strNum = num.toString()
  const parts = strNum.split('.')
  return parts.length === 2 && parts[1].length > 0 && parts[0].length > 0
}

module.exports = addCommas;