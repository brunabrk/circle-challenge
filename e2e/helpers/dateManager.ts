const getYesterdayDate = () => {
  const today: Date = new Date()
  return new Date(today.setDate(today.getDate() - 1)).toString().slice(8, 10)
}

export { getYesterdayDate }
