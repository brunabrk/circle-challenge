import { element, by } from 'detox'

const meditationScreen = () => {
  const elements = {
    meditationItem: (index: number) => element(by.id('meditation-item')).atIndex(index),
    play: () => element(by.id('play-circle')),
    forwardBy10: () => element(by.id('forward-10')),
    stats: () => element(by.label('Stats')),
  }

  const playMeditation = async () => {
    await waitFor(elements.meditationItem(0)).toBeVisible().withTimeout(6000)
    await elements.meditationItem(0).tap()
    await waitFor(elements.play()).toBeVisible().withTimeout(6000)
    await elements.play().tap()
  }

  const finishMeditation = async () => {
    while (await elements.forwardBy10) {
      try {
        await elements.forwardBy10().tap()
      } catch (error) {
        break
      }
    }
  }

  return {
    elements,
    playMeditation,
    finishMeditation,
  }
}

export { meditationScreen }
