import { expect } from 'detox'
import { meditationScreen } from './screens/meditation'
import { statsScreen } from './screens/stats'
import { completedScreen } from './screens/completed'

describe('Meditation test cases', () => {
  it('should be able to play a meditation and store its stats', async () => {
    await meditationScreen().playMeditation()
    await meditationScreen().finishMeditation()

    await completedScreen().elements.skip.tap()

    await meditationScreen().elements.stats().tap()
    await expect(statsScreen().elements.currentStreak()).toHaveText('1 day')
    await expect(statsScreen().elements.totalSessions()).toHaveText('1 session')
  })
})
