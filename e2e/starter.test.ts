// const { reloadApp } = require('detox-expo-helpers')
import { device, element, by, expect } from 'detox'

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

  it('should be able to play a meditation', async () => {
    await element(by.id('ff171f80-5960-41e7-965c-1f9bcf31e02c')).tap()
    await element(by.id('play-circle')).tap()
  })

  it('should see the current streak, sessions and time changing', async () => {
    await element(by.label('Stats')).tap()
    await expect(element(by.id('currentStreak'))).toBeVisible()
  })
})
