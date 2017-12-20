// 将数字转换为万为单位的表示法没有单位
function changeHexElse (val) {
  if (!val) {
    return ''
  }
  if (val < 10000) {
    return val
  } else {
    return (val / 10000).toFixed(4)
  }
}

export {changeHexElse}