const getYesterdayDate = () => {
  const today: Date = new Date()
  let yesterday: string = new Date(today.setDate(today.getDate() - 1)).toString().slice(8, 10)
  if (yesterday.charAt(0) === '0') {
    yesterday = yesterday.replace('0', '')
  }
  return yesterday
}

export { getYesterdayDate }
