import { device } from 'detox'
import { beforeAll, beforeEach } from '@jest/globals'

beforeAll(async () => {
  await device.launchApp({
    newInstance: true,
    permissions: { notifications: 'NO', userTracking: 'NO' },
  })
})

beforeEach(async () => {
  await device.reloadReactNative()
})
