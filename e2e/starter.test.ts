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
    await element(by.id('meditation-item')).atIndex(0).tap()
    await element(by.id('play-circle')).tap()
  })

  it('should be able to manually create an entry and updates the sessions and time changing', async () => {
    await element(by.label('Stats')).tap()

    const today: Date = new Date()
    const date: string = ('0' + today.getDate()).slice(-2)
    const timeMeditation: string = '33'
    await element(by.text(date)).atIndex(0).tap()
    await element(by.id('input')).typeText(timeMeditation)
    await element(by.id('submit-btn')).tap()

    await expect(element(by.id('current-streak'))).toHaveText('0 days')
    await expect(element(by.id('total-sessions'))).toHaveText('1 session')
    await expect(element(by.id('listened-stat'))).toHaveText(`${timeMeditation} minutes`)
  })
})
