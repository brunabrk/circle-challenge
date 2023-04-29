import { device, element, by, expect } from 'detox'
import { meditationScreen } from './screens/meditation'
import { statsScreen } from './screens/stats'

describe('Meditation test cases', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
      permissions: { notifications: 'NO', userTracking: 'NO' },
    })
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should be able to play a meditation and store its stats', async () => {
    await meditationScreen().playMeditation()
    await meditationScreen().finishMeditation()

    await element(by.id('skip')).tap()
    await element(by.label('Stats')).tap()

    await expect(statsScreen().elements.currentStreak()).toHaveText('1 day')
    await expect(statsScreen().elements.totalSessions()).toHaveText('1 session')
  })
})
