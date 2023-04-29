const getYesterdayDate = () => {
  const today: Date = new Date()
  return ('0' + (today.getDate() - 1)).slice(-2)
}

export { getYesterdayDate }
