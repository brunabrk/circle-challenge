import { expect } from 'detox'
import { statsScreen } from './screens/stats'
import { meditationScreen } from './screens/meditation'

describe('Stats test cases', () => {
  it('should be able to manually create an entry and updates the sessions and time changing', async () => {
    await waitFor(meditationScreen().elements.stats()).toBeVisible()
    await meditationScreen().elements.stats().tap()
    await statsScreen().selectDate()

    const timeMeditation: string = '33'
    await statsScreen().fillMeditation(timeMeditation)

    await expect(statsScreen().elements.currentStreak()).toHaveText('1 day')
    await expect(statsScreen().elements.totalSessions()).toHaveText('1 session')
    await expect(statsScreen().elements.listenedStat()).toHaveText(`${timeMeditation} minutes`)
  })
})
