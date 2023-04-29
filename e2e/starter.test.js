// const { reloadApp } = require('detox-expo-helpers')
import { device, element, by } from 'detox'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
      permissions: { notifications: 'NO', userTracking: 'NO' },
    })
  })

  beforeEach(async () => {
    await device.reloadReactNative()
    // await reloadApp()
  })

  it('should see the current streak, sessions and time changing', async () => {
    await element(by.label('Stats')).tap()
    await expect(element(by.id('currentStreak'))).toBeVisible()
  })
})
