import { device, element, by, expect } from 'detox'

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

  it('should be able to play a meditation', async () => {
    await element(by.id('meditation-item')).atIndex(0).tap()
    await element(by.id('play-circle')).tap()

    while (await element(by.id('forward-10'))) {
      try {
        await element(by.id('forward-10')).tap()
      } catch (error) {}
    }
    await expect(element(by.id('completed-meditation'))).toBeVisible()

    await element(by.id('skip')).tap()

    await element(by.label('Stats')).tap()

    await expect(element(by.id('current-streak'))).toHaveText('1 days')
    await expect(element(by.id('total-sessions'))).toHaveText('1 session')
  })
})
