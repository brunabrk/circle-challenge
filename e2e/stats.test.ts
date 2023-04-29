import { device, element, by, expect } from 'detox'

describe('Stats test cases', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
      permissions: { notifications: 'NO', userTracking: 'NO' },
    })
  })

  beforeEach(async () => {
    await device.reloadReactNative()
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
