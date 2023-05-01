import { element, by } from 'detox'
import { getYesterdayDate } from '../helpers/dateManager'

const statsScreen = () => {
  const elements = {
    currentStreak: () => element(by.id('current-streak')),
    totalSessions: () => element(by.id('total-sessions')),
    date: (index: number) => element(by.text(getYesterdayDate())).atIndex(index),
    input: () => element(by.id('input')),
    listenedStat: () => element(by.id('listened-stat')),
    submitBtn: () => element(by.id('submit-btn')),
  }

  const selectDate = async () => {
    await elements.date(0).tap()
  }

  const fillMeditation = async (timeMeditation: string) => {
    await waitFor(elements.input()).toBeVisible().withTimeout(5000)
    await elements.input().typeText(timeMeditation)
    await elements.submitBtn().tap()
  }
  return {
    elements,
    selectDate,
    fillMeditation,
  }
}

export { statsScreen }
